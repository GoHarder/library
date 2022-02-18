// PROBLEM 1
// n  1  2  3  4  5  6  7  8  9
// fx 1  1  2  3  5  8  13 21 34

const fib = (n = 1, memo = {}) => {
   if (n in memo) return memo[n];
   if (n <= 2) return 1;
   memo[n] = fib(n - 1, memo) + fib(n - 2, memo);

   return memo[n];
};

// console.log(fib(50));

// PROBLEM 2
const grid = (x, y, memo = {}) => {
   const key = `x${x}y${y}`;

   if (key in memo) return memo[key];
   if (x === 0 || y === 0) return 0;
   if (x === 1 || y === 1) return 1;

   memo[key] = grid(x - 1, y, memo) + grid(x, y - 1, memo);

   return memo[key];
};

// console.log(grid(1, 1));
// console.log(grid(2, 2));
// console.log(grid(2, 3));
// console.log(grid(3, 3));
// console.log(grid(18, 18));

// PROBLEM 3 - can sum
// canSum(7, [5, 3, 4, 7]) = true

const canSum = (x, array, memo = {}) => {
   if (x in memo) return memo[x];
   if (x === 0) return true;
   if (x < 0) return false;

   for (const y of array) {
      const z = x - y;

      if (canSum(z, array, memo) === true) {
         memo[x] = true;
         return true;
      }
   }

   memo[x] = false;
   return false;
};

// console.log(canSum(7, [2, 3]));
// console.log(canSum(7, [5, 3, 4, 7]));
// console.log(canSum(7, [2, 4]));
// console.log(canSum(8, [2, 3, 5]));
// console.log(canSum(300, [7, 14]));

// PROBLEM 4 - how sum
// Like can sum but return a number combination that works

// NOTE: work buts the output can be built differently
// const howSum = (x, array, output = [], memo = {}) => {
//    if (x in memo) return memo[x];
//    if (x === 0) return output;
//    if (x < 0) return null;

//    for (const y of array) {
//       const z = x - y;
//       const update = [...output, y];

//       const next = howSum(z, array, update, memo);

//       if (next !== null) {
//          memo[x] = next;
//          return next;
//       }
//    }

//    memo[x] = null;
//    return null;
// };

// NOTE: The previous try added the result from the top down
// In this example the answer is return from the bottom up
// This might help clarify how recursion works
const howSum = (x, array, memo = {}) => {
   if (x in memo) return memo[x];
   if (x === 0) return [];
   if (x < 0) return null;

   for (const y of array) {
      const z = x - y;
      const recursion = howSum(z, array, memo);

      if (recursion !== null) {
         memo[x] = [...recursion, y];
         return memo[x];
      }
   }

   memo[x] = null;
   return memo[x];
};

// console.log(howSum(7, [2, 3]));
// console.log(howSum(7, [5, 3, 4, 7]));
// console.log(howSum(7, [2, 4]));
// console.log(howSum(8, [2, 3, 5]));
// console.log(howSum(300, [7, 14]));

// PROBLEM 5 - best sum
// Like how sum but return a number combination with the shortest array
// If there is a tie any one will do

const bestSum = (x, array, memo = {}) => {
   if (x in memo) return memo[x];
   if (x === 0) return [];
   if (x < 0) return null;

   // Putting the return value into a variables allows to search through the whole tree
   let optimalBranch = null;

   for (const y of array) {
      const z = x - y;
      const recursion = bestSum(z, array, memo);

      if (recursion !== null) {
         const branch = [...recursion, y];
         const optimalLength = optimalBranch?.length ?? Infinity;

         if (branch.length < optimalLength) {
            optimalBranch = branch;
         }
      }
   }

   memo[x] = optimalBranch;
   return optimalBranch;
};

// console.log(bestSum(7, [5, 3, 4, 7]));
// console.log(bestSum(8, [2, 3, 5]));
// console.log(bestSum(8, [1, 4, 5]));
// console.log(bestSum(100, [1, 2, 5, 25]));

// PROBLEM 6 can construct
// canConstruct(target, words) -> true / false

const canConstruct = (string, words, memo = {}) => {
   if (string in memo) return memo[string];
   if (string === '') return true;

   let output = false;

   for (const word of words) {
      if (string.indexOf(word) === 0) {
         const newString = string.replace(word, '');

         if (!output) {
            output = canConstruct(newString, words, memo);
         }
      }
   }

   memo[string] = output;
   return output;
};

// console.log(canConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd']));
// console.log(canConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar']));
// console.log(canConstruct('enterapotentpot', ['a', 'p', 'ent', 'enter', 'ot', 'o', 't']));
// console.log(canConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', ['e', 'ee', 'eee', 'eeee', 'eeeee', 'eeeeee']));

// PROBLEM 6 count construct
// countConstruct(target, words) -> amount of ways that the target can be achieved

const countConstruct = (string, words, memo = {}) => {
   if (string in memo) return memo[string];
   if (string === '') return 1;

   let output = 0;

   for (const word of words) {
      if (string.indexOf(word) === 0) {
         const newString = string.replace(word, '');

         output += countConstruct(newString, words, memo);
      }
   }

   memo[string] = output;
   return output;
};

// console.log(countConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd']));
// console.log(countConstruct('purple', ['purp', 'p', 'ur', 'le', 'purpl']));
// console.log(countConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar']));
// console.log(countConstruct('enterapotentpot', ['a', 'p', 'ent', 'enter', 'ot', 'o', 't']));
// console.log(countConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', ['e', 'ee', 'eee', 'eeee', 'eeeee', 'eeeeee']));

// PROBLEM 6 all construct
// allConstruct(target, words) -> the various ways that the word can be constructed

const allConstruct = (string, words, memo = {}) => {
   if (string in memo) return memo[string];
   if (string === '') return [[]];

   let output = [];

   for (const word of words) {
      if (string.indexOf(word) === 0) {
         const newString = string.replace(word, '');
         const recursion = allConstruct(newString, words, memo).map((container) => [word, ...container]);
         output = [...output, ...recursion];
      }
   }

   memo[string] = output;
   return output;
};

console.log(allConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd', 'ef']));
console.log(allConstruct('purple', ['purp', 'p', 'ur', 'le', 'purpl']));
console.log(allConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar']));
console.log(allConstruct('enterapotentpot', ['a', 'p', 'ent', 'enter', 'ot', 'o', 't']));
console.log(allConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', ['e', 'ee', 'eee', 'eeee', 'eeeee', 'eeeeee']));
