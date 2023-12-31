**Exercise 1**

*Use the .filter() method to filter out even numbers from the given array.*

```
let numbers1 = [1, 2, 3, 4, 5, 6];
```

**Exercise 2**

[/Resources/]

> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith

*Filter out names from the array that start with the letter 'A'.*
```
let names2 = ["Alice", "Bob", "Charlie", "David", "Eve"];
```

**Exercise 3**

*Filter out all negative numbers from the array.*

```
let numbers3 = [2, -5, 10, -8, 3, -1];
```

**Exercise 4**

*Filter out all elements that are not strings from the array.*

```
let mixedArray4 = [42, "Hello", true, 7, "World"];
```

**Exercise 5**

*Filter out all people aged 25 or younger from the array of objects.*

```
let people5 = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 17 },
  { name: "Charlie", age: 30 },
  { name: "David", age: 15 },
];
```

**Exercise 6**

*Use .filter() to find all elements greater than 50 from the given array.*

```
let numbers6 = [30, 65, 12, 80, 45, 55];
```

**Exercise 7**

*Filter out words longer than 5 characters from the array.*

```
let words7 = ["apple", "banana", "cherry", "date", "elderberry"];
```

**Exercise 8**

*Filter out all non-prime numbers from the array.*

```
let numbers8 = [2, 4, 5, 9, 10, 13];
```

**Exercise 9**

[/Resources/]

> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty

*Filter out objects that do not have a "name" property.*

```
let objects9 = [
  { name: "Alice", age: 25 },
  { age: 17 },
  { name: "Charlie", age: 30 },
  { name: "David" },
];
```

**Exercise 10**

*Filter out elements that are not divisible by 3 from the array.*

```
const numbers10 = [9, 12, 7, 18, 15, 22];
```

**Exercise 11**

[/Resources/]

> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes

*Filter out names that contain the letter 'o'.*

```
const names11 = ["Bob", "Eve", "Olivia", "Sophia", "Noah"];
```

**Exercise 12**

*Filter out all uppercase strings from the array.*

```
const mixedArray12 = ["hello", 42, "WORLD", "javascript", "FILTER"];
```

**Exercise 13**

*Filter out objects with age greater than or equal to 40.*

```
const people13 = [
  { name: "Alice", age: 35 },
  { name: "Bob", age: 42 },
  { name: "Charlie", age: 55 },
  { name: "David", age: 30 },
];
```

**Exercise 14**

*Filter out elements that are not multiples of 7 from the array.*

```
const numbers14 = [14, 21, 32, 49, 55, 63];
```

**Exercise 15**

*Filter out strings containing the letter 'i'.*

```
const words15 = ["apple", "Kiwi", "Lime", "date", "index"];
```

**Exercise 16**

*Filter out objects that do not have a "price" property.*

```
const products16 = [
  { name: "Apple", price: 0.99 },
  { name: "Banana" },
  { name: "Cherry", price: 2.49 },
  { price: 1.25 },
];
```

**Exercise 17**

*Filter out elements that are not divisible by 4 from the array.*

```
const numbers17 = [16, 10, 7, 24, 35, 12];
```

**Exercise 18**

*Filter out names that contain the letter 'a'.*

```
const names18 = ["Bob", "Eve", "Olivia", "Sophia", "Noah"];
```

**Exercise 19**

*Filter out all elements that are not boolean values.*

```
const mixedArray19 = [true, 42, false, "JavaScript", null];
```

**Exercise 20**

*Filter out objects with a "quantity" property less than 10.*

```
const products20 = [
  { name: "Apple", quantity: 5 },
  { name: "Banana", quantity: 15 },
  { name: "Cherry", quantity: 8 },
  { name: "Date" },
];
```
---

*Here are the expected outputs for each exercise:*

**Exercise 1 (numbers1):**
> [2, 4, 6]

**Exercise 2 (names2):**
> ["Bob", "David", "Eve"]

**Exercise 3 (numbers3):**
> [2, 10, 3]

**Exercise 4 (mixedArray4):**
> ["Hello", "World"]

**Exercise 5 (people5):**
> [{ name: "Charlie", age: 30 }]

**Exercise 6 (numbers6):**
> [65, 80, 55]

**Exercise 7 (words7):**
> ["apple", "date"]

**Exercise 8 (numbers8):**
> [2, 5, 13]

**Exercise 9 (objects9):**
>[{ name: "Alice", age: 25 }, { name: "Charlie", age: 30 }, { name: "David" }]

**Exercise 10 (divisibleBy3):**
> [9, 12, 18, 15]

**Exercise 11 (namesWithoutO):**
> ["Eve", "Olivia"] 

**Exercise 12 (lowercaseStrings):**
> ["hello", "javascript"]

**Exercise 13 (peopleUnder40):**
> [{ name: "Alice", age: 35 }, { name: "David", age: 30 }]

**Exercise 14 (multiplesOf7):**
> [14, 21, 49, 63]

**Exercise 15 (stringsWithoutI):**
> ["apple", "date"]

**Exercise 16 (productsWithPrice):**
> [{ name: "Apple", price: 0.99 }, { name: "Cherry", price: 2.49 }]

**Exercise 17 (multiplesOf4):**
> [16, 24, 12]

**Exercise 18 (namesWithoutA2):**
> ["Bob" ,"Eve"]

**Exercise 19 (booleansOnly):**
> [true, false]

**Exercise 20 (productsWithQuantityGreaterThan10):**
> [{ name: "Banana", quantity: 15 }]
