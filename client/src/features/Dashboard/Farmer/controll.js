import { Icon } from '../../../common';
import { greet } from '../../../common/helpers/greet';
import { Dashboard } from './Screens';

const controll = {
    type: 'dashboard',
    name: 'Farmer Dashboard',
    tags: ['Dashboard', 'Features', 'Website Homepage'],
    menu: [
        {
            path: 'dashboard',
            display: <Dashboard />,
            name: 'Dashboard',
            heading: greet('Farmer'),
            Icon: <Icon name="dashboard" color="var(--white-2)" />,
        },
        {
            path: 'request-props',
            display: <h1>REQUEST PROPS</h1>,
            name: 'Request Props',
            heading: greet('Farmer'),
            Icon: <Icon name="account_tree" color="var(--white-2)" />,
        },
        {
            path: 'request-service',
            display: <h1>REQUEST SERVICE</h1>,
            name: 'Request Service',
            heading: greet('Farmer'),
            Icon: <Icon name="person_add" color="var(--white-2)" />,
        },
    ],
};

export default controll;
