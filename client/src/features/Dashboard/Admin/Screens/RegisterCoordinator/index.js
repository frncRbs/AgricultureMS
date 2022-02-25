/* eslint-disable react/style-prop-object */
import React from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { Button, Divider, Heading, Input } from '../../../../../common';

import '../../_index.scss';

/* Actions */
import { createPersonnelAccount } from '../../adminSlice';

const RegisterCoordinator = () => {
    const { register, handleSubmit } = useForm();
    const dispatch = useDispatch();

    /* Submit Data  */
    const onSubmit = async (data) => {
        await dispatch(createPersonnelAccount(data)).unwrap();
        console.log({ FORMDATA: data });
    };

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

    return (
        <div className="register_coordinator">
            <div className="register_coordinator--form">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="content">
                        <Heading
                            type="dashboard"
                            text="Coordinator's Profile"
                        />
                        <Input
                            type="select"
                            data={programs}
                            placeholder="Register For"
                            name="program"
                            register={register}
                            required
                        />
                        <div className="body">
                            <div className="col">
                                <Input
                                    placeholder="First Name"
                                    name="firstName"
                                    register={register}
                                    required
                                />
                                <Input
                                    placeholder="Middle Name"
                                    name="middleName"
                                    register={register}
                                />
                                <Input
                                    placeholder="Last Name"
                                    name="lastName"
                                    register={register}
                                    required
                                />
                            </div>
                            <div className="col">
                                <Input
                                    type="select"
                                    data={programs}
                                    placeholder="Position"
                                    name="program"
                                    register={register}
                                    required
                                />
                                <Input
                                    type="date"
                                    placeholder="Birth Date"
                                    name="birthDate"
                                    register={register}
                                />
                                <Input
                                    type="text"
                                    data={programs}
                                    placeholder="Place of Birth"
                                    name="placeOfbirth"
                                    register={register}
                                />
                            </div>
                            <div className="col ">
                                <Input
                                    placeholder="Gender"
                                    name="gender"
                                    register={register}
                                />
                                <Input
                                    placeholder="Contact Number"
                                    name="contactNumber"
                                    register={register}
                                    required
                                />
                            </div>
                        </div>
                        <Heading
                            type="dashboard"
                            text="Coordinator's Addresse"
                        />
                        <div className="body">
                            <div className="col">
                                <Input
                                    placeholder="Provincial Address"
                                    name="provincialAddress"
                                    register={register}
                                    required
                                />
                                <Input
                                    placeholder="Barangay Address"
                                    name="barangayAddress"
                                    type="text"
                                    register={register}
                                    required
                                />
                                <Input
                                    placeholder="Municipality Address"
                                    name="municipalityAddress"
                                    type="text"
                                    register={register}
                                    required
                                />
                            </div>
                        </div>
                        <Heading
                            type="dashboard"
                            text="Coordinator's Login Account"
                        />
                        <div className="body">
                            <div className="col">
                                <Input
                                    placeholder="Username"
                                    name="username"
                                    register={register}
                                    required
                                />
                                <Input
                                    placeholder="Password"
                                    name="password"
                                    type="password"
                                    register={register}
                                    required
                                />
                                <Input
                                    placeholder="Confirm Password"
                                    type="password"
                                    name="confirmPassword"
                                    register={register}
                                    required
                                />
                            </div>
                        </div>
                        <Divider />
                        <div className="footer">
                            <Button
                                name="Register Coordinator"
                                style="primary"
                                type="submit"
                            />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default RegisterCoordinator;
