/**
 * @module css
 * A module for various css operations.
 */

const toTitleCase = str => str[0].toUpperCase() + str.slice(1);

const toCamelCase = str =>
   str
      .split(' ')
      .map((word, i) => (i === 0 ? word.toLowerCase() : toTitleCase(word)))
      .join('');

/**
 * Gathers all the css variables from all the style sheets.
 * @returns {Object} An object of all the css variables.
 */
export const cssVar = Array.from(document.styleSheets)
   .filter(sheet => sheet.href === null || sheet.href.startsWith(window.location.origin))
   .reduce((acc, sheet) => (acc = [...acc, ...Array.from(sheet.cssRules).reduce((def, rule) => (def = rule.selectorText === ':root' ? [...def, ...Array.from(rule.style).filter(name => name.startsWith('--'))] : def), [])]), [])
   .reduce((acc, rule) => {
      const style = getComputedStyle(document.documentElement);
      let key = rule.replace(/--/g, '');
      key = key.replace(/-/g, ' ');
      key = toCamelCase(key);

      acc[key] = style.getPropertyValue(rule).trim();
      return acc;
   }, {});
