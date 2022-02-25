import { useSelector } from 'react-redux';
import './_index.scss';

const Button = ({ name, type, style, onClick }) => {
    const { isLoading } = useSelector((state) => state.auth);

    return (
        <button
            className={style}
            type={type || 'button'}
            onClick={onClick || null}
            disabled={isLoading}
        >
            {name}
        </button>
    );
};

export default Button;
