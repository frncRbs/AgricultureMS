/* eslint-disable react/style-prop-object */
/* Module Imports */
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

/* Local Module Imports */
import { Input, Button, Navbar } from '../../../common';
import { register as registerUser } from '../authSlice';
import { stateObject, persistFields, clearFields } from '../../App/appSlice';

/* Local CSS imports */
import '../_index.scss';

const Register = () => {
    const [next, setNext] = useState(0);
    const dispatch = useDispatch();
    const navigateTo = useNavigate();
    const { register, handleSubmit } = useForm();
    const { isActivated, isAuthenticated } = useSelector((state) => state.auth);
    const { onFarmerRegister } = useSelector((state) => state.app);

    /* Register Function  */
    const onSubmit = async (data) => {
        const newUser = {
            ...data,
        };

        console.log({ newUser });
        await dispatch(registerUser(newUser)).unwrap();
    };

    /* Redirect to login page  */
    const handleRedirectToLogin = (e) => navigateTo('/login');

    /* Handle forward form field  */
    const handleForwardFormField = (e) => setNext(next + 1);

    /* Handle backward form field  */
    const handleBackwardFormField = (e) => setNext(next - 1);

    const _onChange = async (name, value) => {
        let data = {};
        data[name] = value;

        console.log({ data, name, value });
        await dispatch(
            persistFields({
                stateObject: stateObject.onFarmerRegister,
                data,
            })
        ).unwrap();
    };

    /* Clear form fields when registration process is successful */
    useEffect(() => {
        dispatch(clearFields({ stateObject: stateObject.onFarmerRegister }));
    }, []);

    /* Immediately redirect user to account-status page if the account is not activated */
    useEffect(() => {
        if (isAuthenticated && !isActivated) navigateTo(`/account-status`);
    }, [isActivated, navigateTo, dispatch, isAuthenticated]);

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

    const civilStatuses = [
        {
            name: 'Civil Status',
            value: '',
            disabled: true,
        },
        {
            name: 'Single',
            value: 'single',
        },
        {
            name: 'Married',
            value: 'married',
        },
        {
            name: 'Separated',
            value: 'separated',
        },
        {
            name: 'Divorced',
            value: 'divorced',
        },
        {
            name: 'Widowed',
            value: 'widowed',
        },
    ];

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

    return (
        <>
            <Navbar type="auth" />
            <div className="form">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="content">
                        <div className="heading">
                            <h1>Farmer Registration</h1>
                            <p>Please sign in to create an account</p>
                        </div>
                        <div className="body">
                            {!next ? (
                                <>
                                    <Input
                                        type="select"
                                        label="Register For
                                    (position)"
                                        data={programs}
                                        placeholder="Register For"
                                        name="position"
                                        required
                                        register={register}
                                        value={onFarmerRegister['position']}
                                    />
                                    <Input
                                        type="text"
                                        placeholder="Juan"
                                        label="First Name"
                                        name="firstname"
                                        required
                                        register={register}
                                        value={onFarmerRegister['firstname']}
                                        _onChange={_onChange}
                                    />
                                    <Input
                                        type="text"
                                        placeholder="Dela (optional)"
                                        label="Middle Name"
                                        name="middlename"
                                        required
                                        register={register}
                                        value={onFarmerRegister['middlename']}
                                        _onChange={_onChange}
                                    />
                                    <Input
                                        type="text"
                                        placeholder="Cruz"
                                        label="Last Name"
                                        name="lastname"
                                        required
                                        register={register}
                                        value={onFarmerRegister['lastname']}
                                        _onChange={_onChange}
                                    />
                                    <Input
                                        type="tel"
                                        placeholder="9123456789"
                                        label="Mobile Number"
                                        name="mobileNumber"
                                        maxLength="10"
                                        required
                                        register={register}
                                        value={onFarmerRegister['mobileNumber']}
                                    />
                                </>
                            ) : next === 1 ? (
                                <>
                                    <Input
                                        type="select"
                                        label="Gender"
                                        name="gender"
                                        required
                                        register={register}
                                        data={genders}
                                        value={onFarmerRegister['gender']}
                                    />
                                    <Input
                                        type="date"
                                        label="Birth Date"
                                        name="birthDate"
                                        register={register}
                                        value={onFarmerRegister['birthDate']}
                                    />
                                    <Input
                                        type="text"
                                        placeholder="Ayala Zamboanga City"
                                        label="Place of Birth"
                                        name="placeOfBirth"
                                        register={register}
                                        value={onFarmerRegister['placeOfBirth']}
                                    />
                                    <Input
                                        type="select"
                                        label="Civil Status"
                                        name="civilStatus"
                                        required
                                        register={register}
                                        data={civilStatuses}
                                        value={onFarmerRegister['civilStatus']}
                                    />
                                    <Input
                                        type="text"
                                        placeholder="Catholic, Born Again"
                                        label="Religion"
                                        name="religion"
                                        register={register}
                                        value={onFarmerRegister['religion']}
                                    />
                                </>
                            ) : next === 2 ? (
                                <>
                                    <Input
                                        type="text"
                                        placeholder="Ayala's Street"
                                        label="Street"
                                        name="street"
                                        register={register}
                                        required
                                        value={onFarmerRegister['street']}
                                    />
                                    <Input
                                        type="text"
                                        placeholder="Windward Subdivision"
                                        label="Subdivision"
                                        name="subdivision"
                                        register={register}
                                        required
                                        value={onFarmerRegister['subdivision']}
                                    />
                                    <Input
                                        type="text"
                                        placeholder="Sition 1"
                                        label="Sitio"
                                        name="sitio"
                                        register={register}
                                        required
                                        value={onFarmerRegister['sitio']}
                                    />
                                </>
                            ) : next === 3 ? (
                                <>
                                    <Input
                                        type="text"
                                        placeholder="Ayala Zone 44"
                                        label="Barangay Address"
                                        name="barangay"
                                        register={register}
                                        required
                                        value={onFarmerRegister['barangay']}
                                    />
                                    <Input
                                        type="text"
                                        placeholder="Ayala Municipality"
                                        label="Municipality Address"
                                        name="municipality"
                                        register={register}
                                        required
                                        value={onFarmerRegister['municipality']}
                                    />
                                    <Input
                                        type="text"
                                        placeholder="3001"
                                        label="Zip Code"
                                        name="zipCode"
                                        register={register}
                                        maxLength={4}
                                        required
                                        value={onFarmerRegister['zipCode']}
                                    />
                                </>
                            ) : (
                                next >= 4 && (
                                    <>
                                        <Input
                                            type="text"
                                            label="Username"
                                            placeholder="juandelacruz"
                                            name="username"
                                            required
                                            register={register}
                                            value={onFarmerRegister['username']}
                                        />
                                        <Input
                                            type="password"
                                            label="Password"
                                            placeholder="********"
                                            name="password"
                                            required
                                            register={register}
                                        />
                                        {/* <Input
                                        type="password"
                                        label="Confirm Password"
                                        name="password"
                                        placeholder="********"
                                        required
                                        register={register}
                                    /> */}
                                    </>
                                )
                            )}

                            {next < 4 ? (
                                <Button
                                    name="Next"
                                    style="primary"
                                    onClick={handleForwardFormField}
                                    type="button"
                                />
                            ) : (
                                <Button
                                    name="Submit"
                                    style="primary"
                                    type="submit"
                                />
                            )}
                        </div>
                        <div className="footer">
                            {next >= 1 ? (
                                <Button
                                    name="Back"
                                    style="secondary"
                                    onClick={handleBackwardFormField}
                                    type="button"
                                />
                            ) : (
                                <Button
                                    name="Sign In"
                                    style="secondary"
                                    onClick={handleRedirectToLogin}
                                />
                            )}
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
};

export default Register;
