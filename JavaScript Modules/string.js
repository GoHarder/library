/**
 * @module string
 * A module for various string operations.
 */

/**
 * Capitalizes the first letter in a string.
 * @param {string} str The string to be modified.
 * @returns {string} The modified string.
 */
export const toTitleCase = str => str[0].toUpperCase() + str.slice(1);

/**
 * Shrinks a string with spaces and transforms it into camel case.
 * @param {string} str The string to be modified ex. 'I am Gary'.
 * @returns {string} The modified string ex. 'iAmGary'.
 */
export const toCamelCase = str =>
   str
      .split(' ')
      .map((word, i) => (i === 0 ? word.toLowerCase() : toTitleCase(word)))
      .join('');
