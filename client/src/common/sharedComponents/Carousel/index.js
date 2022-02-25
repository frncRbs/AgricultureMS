import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
// https://www.npmjs.com/package/react-responsive-carousel
const React = require('react');
const CarouselLib = require('react-responsive-carousel').Carousel;

const Carousel = () => {
    return (
        <CarouselLib autoFocus={true} showIndicators={false}>
            <div>
                <img
                    src="https://eskipaper.com/images/farm-wallpaper-7.jpg"
                    alt="test"
                />
            </div>
            <div>
                <img
                    src="https://wallpaperaccess.com/full/175640.jpg"
                    alt="test"
                />
            </div>
        </CarouselLib>
    );
};
export default Carousel;

// Don't forget to include the css in your page
// <link rel="stylesheet" href="carousel.css"/>
// Begin DemoSliderControls
