const mapObjectKey = (object) => {
    const toPlaceholder = Object.keys(object)
        .map((key) => `${key} = ?`)
        .join(', ');

    const toObjectKey = Object.keys(object)
        .map((key) => key)
        .join('');

    const toObjectValue = Object.keys(object).map((key) => object[key]);

    return {
        toPlaceholder, // key = value, key = value
        toObjectValue, // [value, value, value]
        toObjectKey, // key
    };
};

module.exports = mapObjectKey;
