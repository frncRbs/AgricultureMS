//capitalize only the first letter of the string.
export const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
};
//capitalize all words of a string.
export const capitalizeWords = (string) => {
    return string.replace(/(?:^|\s)\S/g, function (a) {
        return a.toUpperCase();
    });
};
