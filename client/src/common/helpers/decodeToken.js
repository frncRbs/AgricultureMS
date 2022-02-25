import decode from 'jwt-decode';
import { parseErrorMessage } from './notifyUser';

const decodeToken = (token) => {
    if (token) {
        let decodedToken = decode(token);

        if (decodedToken['stack']) {
            decodedToken = parseErrorMessage(decodeToken);
        }

        return decodedToken;
    }
};

export default decodeToken;
