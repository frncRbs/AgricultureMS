import React from 'react';

import './_index.scss';

const Badge = ({ text, color }) => {
    let Component = null;

    switch (color) {
        case 'red':
            Component = (
                <div className="badge red">
                    <span>{text}</span>
                </div>
            );
            break;

        case 'white':
            Component = (
                <div className="badge white">
                    <span>{text}</span>
                </div>
            );
            break;

        case 'green':
        default:
            Component = (
                <div className="badge green">
                    <span>{text}</span>
                </div>
            );
            break;
    }

    return Component;
};

export default Badge;
