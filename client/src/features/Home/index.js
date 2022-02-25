/* eslint-disable react/style-prop-object */
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import assets from '../../assets';
import { Navbar, Button } from '../../common';

import './_index.scss';

const bgBanner = 'https://eskipaper.com/images/farm-wallpaper-7.jpg';

const Home = () => {
    const navigateTo = useNavigate();
    const { isAuthenticated } = useSelector((user) => user.auth);

    const homeActions = {
        redirectToLogin: () => navigateTo('login'),
        redirectToRegistration: () => navigateTo('register'),
        redirectToDashboard: () => navigateTo('dashboard'),
    };

    return (
        <div className="home" style={{ backgroundImage: `url(${bgBanner})` }}>
            <Navbar />
            <div className="home__content">
                <div className="heading">
                    <h1>
                        <span>AYALA</span> DISTRICT CITY
                    </h1>
                    <p>Agriculture with new perspective</p>
                </div>
                <div className="footer">
                    {isAuthenticated ? (
                        <Button
                            name="Dashboard"
                            style="primary"
                            onClick={homeActions.redirectToDashboard}
                        />
                    ) : (
                        <>
                            <Button
                                name="Join Us"
                                style="primary"
                                onClick={homeActions.redirectToRegistration}
                            />
                            <Button
                                name="Login"
                                style="secondary login"
                                onClick={homeActions.redirectToLogin}
                            />
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Home;
