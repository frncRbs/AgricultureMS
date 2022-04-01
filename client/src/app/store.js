/* Import Modules */
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

/* Import Local Modules  */
import authReducer from '../features/Auth/authSlice';
import toastReducer from '../features/Toast/toastSlice';
import adminReducer from '../features/Dashboard/Admin/adminSlice';
import appReducer from '../features/App/appSlice';
import modalReducer from '../features/Modal/modalSlice';

/**
 * @REDUX PERSIST: https://redux-toolkit.js.org/usage/usage-guide
 */

const rootReducer = combineReducers({
    app: appReducer,
    auth: authReducer,
    toast: toastReducer,
    admin: adminReducer,
    modal: modalReducer,
});

const persistConfig = {
    key: 'root',
    version: 1,
    storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [
                    FLUSH,
                    REHYDRATE,
                    PAUSE,
                    PERSIST,
                    PURGE,
                    REGISTER,
                ],
            },
        }),
});

let persistor = persistStore(store);

export { store, persistor };
