// PROBLEM 1
// n  1  2  3  4  5  6  7  8  9
// fx 1  1  2  3  5  8  13 21 34

// NOTE: this can be done with an array of 3
// this example shows the basic method of tabulation
const fib = (n) => {
   const table = Array(n + 1).fill(0);
   table[1] = 1;

   for (let i = 0; i < n; i++) {
      table[i + 2] = table[i + 1] + table[i];
   }

   return table[n];
};

// console.log(fib(50));

// PROBLEM 2
// traveling in a grid

const grid = (x, y) => {
   const table = Array.from(new Array(y + 1), (_) => new Array(x + 1).fill(0));

   table[1][1] = 1;

   for (let y1 = 0; y1 < y + 1; y1++) {
      for (let x1 = 0; x1 < x + 1; x1++) {
         if (table[y1][x1 + 1] !== undefined) {
            table[y1][x1 + 1] += table[y1][x1];
         }

         if (table[y1 + 1] !== undefined) {
            table[y1 + 1][x1] += table[y1][x1];
         }
      }
   }

   return table[y][x];
};

// console.log(grid(1, 1));
// console.log(grid(2, 2));
// console.log(grid(2, 3));
// console.log(grid(3, 3));
// console.log(grid(18, 18));

// PROBLEM 3 - can sum
// canSum(7, [5, 3, 4, 7]) = true

const canSum = (x, array) => {
   const table = Array(x + 1).fill(false);
   table[0] = true;

   for (let i = 0; i < x; i++) {
      if (!table[i]) continue;

      array.forEach((nth) => {
         if (table[i + nth] !== undefined) table[i + nth] = true;
      });
   }

   return table[x];
};

// console.log(canSum(7, [2, 3]));
// console.log(canSum(7, [5, 3, 4, 7]));
// console.log(canSum(7, [2, 4]));
// console.log(canSum(8, [2, 3, 5]));
// console.log(canSum(300, [7, 14]));

// PROBLEM 4 - how sum
// Like can sum but return a number combination that works

const howSum = (x, array) => {
   const table = Array(x + 1).fill(null);
   table[0] = [];

   for (let i = 0; i <= x; i++) {
      if (!table[i]) continue;

      for (const num of array) {
         // if i + num goes outside array then move on
         if (table[i + num] === undefined) continue;

         table[i + num] = [...table[i], num];
      }
   }

   return table[x];
};

// console.log(howSum(7, [2, 3]));
// console.log(howSum(7, [5, 3, 4]));
// console.log(howSum(7, [2, 4]));
// console.log(howSum(8, [2, 3, 5]));
// console.log(howSum(300, [7, 14]));

// PROBLEM 5 - best sum
// Like how sum but return a number combination with the shortest array
// If there is a tie any one will do

const bestSum = (x, array) => {
   const table = Array(x + 1).fill(null);
   table[0] = [];

   for (let i = 0; i <= x; i++) {
      if (!table[i]) continue;

      for (const num of array) {
         // if i + num goes outside array then move on
         if (table[i + num] === undefined) continue;

         const arr1Length = table[i + num]?.length ?? Infinity;
         const arr2Length = table[i].length + 1;

         if (arr1Length > arr2Length) {
            table[i + num] = [...table[i], num];
         }
      }
   }

   return table[x];
};

// console.log(bestSum(7, [5, 3, 4, 7]));
// console.log(bestSum(8, [2, 3, 5]));
// console.log(bestSum(8, [1, 4, 5]));
// console.log(bestSum(100, [1, 2, 5, 25]));

// PROBLEM 6 can construct
// canConstruct(target, words) -> true / false

// NOTE: table construction

//  0 1 2 3 4 5 6
// ---------------
// |T|F|F|F|F|F|F|
// ---------------
//  a b c d e f

const canConstruct = (string, words) => {
   const table = Array(string.length + 1).fill(false);
   table[0] = true;

   for (let i = 0; i <= string.length; i++) {
      if (!table[i]) continue;
      const testString = string.substring(i);

      for (const word of words) {
         if (testString.indexOf(word) !== 0) continue;

         table[i + word.length] = true;
      }
   }

   return table[string.length];
};

// console.log(canConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd']));
// console.log(canConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar']));
// console.log(canConstruct('enterapotentpot', ['a', 'p', 'ent', 'enter', 'ot', 'o', 't']));
// console.log(canConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', ['e', 'ee', 'eee', 'eeee', 'eeeee', 'eeeeee']));

// PROBLEM 7 count construct
// countConstruct(target, words) -> amount of ways that the target can be achieved

// NOTE: table construction

//  0 1 2 3 4 5 6
// ---------------
// |1|0|0|0|0|0|0|
// ---------------
//  a b c d e f

const countConstruct = (string, words) => {
   const table = Array(string.length + 1).fill(0);
   table[0] = 1;

   for (let i = 0; i <= string.length; i++) {
      if (!table[i]) continue;
      const testString = string.substring(i);

      for (const word of words) {
         if (testString.indexOf(word) !== 0) continue;

         table[i + word.length] += table[i];
      }
   }

   return table[string.length];
};

// console.log(countConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd']));
// console.log(countConstruct('purple', ['purp', 'p', 'ur', 'le', 'purpl']));
// console.log(countConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar']));
// console.log(countConstruct('enterapotentpot', ['a', 'p', 'ent', 'enter', 'ot', 'o', 't']));
// console.log(countConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', ['e', 'ee', 'eee', 'eeee', 'eeeee', 'eeeeee']));

// PROBLEM 8 all construct
// allConstruct(target, words) -> the various ways that the word can be constructed

// NOTE: table construction

//    0    1   2   3   4   5   6
// -------------------------------
// |[[ ]]|[ ]|[ ]|[ ]|[ ]|[ ]|[ ]|
// -------------------------------
//    a    b   c   d   e   f

const allConstruct = (string, words) => {
   const table = Array.from(new Array(string.length + 1), (_) => new Array());
   table[0][0] = [];

   for (let i = 0; i <= string.length; i++) {
      if (table[i].length === 0) continue;
      const testString = string.substring(i);

      for (const word of words) {
         if (string.slice(i, i + word.length) !== word) continue;

         // if (testString.indexOf(word) !== 0) continue;

         let copy = [...table[i]];

         copy = copy.map((subArray) => [...subArray, word]);

         table[i + word.length] = [...table[i + word.length], ...copy];
      }
   }

   // table.forEach((subTable, i) => {
   //    console.log(i, subTable);
   // });

   return table[string.length];
};

console.log(allConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd', 'ef']));
console.log(allConstruct('purple', ['purp', 'p', 'ur', 'le', 'purpl']));
console.log(allConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar']));
console.log(allConstruct('enterapotentpot', ['a', 'p', 'ent', 'enter', 'ot', 'o', 't']));

// NOTE: since the function returns all the combinations this input will make your computer shit bricks
// console.log(allConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', ['e', 'ee', 'eee', 'eeee', 'eeeee', 'eeeeee']));
