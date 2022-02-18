// NOTE: 5-26-2021 7:49 AM - I didn't know that you can run a function in replace.

const prop = 'z-index';

const camel = prop.replace(/(-[a-z])/, (group) => {
   // group = -i
   return group.replace('-', '').toUpperCase();
});

console.log(camel);
