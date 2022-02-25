import storage from 'redux-persist/lib/storage';
import { publicApi } from '../../app/axiosClient';
import { getCookie, deleteCookie } from '../../common/helpers/cookie';
import decodeToken from '../../common/helpers/decodeToken';

class AuthService {
    async register(user) {
        const { data } = await publicApi.post('/register', {
            ...user,
        });

        return data;
    }

    async login(user) {
        const { data } = await publicApi.post('/login', {
            ...user,
        });

        return data;
    }

    logout() {
        storage.removeItem('persist:root');
        deleteCookie('accessToken');
    }

    verifyUser(state) {
        const accessToken = getCookie('accessToken');
        const decodedToken = decodeToken(accessToken);

        console.log({ decodedToken, accessToken, state });

        if (
            accessToken &&
            decodedToken['username'] === state['username'] &&
            decodedToken['role'] === state['role']
        ) {
            return { isDecodedTokenValid: true, decodedToken };
        } else {
            return { isDecodedTokenValid: false, decodedToken: false };
        }
    }
}

const authService = new AuthService();

export default authService;
