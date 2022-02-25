/* eslint-disable react/style-prop-object */
/* Module Imports */
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

/* Local Module Imports */
import { Button, Navbar } from '../../../common';
import { logout } from '../authSlice';

/* Local CSS imports */
import './_index.scss';

const VerifiAccount = () => {
    const dispatch = useDispatch();
    const navigateTo = useNavigate();
    const { isAuthenticated, isActivated } = useSelector((state) => state.auth);

    const handleLogout = () => {
        dispatch(logout());
        navigateTo('/');
    };

    useEffect(() => {
        if (!isAuthenticated) {
            dispatch(logout());
            navigateTo('/');
        }
    }, [dispatch, isAuthenticated, navigateTo]);

    useEffect(() => {
        if (isAuthenticated && isActivated) {
            navigateTo('/dashboard');
        }
    }, [isActivated, isAuthenticated, navigateTo]);

    const message = {
        newUser: {
            title: 'Welcome Agriculturist!',
            message:
                'Hi Juan, Thank you for signing up! Your account is not yet activated. We will be sending you an update to your mobile number once your account is reviewed and verified by the Administrator.',
        },

        oldUser: {
            title: 'Account Status: Pending',
            message:
                'Hi Juan, your account is currently not activated. Please come back until your account is reviewed and verified by the Administrator.',
        },
    };

    return (
        <>
            <Navbar type="auth" />
            <div className="verify__account">
                <div className="content">
                    <div className="heading">
                        <h1>{message.newUser.title}</h1>
                        <p>{message.newUser.message}</p>
                    </div>
                    <div className="body">
                        <Button
                            name="Logout"
                            style="primary"
                            type="submit"
                            onClick={handleLogout}
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default VerifiAccount;
