/**
 * @module validate
 * A module to handle data validation.
 */

/**
 * Checks if a value is a string with a length greater than 0.
 * @param {string} value The value to be checked.
 * @returns {boolean} The result of the test.
 */
export const isString = value => typeof value === 'string' && value.trim().length > 0;

/**
 * Checks if a value is a valid email string.
 * @param {string} value The value to be checked.
 * @returns {boolean} The result of the test.
 */
export const isEmail = value => {
   const regex = /[\w.%+\-]+@[\w.\-]+\.[A-Za-z]{2,}/;
   let output = false;

   if (isString(value)) output = regex.test(value);

   return output;
};

/**
 * Checks if a value is a valid name string.
 * @param {string} value The value to be checked.
 * @returns {boolean} The result of the test.
 */
export const isName = value => {
   const regex = /^([A-Z][A-Za-z.'\-]+)$/;
   let output = false;

   if (isString(value)) output = regex.test(value);

   return output;
};

/**
 * Checks if a value is a valid password string.
 * @param {string} value The value to be checked.
 * @returns {boolean} The result of the test.
 */
export const isPassword = value => {
   const regex = /^(?=.*[~!@#$%^&*()_\+\-\=])(?=.*\d)(?=.*[A-Z])(?=.*[a-z])\S{8,15}$/;
   let output = false;

   if (isString(value)) output = regex.test(value);

   return output;
};

/**
 * Checks if a value is a boolean.
 * @param {boolean} value The value to be checked.
 * @returns {boolean} The result of the test.
 */
export const isBoolean = value => typeof value === 'boolean';

/**
 * Checks if a boolean is true.
 * @param {boolean} value The value to be checked.
 * @returns {boolean} The result of the test.
 */
export const isTrue = value => {
   let output = false;

   if (isBoolean(value)) output = value === true;

   return output;
};
