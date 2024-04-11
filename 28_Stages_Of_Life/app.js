"use strict";
//stages of life
// set a value for the variable age, and then
let age = 25;
// if a person is less than 2 years old then , print a message that the person is a baby
if (age < 2) {
    console.log("the person is a baby");
}
// if a person is atleast 2 years old but less than 4 then , print a message that the person is a toddler
else if (age >= 2 && age < 4) {
    console.log("the person is a toddler");
}
// if a person is atleast 4 years old but less than 13 then , print a message that the person is a kid
else if (age >= 4 && age < 13) {
    console.log("the person is a kid");
}
// if a person is atleast 13 years old but less than 20 then , print a message that the person is a teeneger
else if (age >= 13 && age < 20) {
    console.log("the person is a teeneger");
}
// if a person is atleast 20 years old but less than 65 then , print a message that the person is a adult            
else if (age >= 20 && age < 65) {
    console.log("the person is a adult");
}
// if a person age is  65 or older then , print a message that the person is a elder            
else {
    console.log("the person is a elder");
}
