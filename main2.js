"use strict";
const myName = "Arno";
console.log(myName);

const age = 27;
console.log(age);

const juliaAge = 32;
const ageDiff = age - juliaAge;
console.log(ageDiff);

if (age < 21) {
  console.log("You are younger the 21");
} else {
  console.log("You are older then 21");
}

if (age < juliaAge) {
  console.log("you are younger");
} else if (age === juliaAge) {
  console.log("you are the same age");
} else {
  console.log("you are older");
}
// JS Array
//Exercise 1
const codeClass = [
  "Arno",
  "Raul",
  "Octavia",
  "John",
  "Jess",
  "Martha",
  "Angelina",
  "Jose",
  "Sven",
];
codeClass.sort();
console.log(codeClass[0]);
console.log(codeClass[codeClass.length - 1]);

for (const i of codeClass) {
  console.log(i);
}
// Exercise 2 while loop
let num = 0;
const ageOfClass = [4, 8, 13, 16]; // fill in the actual numbers!
while (ageOfClass.length !== num) {
  if (ageOfClass[num] % 2 === 0) {
    console.log(`while loop: even numbers are ${ageOfClass[num]}`);
  }
  num++;
}
// Exercise 2 for loop
for (let i = 0; ageOfClass.length > i; i++) {
  if (ageOfClass[i] % 2 === 0) {
    console.log(`for loop: even numbers are ${ageOfClass[i]} `);
  }
}

// Exercise 3

const testNumbers = [1, 2, 3, 4, 5, 6];

function lowestNumber(array) {
  return Math.min(...array);
}

console.log(lowestNumber(testNumbers));

function biggestNumber(array) {
  return Math.max(...array);
}
console.log(biggestNumber(testNumbers));

//Exercise 5
let array = [
  3, 6, 67, 6, 23, 11, 100, 8, 93, 0, 17, 24, 7, 1, 33, 45, 28, 33, 23, 12, 99,
  100,
];
let index = 1;
function indexPosition(array, index) {
  return array[index];
}
console.log(
  `the number with the index position ${index}  is = ${indexPosition(
    array,
    index
  )}`
);

//Exercise 6
const myColor = ["Red", "Green", "White", "Black"];
function stringArray() {
  let newString = "";
  for (let i = 0; myColor.length > i; i++) {
    newString += myColor[i] + ", ";
  }
  return newString;
}
console.log(stringArray(myColor));

//String
// Exercise 1
let x = 123456;

//version 1
function reverseNum() {
  let digit;
  x = x.toString();
  const xArray = x.split("");
  const xArrayCopy = Array.from(xArray);
  let newArray = [];

  for (let i = 1; xArrayCopy.length >= i; i++) {
    digit = xArray.pop();
    newArray.push(digit);
  }
  newArray = newArray.join("");
  newArray = parseInt(newArray);

  return newArray;
}
// output
console.log(reverseNum());

// version 2 easy approach

function reverseNum2(x) {
  x = x.toString();
  const xArray = x.split("");
  let reverseArray = xArray.reverse().join("");

  return parseInt(reverseArray);
}
// output
console.log(reverseNum2(x));

// Exercise 2
// string in alphabetical order
const y = "webmaster";
function sortAlphabet(y) {
  let z = y.split("").sort().join("");
  return z;
}
// output
console.log(sortAlphabet(y));

// Exercise 3
// string first letter to uppercase

const word = "prince of persia";

function firstToUpperCase(word) {
  let wordArray = word.split(" "); // now an array

  for (let i = 0; i <= wordArray.length - 1; i++) {
    let charBig = wordArray[i].substring(0, 1).toUpperCase();
    let charSmall = wordArray[i].substring(0, 1);
    let replace = wordArray[i].replace(charSmall, charBig);
    wordArray.splice(i, 1, replace);
  }
  return wordArray.join(" ");
}
console.log(firstToUpperCase(word));

// Exercise 4
function wordLength(x) {
  let xArray = x.split(" ");
  let newLength = 0;
  let word;
  for (let i = 0; i < xArray.length; i++) {
    if (xArray[i].length > newLength) {
      newLength = xArray[i].length;
      word = xArray[i];
    }
  }
  return word;
}
console.log(wordLength("hello my name is ArnoHeitmann"));

// end of codeAkademy exercises
