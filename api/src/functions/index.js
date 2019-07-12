/**
 * @param {*} value
 * @returns {boolean}
 */
const isNull = value => value === null;

/**
 * @param value
 * @returns {boolean}
 */
const isEmptyString = value => typeof value === 'string' && value.trim() === '';

module.exports = {
    isNull,
    isEmptyString,
};