/* eslint-disable react/style-prop-object */
/* Module Imports */
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

/* Local Module Imports */
import { Input, Button, Navbar } from '../../../common';
import { login } from '../authSlice';

/* Local CSS imports */
import '../_index.scss';

const Login = () => {
    const dispatch = useDispatch();
    const navigateTo = useNavigate();
    const { register, handleSubmit } = useForm();
    const { isSuccess, isActivated, isAuthenticated } = useSelector(
        (state) => state.auth
    );

    /* Submit Data  */
    const onSubmit = async (data) => await dispatch(login(data)).unwrap();

    /* Redirect to registration page  */
    const handleRedirectToRegistration = (e) => navigateTo('/register');

    /* Immediately redirect user to dashboard if the crendentials is valid */
    useEffect(() => {
        if (isAuthenticated && isActivated) navigateTo('/dashboard');
    }, [isSuccess, navigateTo, dispatch, isAuthenticated, isActivated]);

    /* Immediately redirect user to account-status page if their account is not activated by an admin */
    useEffect(() => {
        if (isAuthenticated && !isActivated) navigateTo(`/account-status`);
    }, [isActivated, navigateTo, dispatch, isAuthenticated]);

    return (
        <>
            <Navbar type="auth" />
            <div className="form">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="content">
                        <div className="heading">
                            <h1>Welcome back Agriculturist!</h1>
                            <p>Please sign in to continue</p>
                        </div>
                        <div className="body">
                            <Input
                                placeholder="juandelacruz"
                                label="Username"
                                name="username"
                                required
                                register={register}
                            />
                            <Input
                                placeholder="********"
                                label="Password"
                                name="password"
                                required
                                type="password"
                                register={register}
                            />
                            <div className="message">
                                <p>Forgot your password?</p>
                            </div>
                            <Button
                                name="Sign In"
                                style="primary"
                                type="submit"
                            />
                        </div>
                        <div className="footer">
                            <Button
                                name="Sign Up"
                                style="secondary"
                                onClick={handleRedirectToRegistration}
                            />
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
};

export default Login;
