//? Module-1-Project-2-Sprint-1
//? JavaScript Basics Exercises
//? Writing expressions with variables
/* To get started, here are some simple exercises to create and use variables and expressions.
 Variables are how you store data and results of calculations. 
 Expressions are how you calculate values 
 */

//*  Exercise 1
/*In your JavaScript file create a variable called myName with your name as the value. 
Put your name inside string quotes, e.g., "my name". 
Then add a line of code to print the variable name to the console after the previous message.
Save your JavaScript file in your editor. 
Reload the HTML page in your browser. 
You should see your name printed. If not, investigate and fix it: 
*/

/*
var myName = 'Karolina'
console.log(myName)
*/

//* Exercise 2

/* //either you have : let firstName = "Jonas" OR: let firtsName = "Elisa" -not both!//
let firstName="Jonas"
console.log(firstName);
*/

/* let js = "amazing";
if (js === "amazing") alert ("Kukurriku! Java Script is Fun!");

40 + 8+ 23- 10;
console.log (40 + 8+ 23- 10);

console.log(33)
console.log(40 + 8 + 23 + 10)

let firstName2 = "Elisa";
console.log(firstName2);

let myFirstJob = "Babysitter";
let myCurrentJob = "Web Developer";

console.log(myFirstJob);
*/

/* LMS-CODE ACADEMY BERLIN: PROJEC2-SPRINT1-EPIC1:
JavaScriptt Basics:

exercise1 variable called myName with your name as value:
*/
let myName = "Katinka";
console.log(myName);

/* 
Exercise 2
Create a variable called age with a number that is your age. 
Do not use string quotes for numbers.
Add a line to print that variable in the console. 
Save the file and reload the page. You should see your name and your age


/*
this works, but its not allowed in this task to use string quotes for numbers.
let age = "41";
console.log(age);
*/

let age = 41;
console.log(age);

console.log(myName + " " + "is" + " " + age + " " + "years old");
console.log(1 + 1);

/*
Exercise 3
Create a variable called juliaAge with a value 32. 
Create another variable called ageDiff and 
set it to an expression that calculates your age minus Julias's age. 
Print the value of ageDiff. 
Save the file and reload the page. 
You should see your age and the age difference. 
If you are younger than Julia, you should see a negative number.
*/

let julliaAge = 32;
let ageDiff = age - julliaAge;
console.log(ageDiff);

/*
Writing code with conditionals
Conditionals are forms used programming to tell the computer to do different things, 
depending on some test, e.g., "if the user is logged in, say "Hi" else say "Please log in."

The most basic conditional form is if...then...else...

Exercise 4
Write a conditional that compares the variable with your age with the number 21. 
It should print either "You are older than 21" or "You are not older than 21", 
appropriately, depending on your age. 
Save your JavaScript file and reload the page. 
Make sure you see the correct message. 
Try changing your age in the JavaScript file 
to make sure the other message prints when it should.
*/
/*if (age>21) {console.log("You are older than 21")
    
} else {
   console.log("You are not older than 21")
}

// let age be 77
if (age>77) {console.log("You are older than 77")
    
} else {
   console.log("You are not older than 77")
}
*/

/*
Exercise 5
Write a conditional that compares your age with Julia's age. 
This conditional will need to test if you are older, younger, 
or the same age, 
and print, appropriately, either "Julia is older than you", 
Julia is younger than you", 
or "You have the same age as Julia".

Save your changes and reload the file.
*/
//whats wrong in the code below?
/*
if (age>julliaAge) {
    console.log("Julia is younger than you");
} else if (age == julliaAge) {
    console.log("You have the same age as Julia");
} else {
    console.log("Julia is older than you");
}
/*

/*
JavaScript Array
Sorting an Array
Exercise 1
Create an array with all the names of your class 
(including mentors). 
Sort the array alphabetically. 
Then print the first element of the array in the console. 
On the next line, 
print the last element of the array in the console. 
On the next line, print all the elements of the array in the console 
(use a "for" loop). 
Save the file and reload the page. 
You should see the first element of the sorted array, 
the last element of the sorted array, 
and a list of all the elements in order 
in the array in the console.
*/

var classNames = [
  "Alejandro",
  "Karolina",
  "Marta",
  "Angelina",
  "Arno",
  "Jess",
  "John",
  "Jost",
  "Ottavia",
  "Raúl",
  "Sarah",
];
console.log(classNames);

classNames.sort();
console.log(classNames);

// Why not this?:console.log(classnames.reverse);

/*
Looping over an Array
Exercise 2
Create an array with all the ages of the students in your class. 
Iterat the array using a while loop, and then print every age in the console. 
Add a conditional inside the while loop to only print even numbers. 
Write again a loop but use a "for" loop instead of a "while" loop. 
Save your changes to your JavaScript file. Reload the HTML page in your browser. 
You should see every age printed, then only the even numbers printed. 
If not, investigate and fix it.
*/

//sort the classmates by age
const classNamesAndAge = [
  { firstName: "Alejandro", age: 37 },
  { firstName: "Karolina", age: 41 },
  { firstName: "Marta", age: 5 },
  { firstName: "Angelina", age: 25 },
  { firstName: "Arno", age: 26 },
  { firstName: "Jess", age: 28 },
  { firstName: "John", age: 43 },
  { firstName: "Jost", age: 30 },
  { firstName: "Ottavia", age: 24 },
  { firstName: "Raúl", age: 45 },
  { firstName: "Sarah", age: 25 },
];

console.log(classNamesAndAge);

//sort an Array
let sortByAge = classNamesAndAge.sort(function (p1, p2) {
  return p1.age - p2.age;
});
console.log(sortByAge);

const ages2 = [3, 6, 8, 2, 7, 9];

ages2.sort(function (a, b) {
  return b - a;
});
console.log(ages2);

for (let i = 0; i < ages2.length; i++) {
  if (ages2[i] % 2 == 0) {
    console.log(ages2[i], ages2[i]);
  } else {
    console.log(ages2[i], " age is not even");
  }
}
//Add a conditional inside the while loop to only print even numbers.
if (10 % 2 == 0) {
  console.log("even");
} else {
  console.log();
}

console.log("this is the remainder", 9 % 2);
for (let i = 0; i < classNamesAndAge.length; i++) {
  console.log(classNamesAndAge[i].age);
  // more statements
}

/* if (classNamesAndAge[0].age % 2 == 0) {
  console.log("alejandros age", classNamesAndAge[0].age);
} else {
  console.log("alejandros age is not even");
} */

/* for (let i = 0; i < classNamesAndAge.length; i++) {
  if (classNamesAndAge[i].age % 2 == 0) {
    console.log(classNamesAndAge[i].firstName, classNamesAndAge[i].age);
  } else {
    console.log(classNamesAndAge[i].firstName, " age is not even");
  }
} */
/* var i = 0;

while (i < classNamesAndAge.length) {
  if (classNamesAndAge[i].age % 2 == 0) {
    console.log(classNamesAndAge[i].age);
  }
  i++;
} */
/* HOMEWORKS FOR EASTER */
/* let schoolCAB = [
  {
    cohort: "Cheetahs",
    students: [
      {
        firstName: "Sven",
        age: 5,
      },
      {
        firstName: "Nayab",
        age: 8,
      },
    ],
  },
  {
    cohort: "Quokkas",
    students: [
      {
        firstName: "Karolina",
        age: 15,
      },
      {
        firstName: "Ottavia",
        age: 80,
      },
    ],
  },
]; */

/* let prices = [33, 55, 2, 7, 80, 4];

/* 1. use sort */

/* 2. no sort */
/*
var smallest = prices[0];
console.log(smallest);
for (var i = 0; i < prices.length; i++) {
  console.log(smallest);
  console.log(prices[i]);
  if (prices[i] < smallest) {
    smallest = prices[i];
  }
}
*/

/* console.log(smallest);
 */

//?Following lines will show the color-comment-options, I chose:
//? HEADLINES
//* Exercises
//todo own research/aproach/etc
//! Something here doesn't work-WHY?

//?Functions that use Arrays
/* 
For the following exercises, you cannot sort your array. 
Be sure your solution works for any array that it is passed!
//* Exercise 3
Write a function that receives an array as a parameter 
and prints the lowest number in the array to the console. 
Save the changes to your JavaScript file. 
Reload the HTML page in your browser. 
You should see the lowest number in the array printed in the console. 
If not, investigate and fix it.
*/

var myArray = [5, 17, 39, 88, 2, 31, 23];
var resultLowestNumber = myArray[0];
function lowestNumber(myArray) {
  for (let i = 0; i < myArray.length; i++) {
    if (resultLowestNumber > myArray[i]) {
      resultLowestNumber = myArray[i];
      console.log("Result from within the function: " + resultLowestNumber);
    }
  }
  return resultLowestNumber;
}

myResult = lowestNumber(myArray);
console.log("Returned result of lowest number: " + myResult);
