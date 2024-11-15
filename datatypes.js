"use strict";
let Lname;
Lname = "Seokjin";
let newname = Lname.toUpperCase();
console.log(newname);
let age;
age = 25;
age = 25.5;
let dob = "07-3-=83";
let result = parseInt(dob);
console.log(result);
let isValid = false;
console.log(isValid);
let empList; // define an array
empList = ["array 1", "array 2"];
let numList; // define an array
numList = [1, 2, 3, 4, 5];
let results = numList.filter((a) => a > 2);
let num = numList.find((b) => b === 5);
let sum = numList.reduce((acc, num) => acc + num);
console.log(results);
console.log(num);
console.log(sum);
