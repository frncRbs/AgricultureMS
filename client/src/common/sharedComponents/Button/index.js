import { useSelector } from 'react-redux';
import './_index.scss';

const Button = ({ name, type, style, onClick, background, color }) => {
    const { isLoading } = useSelector((state) => state.auth);

    return (
        <button
            className={style}
            type={type || 'button'}
            style={{ background, color }}
            onClick={onClick || null}
            disabled={isLoading}
        >
            {name}
        </button>
    );
};

export default Button;
