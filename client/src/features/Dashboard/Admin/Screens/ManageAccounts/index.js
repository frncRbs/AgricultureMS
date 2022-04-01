/* eslint-disable react/style-prop-object */
import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import {
    Button,
    Divider,
    FilterGroup,
    Heading,
    Input,
    Table,
} from '../../../../../common';

import '../../_index.scss';

const ManageAccounts = () => {
    const { register, handleSubmit } = useForm();
    const dispatch = useDispatch();
    const { users } = useSelector((state) => state.admin);

    const roles = [
        {
            name: 'Role',
            value: 'Value 1',
        },
        {
            name: 'Personnel',
            value: 'Value 2',
        },
        {
            name: 'Farmer',
            value: 'Value 2',
        },
    ];

    const table = {
        heading: [
            'ID',
            'Image',
            'Last Name',
            'First Name',
            'Middle Name',
            'Date Active',
            'Birth Date',
            'Role',
            'Actions',
        ],
        data: users || [],
        actions: {
            delete: async (id, type) => {
                console.log({ id, type });
            },
            edit: async (id, type, currentValue) => {
                console.log({ id, type, currentValue });
            },
        },
    };

    return (
        <div className="manage__accounts">
            <div className="top__heading">
                <Heading
                    type="dashboard"
                    text="Activate and Deactivate Accounts"
                />
                <FilterGroup>
                    <Input
                        type="select"
                        data={roles}
                        name="role"
                        register={register}
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
