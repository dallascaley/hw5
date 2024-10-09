/* 
  Homework 5 Question 2
*/

const myArray = [1,2,3,4,5,6,7,8,9,10];
console.log(`Original Array: ${myArray}`);

const oddNumbers = myArray.filter(x => x%2 === 1);
console.log(`Odd numbers: ${oddNumbers}`);

const divBy2or5 = myArray.filter(x => (x%2 === 0 || x%5 === 0));
console.log(`Divisible by 2 or 5: ${divBy2or5}`);

const div3squared = myArray.filter(x => x%3 === 0).map(x => x ** 2);
console.log(`Divisible by 3, then squared: ${div3squared}`);

const sumDiv5Squared = myArray.filter(x => x%5 === 0).map(x => x ** 2).reduce((a, x) => a + x);
console.log(`Divisible by 5, then squared, then summed: ${sumDiv5Squared}`);

