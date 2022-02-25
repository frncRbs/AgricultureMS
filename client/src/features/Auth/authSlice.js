import { createAsyncThunk, createSlice, current } from '@reduxjs/toolkit';
import authService from './authService';
import { getCookie, setCookie } from '../../common/helpers/cookie';
import notifyUser from '../../common/helpers/notifyUser';
import decodeToken from '../../common/helpers/decodeToken';
import { PURGE } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

/**
 * @response returned object {isSuccess, message, {user, role, isActivated}}
 * */
export const login = createAsyncThunk(
    'auth/login',
    async ({ username, password }, thunkAPI) => {
        try {
            const response = await authService.login({
                username,
                password,
            });

            if (response['isSuccess']) {
                /* Setting accessToken to user's cookie */
                setCookie('accessToken', response.user.accessToken);

                notifyUser({
                    isSuccess: true,
                    message: response.message,
                    thunkAPI,
                });

                return response;
            }
        } catch (err) {
            return notifyUser({ isError: true, message: err, thunkAPI });
        }
    }
);

/**
 * @response returned object {isSuccess, message, {user, role, isActivated}}
 * */
export const register = createAsyncThunk(
    'auth/register',
    async ({ username, mobileNumber, password }, thunkAPI) => {
        try {
            const response = await authService.register({
                username,
                mobileNumber,
                password,
            });

            if (response['isSuccess']) {
                notifyUser({
                    isSuccess: true,
                    message: response.message,
                    thunkAPI,
                });

                return response;
            }
        } catch (err) {
            return notifyUser({ isError: true, message: err, thunkAPI });
        }
    }
);

export const logout = createAsyncThunk('auth/logout', () =>
    authService.logout()
);

export const authSelector = (state) => state.auth;

const initialState = {
    username: '',
    mobileNumber: '',
    isLoading: false,
    isSuccess: false,
    isActivated: false,
    isAuthenticated: false,
    role: null,
};

const { reducer, actions } = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        verifyUser: (state) => {
            const { isDecodedTokenValid, decodedToken } =
                authService.verifyUser(current(state));

            if (!isDecodedTokenValid) {
                return Object.assign(state, {
                    isAuthenticated: false,
                    role: null,
                    isLoading: false,
                });
            }

            return Object.assign(state, {
                isAuthenticated: true,
                role: decodedToken['role'],
                isLoading: false,
            });
        },
    },
    extraReducers: {
        /* Login */
        [login.pending]: (state) => {
            Object.assign(state, {
                username: '',
                mobileNumber: undefined,
                isLoading: true,
                isSuccess: false,
                isAuthenticated: false,
            });
        },

        [login.fulfilled]: (state, { payload }) => {
            if (payload['isError']) {
                return Object.assign(state, {
                    username: null,
                    mobileNumber: undefined,
                    isLoading: false,
                    isSuccess: false,
                    isAuthenticated: false,
                });
            }

            return Object.assign(state, {
                username: payload.user.username,
                isLoading: false,
                isSuccess: true,
                isActivated: payload.user.isActivated,
                role: payload.user.role,
                isAuthenticated: true,
            });
        },

        [login.rejected]: (state) => {
            Object.assign(state, {
                username: '',
                mobileNumber: undefined,
                isLoading: false,
                isSuccess: false,
                isAuthenticated: false,
            });
        },

        /* Logout */
        [logout.pending]: (state) => {
            Object.assign(state, {
                isLoading: true,
                isAuthenticated: false,
            });
        },

        [logout.fulfilled]: (state) => {
            Object.assign(state, {
                isLoading: false,
                isSuccess: false,
                isAuthenticated: false,
            });
        },

        [logout.rejected]: (state) => {
            Object.assign(state, {
                isLoading: false,
                isAuthenticated: false,
            });
        },

        /* Register */
        [register.pending]: (state) => {
            Object.assign(state, {
                isLoading: true,
                isSuccess: false,
                isAuthenticated: false,
            });
        },
        [register.fulfilled]: (state, { payload }) => {
            if (payload['isError']) {
                return Object.assign(state, {
                    isLoading: false,
                    isSuccess: false,
                    isAuthenticated: false,
                });
            }

            Object.assign(state, {
                username: payload.user.username,
                isActivated: payload.user.isActivated,
                role: payload.user.role,
                isLoading: false,
                isSuccess: true,
                isAuthenticated: true,
            });
        },
        [register.rejected]: (state, { payload }) => {
            Object.assign(state, {
                isLoading: false,
                isSuccess: false,
                isAuthenticated: false,
            });
        },
    },
});

export const { verifyUser } = actions;
export default reducer;
