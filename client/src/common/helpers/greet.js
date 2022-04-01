import { capitalizeFirstLetter } from './letters';

const date = new Date();
const hour = date.getHours();
let minute = date.getMinutes();
let second = date.getSeconds();
let message = '';

export const greet = (name) => {
    if (minute < 10) {
        minute = '0' + minute;
    }
    if (second < 10) {
        second = '0' + second;
    }
    if (hour < 12) {
        message = `Good Morning, ${capitalizeFirstLetter(name)}!`;
    } else if (hour < 18) {
        message = `Good Aternoon,  ${capitalizeFirstLetter(name)}!`;
    } else {
        message = `Good Evening,  ${capitalizeFirstLetter(name)}!`;
    }

    return message;
};
