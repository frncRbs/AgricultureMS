import React from 'react';
import { useForm } from 'react-hook-form';

import {
    Heading,
    Input,
    Button,
    FilterGroup,
    Table,
    Icon,
} from '../../../../../common';

import '../../_index.scss';

const SetProgram = () => {
    const { register, handleSubmit } = useForm();

    const programs = [
        {
            name: 'Program',
            value: 'Value 1',
            disabled: true,
        },
        {
            name: 'Crops',
            value: 'Value 2',
        },
        {
            name: 'Services',
            value: 'Value 2',
        },
    ];

    return (
        <div className="set__program">
            <div className="top__heading">
                <Heading type="dashboard" text="Services & Crops" />
                <FilterGroup>
                    <Input
                        type="select"
                        data={programs}
                        name="program"
                        register={register}
                        required
                    />
                    <Icon
                        name="add"
                        color="var(--green-1)"
                        size="50"
                        extraStyles={{ cursor: 'pointer' }}
                    />
                </FilterGroup>
            </div>

            <Table />
        </div>
    );
};

export default SetProgram;
