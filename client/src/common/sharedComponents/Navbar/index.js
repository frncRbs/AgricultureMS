import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Button from '../Button';
import Icons from '../Icon';
import './_index.scss';
import { capitalizeFirstLetter } from '../../helpers/letters';

const Navbar = ({ type, data }) => {
    const navigateTo = useNavigate();
    const { username } = useSelector((state) => state.auth);

    const handleRedirectToHomepage = () => navigateTo('/');

    switch (type) {
        case 'auth':
            return (
                <nav className={type}>
                    <Button
                        name="< Back to Homepage"
                        style="secondary"
                        onClick={handleRedirectToHomepage}
                    />
                    <span></span>
                </nav>
            );
        case 'dashboard':
            return (
                <nav className={type}>
                    <h1>Dashboard</h1>
                    <div className="navbar__tag">
                        <div className="icon">
                            <Icons name="person_add" />
                            <Icons name="person_add" />
                        </div>
                        <div className="user">
                            <p>{capitalizeFirstLetter(username)}</p>
                            <img src={data.img} alt="avatar" />
                        </div>
                    </div>
                </nav>
            );
        default:
            return (
                <nav className="navbar">
                    <h1>Ayala Agriculturist</h1>

                    <ul>
                        <li>Home</li>
                        <li>Personnels</li>
                        <li>Program</li>
                        <li>About Us</li>
                        <li>Request</li>
                    </ul>
                </nav>
            );
    }
};

export default Navbar;
