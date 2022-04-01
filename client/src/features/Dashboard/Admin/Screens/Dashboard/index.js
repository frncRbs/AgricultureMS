/* eslint-disable react/style-prop-object */
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import {
    Input,
    Button,
    Table,
    FilterGroup,
    Heading,
} from '../../../../../common';
import { listUsers } from '../../adminSlice';

import '../../_index.scss';

const Dashboard = () => {
    const { register } = useForm();
    const dispatch = useDispatch();
    const { users } = useSelector((state) => state.admin);

    /* Submit Data  */
    const listUsersBasedOnRole = async (role) => {
        await dispatch(listUsers(role)).unwrap();
    };

    useEffect(() => {
        listUsersBasedOnRole({ role: 'personnel' });
    }, []);

    const programs = [
        {
            name: 'Program',
            value: 'Value 1',
            disabled: true,
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

    const statistics = [
        {
            count: 13436,
            name: 'Total Number of Farmers',
            color: 'var(--green-1)',
        },
        {
            count: 185358,
            name: 'Total Approved of Farmers',
            color: 'orange',
        },
        {
            count: 5464,
            name: 'Total Pending of Farmers',
            color: 'yellow',
        },
        {
            count: 723,
            name: 'Total Declined of Farmers',
            color: 'pink',
        },
    ];

    const table = {
        heading: [
            'ID',
            'Last Name',
            'First Name',
            'Middle Name',
            'Gender',
            'Program',
            'Date Active',
            'No. of Farmers',
        ],
        data: users || [],
    };

    return (
        <div className="screen__dashboard">
            <div className="top__heading">
                <Heading
                    type="dashboard"
                    text="Ayala Agriculturist's Daily Records"
                />
                <FilterGroup>
                    <Input
                        type="select"
                        data={programs}
                        name="program"
                        register={register}
                        required
                    />
                    <Button style="primary" name="Print" />
                </FilterGroup>
            </div>

            <div className="screen__dashboard-records">
                {statistics.map((data) => (
                    <div
                        className="records"
                        style={{ backgroundColor: data.color }}
                    >
                        <h1>{data.count}</h1>
                        <p>{data.name}</p>
                    </div>
                ))}
            </div>

            <Table type="admin_dashboard" table={table} />
        </div>
    );
};

export default Dashboard;
