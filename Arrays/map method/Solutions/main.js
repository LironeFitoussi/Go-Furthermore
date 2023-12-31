console.log("Test");
// Exercise 1
//? Use map to double each element in arr1

const arr1 = [1, 2, 3];
const doubledArr = arr1.map(num => num*2)
console.log(doubledArr);

// Exercise 2
//? Use map to convert each element in arr2 to uppercase
const arr2 = ['apple', 'banana', 'cherry'];
const upperCaseArr2 = arr2.map(fruit => fruit.toUpperCase())
console.log(upperCaseArr2);

// Exercise 3
//? Use map to add 5 to each element in arr3
const arr3 = [10, 20, 30];
const added5Arr3 = arr3.map(num => num+5)
console.log(added5Arr3);

// Exercise 4
//? Use map to square each element in arr4
const arr4 = [5, 10, 15];
const squareArr4 = arr4.map(num => num*num)
console.log(squareArr4);

// Exercise 5
//? Use map to divide each element in arr5 by 2
const arr5 = [2, 4, 6];
const dividedNum = arr5.map(num => num/2)
console.log(dividedNum);

// *Exercise 6*
//? Use map to extract the first names from the full names in arr6
const arr6 = ['John Doe', 'Jane Smith', 'Mike Johnson'];
const arrFirstNames = arr6.map(name => name.split(` `)[0])
console.log(arrFirstNames);

// *Exercise 7*
//? Use map to calculate the square root of each element in arr7
const arr7 = [100, 200, 300];
let sqrtOfArr7 = arr7.map(num => Math. sqrt(num))
console.log(sqrtOfArr7); 

// *Exercise 8*
//? Use map to calculate the cube of each element in arr8
const arr8 = [1, 3, 5];

// *Exercise 9*
//? Use map to count the number of characters in each element in arr9
const arr9 = ['hello', 'world', 'how', 'are', 'you'];
const arr9withCount = arr9.map((word) => `${word} : ${word.length} characters`)
console.log(arr9withCount);

// *Exercise 10 - Challenge*
//? Use map to convert each element in arr10 to a binary string representation
const arr10 = [0, 1, 2];

const binaryArray = arr10.map((element) => {
  return element.toString(2);
});

console.log(binaryArray);

// *Exercise 11*
//? Use map to calculate the square root of each element in arr11

const arr11 = [4, 9, 16];
const sqrtOfArr11 = arr11.map(num => Math.sqrt(num))
console.log(sqrtOfArr11);

// *Exercise 12*
//? Use map to convert each element in arr12 to a formatted currency string

const arr12 = [1000, 5000, 2000];

const formattedCurrencyArray = arr12.map(amount => {
  return amount.toLocaleString(undefined, { style: 'currency', currency: 'GBP' });
});

console.log(formattedCurrencyArray);


// *Exercise 13*
//? Use map to calculate the reciprocal (1/x) of each element in arr13

const arr13 = [5, 10, 15];
const reciprocalArray = arr13.map(number => {
  let equalToZero = number !== 0;
  return equalToZero?1/number: "Cannot divide by zero";
})

console.log(reciprocalArray);

// *Exercise 14*
//? Use map to calculate the cube root of each element in arr14

const arr14 = [3, 6, 9];
const cbrtOfArr14 = arr14.map(num => Math.cbrt(num))
console.log(cbrtOfArr14);

// *Exercise 15*
//? Use map to create an array of objects with {index, value} for each element in arr1

const arr15 = ['apple', 'banana', 'cherry'];
const objOfarr15 = arr15.map((item, index) => {
  return {
    index: index,
    value: item
  };
});
console.log(objOfarr15);

// *Exercise 16*
//? Use map to create an array of greetings like 'Hello, John!', 'Hello, Jane!', 'Hello, Mike!'

const arr16 = ['John', 'Jane', 'Mike'];
const greetArr16 = arr16.map(name => `Hello, ${name}!`)
console.log(greetArr16);

// *Exercise 17*
//? Use map to convert each element in arr17 to its corresponding ASCII character

const arr17 = [0, 1, 2, 3];
const asciiValue = arr17.map(char => char.toString().charCodeAt(0))
console.log(asciiValue); 

// *Exercise 18*
//? Use map to calculate the factorial of each element in arr18

const arr18 = [2, 4, 6, 8];
const arr18Factorial = arr18.map(num => {
  if (num === 0 || num === 1)
    return 1;
  for (let i = num - 1; i >= 1; i--) {
    num *= i;
  }
  return num;
});
console.log(arr18Factorial);

// *Exercise 19*
//? Use map to create an array of lengths for each string in arr19

const arr19 = ['JavaScript', 'Python', 'Java'];
const arr19Length = arr19.map(language => language.length)
console.log(arr19Length);

// *Exercise 20*
//? Use the .map() method to calculate the double factorial of a given number.

const numbers20 = [1, 2, 3, 4, 5];
const doubleFactorialOfNumbers20 = numbers20.map(num => {
  if (num === 0 || num === 1)
    return 1;
  for (let i = num - 1; i >= 1; i--) {
    num *= i;
  }
  return num*2;
});

console.log(doubleFactorialOfNumbers20);


