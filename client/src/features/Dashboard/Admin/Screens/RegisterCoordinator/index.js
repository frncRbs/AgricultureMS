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
    const onSubmit = async (data) =>
        await dispatch(createPersonnelAccount(data)).unwrap();

    const programs = [
        {
            name: 'Program',
            value: 'Value 1',
            disabled: true,
        },
        {
            name: 'High Value Crops (HVC) ',
            value: 'High Value Crops',
        },
        {
            name: 'Rice Program (Rice) ',
            value: 'Rice Program',
        },
        {
            name: 'Corn Program (Corn) ',
            value: 'Corn Program',
        },
    ];

    const genders = [
        {
            name: 'Choose Gender',
            value: '',
            disabled: true,
        },
        {
            name: 'Male',
            value: 'male',
        },
        {
            name: 'Female',
            value: 'female',
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
                            name="position"
                            register={register}
                            required
                        />
                        <div className="body">
                            <div className="col">
                                <Input
                                    placeholder="First Name"
                                    name="firstname"
                                    register={register}
                                    required
                                />
                                <Input
                                    placeholder="Middle Name"
                                    name="middlename"
                                    register={register}
                                />
                                <Input
                                    placeholder="Last Name"
                                    name="lastname"
                                    register={register}
                                    required
                                />
                            </div>
                            <div className="col">
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
                                    name="placeOfBirth"
                                    register={register}
                                />
                                <Input
                                    type="tel"
                                    placeholder="9123456789"
                                    label="Mobile Number"
                                    name="mobileNumber"
                                    maxLength="10"
                                    required
                                    register={register}
                                />
                            </div>
                            <div className="col ">
                                <Input
                                    placeholder="Gender"
                                    name="gender"
                                    register={register}
                                    type="select"
                                    data={genders}
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
                                    type="text"
                                    placeholder="Ayala Zamboanga"
                                    label="Provincial Address"
                                    name="provincial"
                                    register={register}
                                    required
                                />
                                <Input
                                    type="text"
                                    placeholder="Ayala Zone 44"
                                    label="Barangay Address"
                                    name="barangay"
                                    register={register}
                                    required
                                />
                                <Input
                                    type="text"
                                    placeholder="Ayala Municipality"
                                    label="Municipality Address"
                                    name="municipality"
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
                                    label="Username"
                                    placeholder="juandelacruz"
                                    name="username"
                                    required
                                    register={register}
                                />
                                <Input
                                    label="Password"
                                    placeholder="********"
                                    name="password"
                                    required
                                    type="password"
                                    register={register}
                                />
                                <Input
                                    type="password"
                                    label="Confirm Password"
                                    name="password"
                                    placeholder="********"
                                    required
                                    register={register}
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
