import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { Route, Navigate, Outlet } from 'react-router-dom';

const PublicRoute = ({ children, ...rest }) => {
    const isAuthenticated = useSelector((state) => state.auth);

    return (
        <Route
            {...rest}
            render={({ location }) =>
                !isAuthenticated ? (
                    <Outlet />
                ) : (
                    <Navigate to="/" state={{ from: location }} />
                )
            }
        />
    );
};

export default PublicRoute;
