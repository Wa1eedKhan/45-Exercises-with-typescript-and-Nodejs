"use strict";
let alien_color = "green";
// if the alien coler is green, print the statement that the player just earned 5 pionts for shoting the alien
if (alien_color == "green") {
    console.log("the player just earned 5 points for shooting the alien");
}
//if the alien color isn't green , then print the statement that the player just earned 10 pionts
else {
    console.log("the player just earned 10 points");
}
//write the version of this program that runs the if block and another runs the else block
alien_color = "red";
if (alien_color == "green") {
    console.log("the player just earned 5 points for shooting the alien");
}
else {
    console.log("the player just earned 10 points");
}
