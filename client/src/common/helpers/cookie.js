import Cookies from 'js-cookie';

export const setCookie = (key, value) => {
    // Cookies.set(key, value, { expires: 900000 }); // 15 minutes
    Cookies.set(key, value);
};

export const getCookie = (key) => {
    return Cookies.get(key);
};

export const deleteCookie = (key, value) => {
    Cookies.remove(key);
};
