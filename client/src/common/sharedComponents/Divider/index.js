import './_index.scss';

const Divider = (type) => {
    switch (type) {
        case 'vertical':
            return <hr />;
        case 'thin':
            return <hr className={type} />;
        default:
            return <hr />;
    }
};

export default Divider;
