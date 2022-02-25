/* eslint-disable react/style-prop-object */
import React from 'react';
import { useForm } from 'react-hook-form';
import { Input, Button, Table } from '../../../../common';

// import '../_index.scss';

const Dashboard = () => {
    const { register } = useForm();

    const filter = [
        {
            name: 'Status',
            value: 'Value 1',
            disabled: true,
        },
        {
            name: 'Approved',
            value: 'Value 2',
        },
        {
            name: 'Declined ',
            value: 'Value 2',
        },
    ];

    return (
        <div className="screen__dashboard">
            <div className="screen__dashboard--filter">
                <Input
                    type="select"
                    data={filter}
                    name="program"
                    register={register}
                    required
                />
            </div>

            <Table />
        </div>
    );
};

export default Dashboard;
