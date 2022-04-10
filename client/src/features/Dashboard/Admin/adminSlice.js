import { createAsyncThunk, createSlice, current } from '@reduxjs/toolkit';
import notifyUser from '../../../common/helpers/notifyUser';
import adminService from './adminService';

export const createPersonnelAccount = createAsyncThunk(
    'admin/personnel',
    async (account, thunkAPI) => {
        try {
            const response = await adminService.createPersonnel(account);

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

export const listUsers = createAsyncThunk(
    'admin/list_users',
    async (identifier, thunkAPI) => {
        try {
            const response = await adminService.listUsers(identifier);

            if (response['isSuccess']) {
                return response;
            }
        } catch (err) {
            return notifyUser({ isError: true, message: err, thunkAPI });
        }
    }
);

export const createNewProgram = createAsyncThunk(
    'admin/new_program',
    async (program, thunkAPI) => {
        try {
            const response = await adminService.createNewProgram(program);

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

export const listPrograms = createAsyncThunk(
    'admin/list_programs',
    async (program, thunkAPI) => {
        try {
            const response = await adminService.listPrograms(program);

            if (response['isSuccess']) {
                return response;
            }
        } catch (err) {
            return notifyUser({ isError: true, message: err, thunkAPI });
        }
    }
);

export const updateProgram = createAsyncThunk(
    'admin/update_program',
    async (data, thunkAPI) => {
        const { identifier, program } = data;

        /**
         * @Object {identifer}
         * @String {program}
         */

        try {
            const response = await adminService.updateProgram(
                identifier,
                program
            );

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

export const updateUserAccount = createAsyncThunk(
    'admin/update_account',
    async (data, thunkAPI) => {
        const { id, role, isActivated } = data;

        try {
            const response = await adminService.updateUserAccount(
                id,
                role,
                isActivated
            );

            if (response['isSuccess']) {
                notifyUser({
                    isSuccess: true,
                    message: 'Account Successfully Updated!',
                    thunkAPI,
                });

                return response;
            }
        } catch (err) {
            return notifyUser({ isError: true, message: err, thunkAPI });
        }
    }
);

export const deleteProgram = createAsyncThunk(
    'admin/delete_program',
    async (data, thunkAPI) => {
        const { type, id } = data;

        const identifier = {
            type,
            id,
        };

        try {
            const response = await adminService.deleteProgram(identifier);

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

const initialState = {
    isLoading: false,
    isSuccess: false,
    users: [],
    program: {},
    programs: [],
    updatedObject: null, // to invoke DOM when changes is detected
    setProgram: {
        programChange: 'crops',
    },
};

const { reducer, actions } = createSlice({
    name: 'admin',
    initialState,
    reducers: {
        handleProgramChange: (state, { payload }) => {
            state['setProgram'] = { ...payload };
        },
    },
    extraReducers: {
        /* Create Personnel */
        [createPersonnelAccount.pending]: (state) => {
            return Object.assign(state, {
                isLoading: true,
            });
        },
        [createPersonnelAccount.fulfilled]: (state, { payload }) => {
            if (payload['isError']) {
                return Object.assign(state, {
                    isLoading: false,
                    isSuccess: false,
                });
            }
            return Object.assign(state, {
                isLoading: false,
                isSuccess: true,
            });
        },
        [createPersonnelAccount.rejected]: (state) => {
            return Object.assign(state, {
                isLoading: false,
                isSuccess: false,
            });
        },

        /* List Users */
        [listUsers.pending]: (state) => {
            return Object.assign(state, {
                isLoading: true,
            });
        },
        [listUsers.fulfilled]: (state, { payload }) => {
            if (payload['isError']) {
                return Object.assign(state, {
                    isLoading: false,
                    isSuccess: false,
                });
            }

            return Object.assign(state, {
                isLoading: false,
                isSuccess: true,
                users: payload.data,
                updatedObject: payload.data && payload.data.insertId,
            });
        },
        [listUsers.rejected]: (state) => {
            return Object.assign(state, {
                isLoading: false,
                isSuccess: false,
            });
        },

        /* Create new program */
        [createNewProgram.pending]: (state) => {
            return Object.assign(state, {
                isLoading: true,
            });
        },
        [createNewProgram.fulfilled]: (state, { payload }) => {
            if (payload['isError']) {
                return Object.assign(state, {
                    isLoading: false,
                    isSuccess: false,
                });
            }

            return Object.assign(state, {
                users: payload.data,
                isLoading: false,
                isSuccess: true,
                updatedObject: payload.data.insertId, // to invoke DOM when changes is detected
            });
        },
        [createNewProgram.rejected]: (state) => {
            return Object.assign(state, {
                isLoading: false,
                isSuccess: false,
            });
        },

        /* List programs */
        [listPrograms.pending]: (state) => {
            return Object.assign(state, {
                isLoading: true,
            });
        },
        [listPrograms.fulfilled]: (state, { payload }) => {
            if (payload['isError']) {
                return Object.assign(state, {
                    isLoading: false,
                    isSuccess: false,
                });
            }

            return Object.assign(state, {
                programs: payload.data,
                isLoading: false,
                isSuccess: true,
                updatedObject: payload.data.insertId,
            });
        },
        [listPrograms.rejected]: (state) => {
            return Object.assign(state, {
                isLoading: false,
                isSuccess: false,
            });
        },

        /* List programs */
        [updateUserAccount.pending]: (state) => {
            return Object.assign(state, {
                isLoading: true,
            });
        },
        [updateUserAccount.fulfilled]: (state, { payload }) => {
            if (payload['isError']) {
                return Object.assign(state, {
                    isLoading: false,
                    isSuccess: false,
                });
            }

            console.log({ updateUserAccount: payload });
            return Object.assign(state, {
                programs: payload.data,
                isLoading: false,
                isSuccess: true,
                updatedObject: payload.data.insertId,
            });
        },
        [updateUserAccount.rejected]: (state) => {
            return Object.assign(state, {
                isLoading: false,
                isSuccess: false,
            });
        },

        /* Update program */
        [updateProgram.pending]: (state) => {
            return Object.assign(state, {
                isLoading: true,
            });
        },
        [updateProgram.fulfilled]: (state, { payload }) => {
            if (payload['isError']) {
                return Object.assign(state, {
                    isLoading: false,
                    isSuccess: false,
                });
            }

            console.log({ updateProgram: payload });

            return Object.assign(state, {
                isLoading: false,
                isSuccess: true,
                updatedObject: payload.data.insertId,
            });
        },
        [updateProgram.rejected]: (state) => {
            return Object.assign(state, {
                isLoading: false,
                isSuccess: false,
            });
        },

        /* Delete program */
        [deleteProgram.pending]: (state) => {
            return Object.assign(state, {
                isLoading: true,
            });
        },
        [deleteProgram.fulfilled]: (state, { payload }) => {
            if (payload['isError']) {
                return Object.assign(state, {
                    isLoading: false,
                    isSuccess: false,
                });
            }

            console.log({ deletepayload: payload });

            return Object.assign(state, {
                isLoading: false,
                isSuccess: true,
                updatedObject: payload.data.insertId,
            });
        },
        [deleteProgram.rejected]: (state) => {
            return Object.assign(state, {
                isLoading: false,
                isSuccess: false,
            });
        },
    },
});

export const { handleProgramChange } = actions;

export default reducer;
