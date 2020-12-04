/**
 * @module random
 * A module for various random operations.
 */

/**
 * Returns random integer between the minimum and the maximum (inclusive).
 * @param {number} min The minimum number in the range
 * @param {number} max The maximum number in the range
 * @returns {number} A random integer between the minimum and the maximum (inclusive).
 */
export const randomInt = (min, max) => {
   return Math.floor(Math.random() * (max - min + 1)) + min;
};

/**
 * Returns random integer between the minimum and the maximum (exclusive).
 * @param {number} min The minimum number in the range
 * @param {number} max The maximum number in the range
 * @returns {number} A random number between the minimum and the maximum (exclusive).
 */
export const randomNum = (min, max) => {
   return Math.random() * (max - min) + min;
};

/**
 * Returns a random string of alphanumeric characters.
 * @param {number} len The length of the string.
 * @returns {string} A string of random characters.
 */
export const randomStr = (len) => {
   len = typeof len == 'number' && len > 0 ? len : false;

   if (len) {
      const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
      let str = '';

      for (i = 1; i <= len; i++) {
         str += characters.charAt(Math.floor(Math.random() * characters.length));
      }

      return str;
   } else {
      return false;
   }
};
