export const setLocalStorage = (key, value) => {
    window.localStorage.setItem(key, JSON.stringify(value));
};

export const getLocalStorage = (key) => {
    return JSON.parse(window.localStorage.getItem(key));
};

export const deleteLocalStorage = (key) => {
    window.localStorage.removeItem(key);
};
