/* eslint-disable react/style-prop-object */
import React, { useEffect } from 'react';
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
import { listUsers } from '../../adminSlice';

import '../../_index.scss';

const SearchUser = () => {
    const { register, handleSubmit } = useForm();
    const dispatch = useDispatch();
    const { users } = useSelector((state) => state.admin);

    /* Submit Data  */
    const listUsersBasedOnRole = async (role) => {
        await dispatch(listUsers(role)).unwrap();
    };

    useEffect(() => {
        listUsersBasedOnRole({ role: 'farmer' });
    }, []);

    const programs = [
        {
            name: 'Program',
            value: 'Value 1',
        },
        {
            name: 'High Value Crops (HVC) ',
            value: 'Value 2',
        },
        {
            name: 'Rice Program (Rice) ',
            value: 'Value 2',
        },
        {
            name: 'Corn Program (Corn) ',
            value: 'Value 2',
        },
        {
            name: 'Show All ',
            value: 'Value 2',
        },
    ];

    const barangay = [
        {
            name: 'Barangay',
            value: 'Value 1',
        },
        {
            name: 'Maasin',
            value: 'Value 2',
        },
        {
            name: 'Cawit',
            value: 'Value 2',
        },
        {
            name: 'Ayala',
            value: 'Value 2',
        },
    ];

    const table = {
        heading: [
            'ID',
            'Full Name',
            'Gender',
            'Birth Date',
            'Commodity',
            'Size(HA)',
            'Barangay',
            'Contact Number',
        ],
        data: users || [],
    };

    return (
        <div className="search__user">
            <div className="top__heading">
                <Heading type="dashboard" text="List of Users" />
                <FilterGroup>
                    <Input
                        type="select"
                        data={programs}
                        name="program"
                        register={register}
                        required
                    />
                    <Input
                        type="select"
                        data={barangay}
                        name="barangay"
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

            <Table type="search_user" table={table} />
        </div>
    );
};

export default SearchUser;
