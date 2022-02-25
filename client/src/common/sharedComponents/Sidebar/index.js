import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import './_index.scss';

const Sidebar = ({ type, name, menu, getPageDetails }) => {
    const navigateTo = useNavigate();
    const [pageDetails, setPageDetails] = useState({});

    const handleMenuRedirect = (list) => {
        navigateTo(list.path);
        setPageDetails(list);
    };

    useEffect(() => {
        getPageDetails(pageDetails);
    }, [getPageDetails, navigateTo, pageDetails]);

    switch (type) {
        case 'dashboard':
            return (
                <div className="sidebar">
                    <div className="sidebar__heading">
                        <img
                            src="https://graphicsfamily.com/wp-content/uploads/edd/2021/07/Agriculture-Logo-Design-Free-PSD-Download-scaled.jpg"
                            alt="test"
                        />{' '}
                        <h1>{name}</h1>
                    </div>
                    <ul className="sidebar__menu-list">
                        {menu.map((list) => (
                            <li
                                key={list.name}
                                onClick={() => handleMenuRedirect(list)}
                            >
                                <span>{list.Icon}</span>
                                <span>{list.name}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            );
        default:
            return <div>Sidebar</div>;
    }
};

export default Sidebar;
