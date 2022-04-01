import React, { useState } from 'react';
import { capitalizeFirstLetter } from '../../helpers/letters';

/* CSS Import */
import './_index.scss';

const AvatarDropdown = ({ username, role, image, menu }) => {
    const [display, setDisplay] = useState('none');

    const toggleDropdownBody = () => {
        if (display === 'none') {
            setDisplay('unset');
        } else if (display === 'unset') {
            setDisplay('none');
        }
    };

    return (
        <div className="avatar__dropdown">
            <div className="avatar__head">
                <p>{`(${capitalizeFirstLetter(role)})-${capitalizeFirstLetter(
                    username
                )}`}</p>
                <img src={image} alt="Avatar" onClick={toggleDropdownBody} />
            </div>
            <ul className="avatar__body" style={{ display: display }}>
                {menu?.map((list, i) => (
                    <li key={i} onClick={list.action}>
                        {list.name}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AvatarDropdown;
