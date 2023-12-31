// Exercise 1
let numbers1 = [1, 2, 3, 4, 5, 6];
numbers1 = numbers1.filter((num) => num % 2 === 0);
console.log(numbers1);

// Exercise 2 Solution 1
let names2 = ["Alice", "Bob", "Charlie", "David", "Eve"];
names2 = names2.filter((name) => name.indexOf("A") !== 0);
console.log(names2);

// Exercise 2 Solution 2
names2 = names2.filter((name) => !name.startsWith("A"));
console.log(names2);

// Exercise 3
let numbers3 = [2, -5, 10, -8, 3, -1];
numbers3 = numbers3.filter((num) => num > 0);
console.log(numbers3);

// Exercise 4
let mixedArray4 = [42, "Hello", true, 7, "World"];
mixedArray4 = mixedArray4.filter((item) => typeof item == "string");
console.log(mixedArray4);

// Exercise 5
let people5 = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 17 },
  { name: "Charlie", age: 30 },
  { name: "David", age: 15 },
];
people5 = people5.filter((person) => person.age > 25);
console.log({ people5 });

// Exercise 6
let numbers6 = [30, 65, 12, 80, 45, 55];
numbers6 = numbers6.filter((number) => number > 50);
console.log(numbers6);

// Exercise 7
let words7 = ["apple", "banana", "cherry", "date", "elderberry"];
words7 = words7.filter((fruit) => fruit.length <= 5);
console.log(words7);

// Exercise 8
let numbers8 = [2, 4, 5, 9, 10, 13];
numbers8 = numbers8.filter((num) => {
  if (num < 2) return false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
});
console.log(numbers8);

// Exercise 9
let objects9 = [
  { name: "Alice", age: 25 },
  { age: 17 },
  { name: "Charlie", age: 30 },
  { name: "David" },
];

objects9 = objects9.filter((person) => person.hasOwnProperty(`name`));
console.log({ objects9 });

// Exercise 10
const numbers10 = [9, 12, 7, 18, 15, 22];
const divisibleBy3 = numbers10.filter((num) => num % 3 === 0);
console.log(divisibleBy3);

// Exercise 11
const names11 = ["Bob", "Eve", "Olivia", "Sophia", "Noah"];
const namesWithoutO = names11.filter((name) => !name.includes("o"));
console.log(names11);

// Exercise 12
const mixedArray12 = ["hello", 42, "WORLD", "javascript", "FILTER"];
const lowercaseStrings = mixedArray12.filter(
  (item) => typeof item === "string" && item === item.toLowerCase()
);
console.log(mixedArray12);

// Exercise 13
const people13 = [
  { name: "Alice", age: 35 },
  { name: "Bob", age: 42 },
  { name: "Charlie", age: 55 },
  { name: "David", age: 30 },
];
const peopleUnder40 = people13.filter((person) => person.age <= 40);
console.log({ peopleUnder40 });

// Exercise 14
const numbers14 = [14, 21, 32, 49, 55, 63];
const multiplesOf7 = numbers14.filter((num) => num % 7 === 0);
console.log(multiplesOf7);

// Exercise 15
const words15 = ["apple", "Kiwi", "Lime", "date", "index"];
const stringsWithoutI = words15.filter((fruit) => !fruit.includes("i"));
console.log(stringsWithoutI);

// Exercise 16
const products16 = [
  { name: "Apple", price: 0.99 },
  { name: "Banana" },
  { name: "Cherry", price: 2.49 },
  { price: 1.25 },
];

const productsWithPrice = products16.filter((prod) =>
  prod.hasOwnProperty("price")
);
console.log({ productsWithPrice });

// Exercise 17
const numbers17 = [16, 10, 7, 24, 35, 12];
const multiplesOf4 = numbers17.filter((num) => num % 4 === 0);
console.log(multiplesOf4);

// Exercise 18
const names18 = ["Bob", "Eve", "Olivia", "Sophia", "Noah"];
const namesWithoutA2 = names18.filter((name) => !name.includes(`a`));
console.log(namesWithoutA2);

// Exercise 19
const mixedArray19 = [true, 42, false, "JavaScript", null];
const booleansOnly = mixedArray19.filter(
  (item) => item === true || item === false
);
console.log({ booleansOnly });

// Exercise 20
const products20 = [
  { name: "Apple", quantity: 5 },
  { name: "Banana", quantity: 15 },
  { name: "Cherry", quantity: 8 },
  { name: "Date" },
];
const productsWithQuantityGreaterThan10 = products20.filter(item => item.quantity > 10)
console.log(productsWithQuantityGreaterThan10);
