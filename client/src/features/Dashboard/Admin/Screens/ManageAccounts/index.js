/* eslint-disable react/style-prop-object */
import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import {
    Button,
    FilterGroup,
    Heading,
    Input,
    Table,
    Modal,
} from '../../../../../common';
import { updateUserAccount, listUsers } from '../../adminSlice';
import { setModalState } from '../../../../Modal/modalSlice';

import '../../_index.scss';

const EditUser = ({ roles, accountStatuses, dispatch, user }) => {
    const { id, role, isActivated } = user;
    const { register, handleSubmit } = useForm();
    const [accountStatus, setAccountStatus] = useState(isActivated);
    const [_role, setRole] = useState(role);

    /* Submit New Program  */
    const onSubmit = async (data) => {
        const updatedUser = {
            ...data,
            isActivated: accountStatus,
            role: _role,
            id,
        };
        await dispatch(updateUserAccount(updatedUser)).unwrap();
    };

    return (
        <form className="body" onSubmit={handleSubmit(onSubmit)}>
            <Input
                type="select"
                label="Role"
                name="role"
                data={roles}
                register={register}
                _onChange={(name, value) => setRole(value)}
                value={_role}
            />
            <Input
                type="select"
                label="Account Status"
                data={accountStatuses}
                name="isActivated"
                register={register}
                _onChange={(name, value) => setAccountStatus(value)}
                value={accountStatus}
            />
            <Button name="Update" style="primary" type="submit" />
            <Button name="Cancel" style="secondary" type="button" />
        </form>
    );
};

const ManageAccounts = () => {
    const { register } = useForm();
    const dispatch = useDispatch();
    const { users, updatedObject } = useSelector((state) => state.admin);
    const { editUserModal } = useSelector((state) => state.modal);
    const [user, setUser] = useState('');

    const roles = [
        {
            name: 'Filter',
            value: 'all',
            disabled: true,
            selected: true,
        },
        {
            name: 'Personnel',
            value: 'personnel',
        },
        {
            name: 'Farmer',
            value: 'farmer',
        },
        {
            name: 'Admin',
            value: 'admin',
        },
    ];

    const accountStatuses = [
        {
            name: 'Account Status',
            value: 'none',
            disabled: true,
        },
        {
            name: 'Activate',
            value: Number(1),
        },
        {
            name: 'Deactivate',
            value: Number(0),
        },
    ];

    /* Close Modal */
    const handleOnModalClose = (name) =>
        dispatch(setModalState({ [name]: false }));

    const table = {
        heading: [
            'ID',
            'Image',
            'Last Name',
            'First Name',
            'Middle Name',
            'Date Active',
            'Birth Date',
            'Account Status',
            'Role',
            'Actions',
        ],
        data: users || [],
        actions: {
            edit: ({ id, role, isActivated }) => {
                setUser({ id, role, isActivated });
                dispatch(setModalState({ editUserModal: true }));
            },
        },
    };

    const handleOnRoleChange = async (role) =>
        await dispatch(listUsers({ role })).unwrap();

    useEffect(() => {
        (async () => await dispatch(listUsers({ role: 'all' })).unwrap())();
    }, [dispatch, updatedObject]);

    return (
        <div className="manage__accounts">
            {editUserModal && (
                <Modal
                    handleOnModalClose={() =>
                        handleOnModalClose('editUserModal')
                    }
                >
                    <div className="modal__content">
                        <div className="heading">
                            <h2>Update User</h2>
                        </div>
                        <EditUser
                            roles={roles}
                            dispatch={dispatch}
                            accountStatuses={accountStatuses}
                            user={user}
                        />
                    </div>
                </Modal>
            )}
            <div className="top__heading">
                <Heading
                    type="dashboard"
                    text="Activate and Deactivate Accounts"
                />
                <FilterGroup>
                    <Input
                        type="select"
                        data={[...roles, { name: 'All', value: 'all' }]}
                        name="role"
                        register={register}
                        _onChange={(name, value) => handleOnRoleChange(value)}
                        required
                    />
                    <Input
                        type="text"
                        name="search"
                        placeholder="Search name..."
                        register={register}
                        required
                    />
                    <Button style="primary" name="Print" />
                </FilterGroup>
            </div>

            <Table type="manage_accounts" table={table} />
        </div>
    );
};

export default ManageAccounts;
