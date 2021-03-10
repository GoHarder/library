// Source
// https://youtu.be/WIP1czLm3CY

// Other topics
// 00:00​ - Introduction
// 00:24​ - Block Statements
// 03:36​ - in Keyword
// 05:49​ - Template Literal Functions
// 11:12​ - Generator Functions
// 14:57​ - Dynamic Module Imports

// Generator functions can't use es6 syntax

function* generator1() {
   console.log('Before 1');
   // yield is like return in a normal function
   yield 1;
   console.log('After 1');

   console.log('Before 2');
   yield 2;
   console.log('After 2');

   console.log('Before 3');
   yield 3;
   console.log('After 3');
}

// Doesn't run function just makes an object
const generator1Inst = generator1();

// The next method runs the code
console.log(generator1Inst.next());
console.log(generator1Inst.next());
console.log(generator1Inst.next());
console.log(generator1Inst.next());

// Can make an infinite counter
function* idGenerator() {
   let id = 0;

   while (true) {
      yield id;
      id++;
   }
}

const makeId = idGenerator();

console.log(makeId.next().value);
console.log(makeId.next().value);
console.log(makeId.next().value);
console.log(makeId.next().value);
console.log(makeId.next().value);
