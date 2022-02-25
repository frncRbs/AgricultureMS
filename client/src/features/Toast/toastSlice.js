import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isSuccess: false,
    isError: false,
    message: '',
};

const { reducer, actions } = createSlice({
    name: 'toast',
    initialState,
    reducers: {
        setToast: (state, { payload }) => {
            if (payload.isSuccess) {
                return Object.assign(state, {
                    isSuccess: payload.isSuccess,
                    message: payload.message,
                });
            }

            if (payload.isError) {
                return Object.assign(state, {
                    isError: payload.isError,
                    message: payload.message,
                });
            }
        },

        clearToast: (state) => {
            return Object.assign(state, {
                isError: false,
                message: '',
                isSuccess: false,
            });
        },
    },
});

export const { clearToast, setToast } = actions;

export default reducer;
