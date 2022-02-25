import React from 'react';
import ReactLoading from 'react-loading';

/* Local CSS imports */
import './_index.scss';

const Preloader = () => (
    <ReactLoading className="loader" type={'spin'} color="var(--green-1)" />
);

export default Preloader;
