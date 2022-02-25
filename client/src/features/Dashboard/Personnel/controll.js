import { Icon } from '../../../common';
import { greet } from '../../../common/helpers/greet';
import { Dashboard } from './Screens';

const controll = {
    type: 'dashboard',
    name: 'Personnel Dashboard',
    tags: ['Dashboard', 'Features', 'Website Homepage'],
    menu: [
        {
            path: 'dashboard',
            display: <Dashboard />,
            name: 'Dashboard',
            heading: greet('Personnel'),
            Icon: <Icon name="dashboard" color="var(--white-2)" />,
        },
        {
            path: 'farmer-request',
            display: <h1>Farmer Request</h1>,
            name: 'Farmer Request',
            heading: greet('Personnel'),
            Icon: <Icon name="account_tree" color="var(--white-2)" />,
        },
        {
            path: 'approved-panel',
            display: <h1>Approved Panel</h1>,
            name: 'Approved Panel',
            heading: greet('Personnel'),
            Icon: <Icon name="person_add" color="var(--white-2)" />,
        },
        {
            path: 'add-farmer',
            display: <h1>Add Farmer</h1>,
            name: 'Add Farmer',
            heading: greet('Personnel'),
            Icon: <Icon name="person_add" color="var(--white-2)" />,
        },
        {
            path: 'farmer-list',
            display: <h1>Farmer List</h1>,
            name: 'Farmer List',
            heading: greet('Personnel'),
            Icon: <Icon name="person_add" color="var(--white-2)" />,
        },
    ],
};

export default controll;
