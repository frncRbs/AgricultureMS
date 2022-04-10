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
import { capitalizeFirstLetter } from '../../../../../common/helpers/letters';

const formatAccountStatus = (status) => {
    const accountStatus = {
        activate: 'activate',
        deactivate: 'deactivate',
    };
    return {
        stringResult:
            status === 1 ? accountStatus.activate : accountStatus.deactivate,
        numberResult: status === accountStatus.activate ? 1 : 0,
    };
};

const EditUser = ({
    roles,
    accountStatuses,
    dispatch,
    user,
    handleOnModalClose,
}) => {
    const { id, role, isActivated, fullname } = user;
    const { register, handleSubmit } = useForm();
    const [_accountStatus, setAccountStatus] = useState(isActivated);
    const [_role, setRole] = useState(role);

    /* Submit New Program  */
    const onSubmit = async (data) => {
        const updatedUser = {
            ...data,
            isActivated: formatAccountStatus(_accountStatus).numberResult,
            role: _role,
            id,
        };
        await dispatch(updateUserAccount(updatedUser)).unwrap();
    };

    return (
        <form className="body" onSubmit={handleSubmit(onSubmit)}>
            <div className="account__details">
                <p>
                    <b> Name: </b>
                    {fullname}
                </p>
                <p>
                    <b>Role: </b> {capitalizeFirstLetter(_role)}
                </p>
                <p>
                    <b>Account Status: </b>{' '}
                    {_accountStatus === 'deactivate'
                        ? '🔴 | Deactivated'
                        : '🟢 | Activated'}
                </p>
            </div>
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
                name="isActivated"
                data={accountStatuses}
                register={register}
                _onChange={(name, value) => {
                    setAccountStatus(value);
                    console.log({
                        value,
                        _accountStatus: _accountStatus,
                    });
                }}
                value={_accountStatus}
            />
            <Button name="Update" style="primary" type="submit" />
            <Button
                name="Cancel"
                style="secondary"
                type="button"
                onClick={() =>
                    dispatch(setModalState({ editUserModal: false }))
                }
            />
        </form>
    );
};

const ManageAccounts = () => {
    const { register } = useForm();
    const dispatch = useDispatch();
    const { users, updatedObject } = useSelector((state) => state.admin);
    const { editUserModal } = useSelector((state) => state.modal);
    const [user, setUser] = useState({});

    const roles = [
        {
            name: 'Filter By Role',
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
            value: 'activate',
        },
        {
            name: 'Deactivate',
            value: 'deactivate',
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
            edit: (_user) => {
                setUser({
                    ..._user,
                    isActivated: formatAccountStatus(_user.isActivated)
                        .stringResult,
                });
                console.log({ dropdown: user });
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
                            <h2>Update User Account</h2>
                        </div>
                        <EditUser
                            roles={roles}
                            dispatch={dispatch}
                            accountStatuses={accountStatuses}
                            handleOnModalClose={handleOnModalClose}
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
