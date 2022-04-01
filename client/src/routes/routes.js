/* Module Imports */
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import toast, { Toaster } from 'react-hot-toast';
import { useSelector, useDispatch } from 'react-redux';

/* Local Module Imports */
import { Dashboard, Home, Login, Register, VerifyAccount } from '../features';

/* Dashboards */
import admin from '../features/Dashboard/Admin/controll';
import farmer from '../features/Dashboard/Farmer/controll';
import personnel from '../features/Dashboard/Personnel/controll';

/* Common */
import { Preloader } from '../common';

/* Slices */
import { clearToast } from '../features/Toast/toastSlice';
import { verifyUser } from '../features/Auth/authSlice';

/* Helpers */
import roles from '../common/helpers/roles';

/* Route Component */
import PrivateRoute from './PrivateRoute';
import { clearFields } from '../features/App/appSlice';

const history = createBrowserHistory();

const NotFound = () => <h1>Not Found</h1>;

const provideRouteBasedOnRole = (role) => {
    let route = null;

    switch (role) {
        case roles['admin']:
            route = admin.menu.map((subRoute, i) => (
                <Route
                    key={i}
                    index
                    path={subRoute.path}
                    element={subRoute.display}
                />
            ));
            break;
        case roles['personnel']:
            route = personnel.menu.map((subRoute, i) => (
                <Route
                    key={i}
                    index
                    path={subRoute.path}
                    element={subRoute.display}
                />
            ));
            break;
        case roles['farmer']:
            route = farmer.menu.map((subRoute, i) => (
                <Route
                    key={i}
                    index
                    path={subRoute.path}
                    element={subRoute.display}
                />
            ));
            break;
        default:
            break;
    }

    return route;
};

/* Main Routes */
const RootRoutes = () => {
    const dispatch = useDispatch();
    const { isSuccess, isError, message } = useSelector((state) => state.toast);
    const currentUser = useSelector((state) => state.auth);
    // const adminSelect = useSelector((state) => state.admin);

    /* Verifiy User */
    useEffect(() => {
        dispatch(verifyUser());
    }, [currentUser, dispatch]);

    /* Success Notification */
    useEffect(() => {
        if (isSuccess) {
            toast.success(message);
        }
    }, [isSuccess, message]);

    /* Error Notification*/
    useEffect(() => {
        if (isError) {
            toast.error(message);
        }
    }, [isError, message]);

    /* Clear Notification */
    useEffect(() => {
        dispatch(clearToast());
    }, [message, dispatch]);

    return (
        <Router>
            {currentUser.isLoading && <Preloader />}
            {/* {adminSelect.isLoading && <Preloader />} */}

            <Toaster position="top-right" reverseOrder={false} />
            <Routes history={history}>
                <Route path="" index element={<Home />} />
                <Route path="login" element={<Login />} />
                <Route path="register" element={<Register />} />
                <Route path="/account-status" element={<VerifyAccount />} />
                <Route
                    element={
                        <PrivateRoute>
                            <Dashboard />
                        </PrivateRoute>
                    }
                >
                    {provideRouteBasedOnRole(currentUser['role'])}
                </Route>
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    );
};

export default RootRoutes;
