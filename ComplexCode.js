/*
 * Filename: ComplexCode.js
 * Description: A complex and creative JavaScript code showcasing advanced programming concepts.
 * Author: [Insert Your Name]
 */

// Constants
const PI = 3.14159;
const MAX_ATTEMPTS = 100;

// Global variables
let counter = 0;
let result = 0;

// Function to calculate the factorial of a number
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

// Function to generate a random number between two values
function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// Function to calculate the area of a circle
function calculateCircleArea(radius) {
  return PI * radius ** 2;
}

// Function to reverse a string
function reverseString(str) {
  return str.split('').reverse().join('');
}

// Class representing a person
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

// Event listener for button click
document.getElementById('myButton').addEventListener('click', function() {
  alert('Button Clicked!');
});

// Main program
for (let i = 1; i <= MAX_ATTEMPTS; i++) {
  if (i % 2 === 0) {
    counter += i;
  } else {
    counter -= i;
  }
}

const randomNumber = generateRandomNumber(0, 100);
result = factorial(randomNumber);
const circleArea = calculateCircleArea(randomNumber);

console.log(`The counter is: ${counter}`);
console.log(`The factorial of ${randomNumber} is: ${result}`);
console.log(`The area of a circle with radius ${randomNumber} is: ${circleArea}`);

const reversedString = reverseString('Hello, World!');
console.log(`The reversed string is: ${reversedString}`);

const person = new Person('John Doe', 25);
person.sayHello();