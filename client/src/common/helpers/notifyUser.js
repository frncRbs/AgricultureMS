import { setToast } from '../../features/Toast/toastSlice';

export const parseErrorMessage = (err) => {
    const errorMessage =
        (err.response && err.response.data && err.response.data.message) ||
        err.message ||
        err.toString();

    return errorMessage;
};

const notifyUser = ({ message, thunkAPI, isError, isSuccess }) => {
    if (isError && !isSuccess) {
        thunkAPI.dispatch(
            setToast({ message: parseErrorMessage(message), isError })
        );

        return thunkAPI.fulfillWithValue({
            messsage: parseErrorMessage(message),
            isError,
        });
    }

    if (isSuccess && !isError) {
        thunkAPI.dispatch(setToast({ message, isSuccess }));
        return;
    }
};

export default notifyUser;
