import React from 'react';
import {
    MdPerson,
    MdPersonAdd,
    MdPersonOff,
    MdDashboard,
    MdPeople,
    MdPersonSearch,
    MdOutlineAccountTree,
    MdManageAccounts,
    MdManageSearch,
    MdNotifications,
    MdAddCircle,
} from 'react-icons/md';

/**
 * @link https://react-icons.github.io/react-icons/icons?name=md
 * */
const Icon = ({ name, size, color, extraStyles, onClick }) => {
    let IconView = null;

    switch (name) {
        case 'add':
            IconView = (
                <MdAddCircle
                    style={{ fill: color, ...extraStyles }}
                    className="icon"
                    size={size || 24}
                    onClick={onClick}
                />
            );
            break;
        case 'person':
            IconView = (
                <MdPerson
                    style={{ fill: color }}
                    className="icon"
                    size={size || 24}
                    onClick={onClick}
                />
            );
            break;
        case 'person_add':
            IconView = (
                <MdPersonAdd
                    style={{ fill: color }}
                    className="icon"
                    size={size || 24}
                    onClick={onClick}
                />
            );
            break;
        case 'search':
            IconView = (
                <MdManageSearch
                    style={{ fill: color }}
                    className="icon"
                    size={size || 24}
                    onClick={onClick}
                />
            );
            break;
        case 'notification':
            IconView = (
                <MdNotifications
                    style={{ fill: color }}
                    className="icon"
                    size={size || 24}
                    onClick={onClick}
                />
            );
            break;
        case 'person_off':
            IconView = (
                <MdPersonOff
                    style={{ fill: color }}
                    className="icon"
                    size={size || 24}
                    onClick={onClick}
                />
            );
            break;
        case 'dashboard':
            IconView = (
                <MdDashboard
                    style={{ fill: color }}
                    className="icon"
                    size={size || 24}
                    onClick={onClick}
                />
            );
            break;
        case 'people':
            IconView = (
                <MdPeople
                    style={{ fill: color }}
                    className="icon"
                    size={size || 24}
                    onClick={onClick}
                />
            );
            break;
        case 'person_search':
            IconView = (
                <MdPersonSearch
                    style={{ fill: color }}
                    className="icon"
                    size={size || 24}
                    onClick={onClick}
                />
            );
            break;
        case 'account_tree':
            IconView = (
                <MdOutlineAccountTree
                    style={{ fill: color }}
                    className="icon"
                    size={size || 24}
                    onClick={onClick}
                />
            );
            break;
        case 'manage_account':
            IconView = (
                <MdManageAccounts
                    style={{ fill: color }}
                    className="icon"
                    size={size || 24}
                    onClick={onClick}
                />
            );
            break;
        default:
            break;
    }

    return <div> {IconView} </div>;
};

export default Icon;
