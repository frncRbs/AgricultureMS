import React from 'react';

import './_index.scss';

const Heading = ({ type, text }) => {
    switch (type) {
        case 'dashboard':
            return (
                <div className="heading__controller">
                    <p>{text}</p>
                </div>
            );
        default:
            break;
    }
};

export default Heading;
