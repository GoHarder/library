const person = {
   firstName: 'John',
   lastName: 'Doe',
   age: 30,
   children: ['Jack', 'Jill'],
};

console.log(person);

console.dir(person);

console.assert(
   person.children.find((child) => child === 'Gary'),
   `Gary is not John's kid.`
);

person.children.forEach((child) => console.count('children'));

console.table(person);

console.time('Timer');

console.timeLog('Timer');

console.timeEnd('Timer');

const fun1 = () => {
   const fun2 = () => {
      console.trace('console.trace()');
   };

   fun2();
};

fun1();

console.group();
console.log('Log 1');
console.log('Log 2');
console.group();
console.log('Log 3');
console.log('Log 4');
console.groupEnd();
console.groupEnd();

console.log('%c Special log.', 'color:red; background-color:lightblue;');

console.warn('A warning');

console.error('An error');
