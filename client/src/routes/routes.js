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
import PublicRoute from './PublicRoute';

const history = createBrowserHistory();

const NotFound = () => <h1>Not Found </h1>;

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
    }, [isSuccess, dispatch, message]);

    /* Error Notification*/
    useEffect(() => {
        if (isError) {
            toast.error(message);
        }
    }, [isSuccess, isError, message, dispatch]);

    /* Clear Notification */
    useEffect(() => {
        dispatch(clearToast());
    }, [isSuccess, isError, message, dispatch]);

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
                    {
                        /* ADMIN ROUTES */
                        currentUser['role'] === roles['admin']
                            ? admin.menu.map((subRoute, i) => (
                                  <Route
                                      key={i}
                                      index
                                      path={subRoute.path}
                                      element={subRoute.display}
                                  />
                              ))
                            : /* PERSONNEL ROUTES */
                            currentUser['role'] === roles['personnel']
                            ? personnel.menu.map((subRoute, i) => (
                                  <Route
                                      key={i}
                                      index
                                      path={subRoute.path}
                                      element={subRoute.display}
                                  />
                              ))
                            : /* FARMER ROUTES */
                              currentUser['role'] === roles['farmer'] &&
                              farmer.menu.map((subRoute, i) => (
                                  <Route
                                      key={i}
                                      index
                                      path={subRoute.path}
                                      element={subRoute.display}
                                  />
                              ))
                    }
                </Route>
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    );
};

export default RootRoutes;
