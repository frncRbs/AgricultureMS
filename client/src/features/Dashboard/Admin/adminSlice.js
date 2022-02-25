import { createAsyncThunk, createSlice, current } from '@reduxjs/toolkit';
import notifyUser from '../../../common/helpers/notifyUser';
import roles from '../../../common/helpers/roles';
import adminService from './adminService';

/**
 * @description Coordinator was the Personnel and vice versa.
 *
 */
export const createPersonnelAccount = createAsyncThunk(
    'admin/personnel',
    async (account, thunkAPI) => {
        console.log({ account });

        try {
            const response = await adminService.createPersonnel({
                ...account,
            });

            if (response['isSuccess']) {
                notifyUser({
                    isSuccess: true,
                    message: response.message,
                    thunkAPI,
                });

                console.log({ response });
                return response;
            }
        } catch (err) {
            return notifyUser({ isError: true, message: err, thunkAPI });
        }
    }
);

const initialState = {
    coordinator: {
        username: '',
        role: roles['personnel'],
        isActivated: true,
    },
};

const { reducer } = createSlice({
    name: 'admin',
    initialState,
    reducers: {},
    extraReducers: {
        // [createPersonnelAccount.pending]: (state, { payload }) => {
        //     return Object.assign(state, {
        //         isLoading: true,
        //     });
        // },
        // [createPersonnelAccount.fulfilled]: (state, { payload }) => {
        //     if (payload['isError']) {
        //         return Object.assign(state, {
        //             isLoading: false,
        //             isSuccess: false,
        //         });
        //     }
        //     return Object.assign(state, {
        //         username: payload.username,
        //         isLoading: false,
        //         isSuccess: true,
        //     });
        // },
        // [createPersonnelAccount.rejected]: (state, { payload }) => {
        //     return Object.assign(state, {
        //         isLoading: false,
        //         isSuccess: false,
        //     });
        // },
    },
});

export default reducer;
