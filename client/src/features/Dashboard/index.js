/*  Module Imports */
import React, { useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

/* Local Module Imports */
import { Sidebar, Icon, Toast, Button, AvatarDropdown } from '../../common';
import { greet } from '../../common/helpers/greet';
import admin from './Admin/controll';
import farmer from './Farmer/controll';
import personnel from './Personnel/controll';
import { logout } from '../Auth/authSlice';
import roles from '../../common/helpers/roles';

/* CSS Import */
import './_index.scss';
/* Sidebar */
const SidebarComponent = ({ role, getPageDetails }) => {
    switch (role) {
        case roles['admin']:
            return <Sidebar {...admin} getPageDetails={getPageDetails} />;
        case roles['personnel']:
            return <Sidebar {...personnel} getPageDetails={getPageDetails} />;
        default:
        case roles['farmer']:
            return <Sidebar {...farmer} getPageDetails={getPageDetails} />;
    }
};

/* Main UI - Dashboard */
const Dashboard = () => {
    const navigateTo = useNavigate();
    const [pageDetails, setPageDetails] = useState({});
    const dispatch = useDispatch();
    const { isSuccess, isAuthenticated, role, username } = useSelector(
        (state) => state.auth
    );

    useEffect(() => {
        if (!isAuthenticated) navigateTo('/login');
    }, [isSuccess, navigateTo, dispatch, isAuthenticated]);

    const handleLogout = () => {
        dispatch(logout());
        navigateTo('/login');
    };

    const getPageDetails = (pageDetails) => {
        setPageDetails(pageDetails);
    };

    /* Dummy Data */
    const image =
        'https://graphicsfamily.com/wp-content/uploads/edd/2021/07/Agriculture-Logo-Design-Free-PSD-Download-scaled.jpg';

    const menu = {
        username,
        role,
        image,
        menu: [
            {
                name: 'Edward',
                action: () => {},
            },
            {
                name: 'Settings',
                action: () => {},
            },
            {
                name: 'Logout',
                action: handleLogout,
            },
        ],
    };
    return (
        <div className="dashboard">
            <div className="dashboard__sidebar">
                <SidebarComponent getPageDetails={getPageDetails} role={role} />
            </div>
            <div className="dashboard__body">
                <div className="dashboard__body__sub-navbar">
                    <div className="left">
                        <h2>{pageDetails['name'] || 'Dashboard'}</h2>
                        <p>{pageDetails['heading'] || greet(username)}</p>
                        <Toast type="success" />
                    </div>
                    <div className="right">
                        <div className="icon">
                            <Icon name="search" />
                            <Icon name="notification" />
                        </div>
                        <AvatarDropdown {...menu} />
                    </div>
                </div>
                <div className="dashboard__sub-routes">
                    <Outlet />
                </div>
            </div>
            ;
        </div>
    );
};

export default Dashboard;
