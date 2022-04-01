/**
 * @desc this slice is for application global actions
 */

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import schema from './schema';

export const persistFields = createAsyncThunk('/fields', (state) => state);

export const stateObject = {
    onFarmerRegister: 'onFarmerRegister',
    onNewProgram: 'onNewProgram',
    onUpdateProgram: 'onUpdateProgram',
};

const initialState = {
    onFarmerRegister: schema.onFarmerRegister,
    onNewProgram: {},
    onUpdateProgram: {},
};

const { reducer, actions } = createSlice({
    name: 'app',
    initialState,
    reducers: {
        clearFields: (state, { payload }) => {
            for (
                let i = 0;
                i <= Object.entries(state[payload.stateObject]).length;
                i++
            ) {
                Object.assign(state[payload.stateObject], {
                    [Object.keys(state[payload.stateObject])[i]]: '',
                });
            }
        },
    },

    extraReducers: {
        [persistFields.fulfilled]: (state, { payload }) => {
            Object.assign(state, {
                [payload.stateObject]: { ...payload.data },
            });
        },
    },
});

export const { clearFields } = actions;

export default reducer;
