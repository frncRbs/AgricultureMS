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

const SiteContent = () => {
    const { register, handleSubmit } = useForm();
    const dispatch = useDispatch();
    const { users } = useSelector((state) => state.admin);

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
        <div className="site__content">
            <div className="top__heading">
                <Heading type="dashboard" text="Manage Home Contents" />
                <FilterGroup>
                    <Input
                        type="select"
                        data={barangay}
                        name="barangay"
                        register={register}
                        required
                    />
                </FilterGroup>
            </div>
        </div>
    );
};

export default SiteContent;
