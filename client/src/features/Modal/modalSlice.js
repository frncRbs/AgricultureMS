import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    newProgramModal: false,
    editProgramModal: false,
};

const { reducer, actions } = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        setModalState: (state, { payload }) => {
            Object.assign(state, payload);
        },
    },
});

export const { setModalState } = actions;

export default reducer;
