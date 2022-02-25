import toast, { Toaster } from 'react-hot-toast';

const Toast = ({ type, message }) => {
    switch ({ type }) {
        case 'success':
            toast.success(message);
            break;
        case 'error':
            toast.error(message);
            break;
        default:
            break;
    }
    return (
        <div>
            <Toaster position="top-right" reverseOrder={false} />
        </div>
    );
};

export default Toast;
