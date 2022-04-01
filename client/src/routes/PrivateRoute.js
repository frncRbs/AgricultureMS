import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { isAuthenticated, isActivated } = useSelector((state) => state.auth);

    if (!isAuthenticated) {
        return <Navigate to="/" />;
    }

    if (!isActivated) {
        return <Navigate to="/accoount-status" />;
    }

    return children;
};

export default PrivateRoute;
