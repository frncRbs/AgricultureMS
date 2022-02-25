import { Icon } from '../../../common';
import { greet } from '../../../common/helpers/greet';
import { Dashboard, RegisterCoordinator, SetProgram } from './Screens';

const controll = {
    type: 'dashboard',
    name: 'Admin Dashboard',
    tags: ['Dashboard', 'Features', 'Website Homepage'],
    menu: [
        {
            path: 'dashboard',
            display: <Dashboard />,
            name: 'Dashboard',
            heading: greet('Admin'),
            Icon: <Icon name="dashboard" color="var(--white-2)" />,
        },
        {
            path: 'set-program',
            display: <SetProgram />,
            name: 'Set Program',
            heading: greet('Admin'),
            Icon: <Icon name="account_tree" color="var(--white-2)" />,
        },
        {
            path: 'register-coordinator',
            display: <RegisterCoordinator />,
            name: 'Register Coordinator',
            heading: 'Create Coordinators Account',
            Icon: <Icon name="person_add" color="var(--white-2)" />,
        },
        {
            path: 'search-farmer',
            display: <h1>search</h1>,
            name: 'Search Farmer',
            heading: greet('Admin'),
            Icon: <Icon name="person_search" color="var(--white-2)" />,
        },
        {
            path: 'manage-accounts',
            display: <h1>manage</h1>,
            name: 'Manage Accounts',
            heading: greet('Admin'),
            Icon: <Icon name="manage_account" color="var(--white-2)" />,
        },
        {
            path: 'site-content',
            display: <h1>Site Contents</h1>,
            name: 'Site Contents',
            heading: greet('Admin'),
            Icon: <Icon name="manage_account" color="var(--white-2)" />,
        },
    ],
};

export default controll;
