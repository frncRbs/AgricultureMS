/* eslint-disable react/style-prop-object */
/* Module Imports */
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

/* Local Module Imports */
import { Input, Button, Navbar } from '../../../common';
import { register as registerUser } from '../authSlice';

/* Local CSS imports */
import '../_index.scss';

const Register = () => {
    const dispatch = useDispatch();
    const navigateTo = useNavigate();
    const { register, handleSubmit } = useForm();
    const { isActivated, isAuthenticated } = useSelector((state) => state.auth);

    /* Register Function  */
    const onSubmit = async (data) => {
        await dispatch(registerUser(data)).unwrap();
    };

    console.log({ isAuthenticated, isActivated });

    /* Redirect to login page  */
    const handleRedirectToLogin = (e) => navigateTo('/login');

    // /* Immediately redirect user to account-status page if their account is not activated by an admin */
    useEffect(() => {
        if (isAuthenticated) navigateTo(`/account-status`);
    }, [isAuthenticated, navigateTo]);

    return (
        <>
            <Navbar type="auth" />
            <div className="form">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="content">
                        <div className="heading">
                            <h1>Welcome Agriculturist!</h1>
                            <p>Please sign in to create an account</p>
                        </div>
                        <div className="body">
                            <Input
                                placeholder="Username"
                                name="username"
                                required
                                register={register}
                            />
                            <Input
                                placeholder="Mobile Number"
                                name="mobileNumber"
                                required
                                register={register}
                            />
                            <Input
                                placeholder="Password"
                                name="password"
                                required
                                type="password"
                                register={register}
                            />

                            <Button
                                name="Sign Up"
                                style="primary"
                                type="submit"
                            />
                        </div>
                        <div className="footer">
                            <Button
                                name="Sign In"
                                style="secondary"
                                onClick={handleRedirectToLogin}
                            />
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
};

export default Register;
