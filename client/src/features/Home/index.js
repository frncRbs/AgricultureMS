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
        <main>
            {/* Home Section */}
            <div
                className="home"
                style={{ backgroundImage: `url(${bgBanner})` }}
            >
                <Navbar />
                <div className="home__content">
                    <div className="heading">
                        <h1>
                            <span>AYALA</span> DISTRICT CITY
                        </h1>
                        <p>Agriculture with new perspective</p>
                    </div>
                    <div className="button">
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

            {/* Hero Section */}
            <div className="hero__section">
                <div className="hero__heading">
                    <h1>
                        <span>DATA-DRIVEN</span> SOLUTION
                    </h1>
                    <div className="__divider-g"></div>
                    <h2>INDUSTRIES</h2>
                    <p>
                        Our farm management software portfolio supports all
                        stakeholders of agrified value chain Find out how we
                        solve real-life challenges in your industry
                    </p>
                </div>
                <div className="hero__body">
                    <div className="program">
                        <img src={bgBanner} alt="test" />
                        <h3>Hight Value Crops Program</h3>
                        <Button name="Visit" style="primary" />
                    </div>
                    <div className="program">
                        <img src={bgBanner} alt="test" />
                        <h3>Hight Value Crops Program</h3>
                        <Button name="Visit" style="primary" />
                    </div>
                    <div className="program">
                        <img src={bgBanner} alt="test" />
                        <h3>Hight Value Crops Program</h3>
                        <Button name="Visit" style="primary" />
                    </div>
                </div>
            </div>

            {/* Story Section */}
            <div className="story__section">
                <div className="story__heading">
                    <h1>
                        THE STORY OF <span>AYALA DISTRICT AGRICULTURIST</span>{' '}
                    </h1>
                    <div className="__divider-g"></div>
                </div>
                <div className="story__body">
                    <div className="text">
                        <p>
                            Ayala Field Office was among of the first 3 field
                            offices established in the 1980's to cater the needs
                            of the farmers and implement the different programs
                            of the City Agriculturist Office.
                        </p>
                    </div>
                    <div className="text">
                        <p>
                            Ayala Field Office was among of the first 3 field
                            offices established in the 1980's to cater the needs
                            of the farmers and implement the different programs
                            of the City Agriculturist Office.
                        </p>
                    </div>
                    <div className="text">
                        <p>
                            Ayala Field Office was among of the first 3 field
                            offices established in the 1980's to cater the needs
                            of the farmers and implement the different programs
                            of the City Agriculturist Office.
                        </p>
                    </div>
                    <div className="text">
                        <p>
                            Ayala Field Office was among of the first 3 field
                            offices established in the 1980's to cater the needs
                            of the farmers and implement the different programs
                            of the City Agriculturist Office.
                        </p>
                    </div>
                </div>
            </div>

            {/* Personnel Section */}
            <div className="personnel__section">
                <div className="personnel__heading">
                    <h1>
                        <span>LEADERSHIP</span> TEAM
                    </h1>
                    <div className="__divider-g"></div>
                </div>
                <div className="personnel__body">
                    <div className="personnel">
                        <img src={bgBanner} alt="test" />
                        <h3>Hight Value Crops Program</h3>
                        <p>Juan Dela Cruz</p>
                    </div>
                    <div className="personnel">
                        <img src={bgBanner} alt="test" />

                        <h3>Agricultural Technologist</h3>
                        <p>Juan Dela Cruz</p>
                    </div>
                    <div className="personnel">
                        <img src={bgBanner} alt="test" />
                        <h3>Agricultural Technician</h3>
                        <p>Juan Dela Cruz</p>
                    </div>
                    <div className="personnel">
                        <img src={bgBanner} alt="test" />
                        <h3>Agricultural Technician</h3>
                        <p>Juan Dela Cruz</p>
                    </div>
                    <div className="personnel">
                        <img src={bgBanner} alt="test" />
                        <h3>Hight Value Crops Program</h3>
                        <p>Juan Dela Cruz</p>
                    </div>
                    <div className="personnel">
                        <img src={bgBanner} alt="test" />

                        <h3>Agricultural Technologist</h3>
                        <p>Juan Dela Cruz</p>
                    </div>
                    <div className="personnel">
                        <img src={bgBanner} alt="test" />
                        <h3>Agricultural Technician</h3>
                        <p>Juan Dela Cruz</p>
                    </div>
                    <div className="personnel">
                        <img src={bgBanner} alt="test" />
                        <h3>Agricultural Technician</h3>
                        <p>Juan Dela Cruz</p>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <div className="footer">
                <p>&copy; Ayala District Agriculturist</p>
            </div>
        </main>
    );
};

export default Home;
