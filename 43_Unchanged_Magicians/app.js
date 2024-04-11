"use strict";
let Magicians = ["Doug Henning", "Siegfried", "Max Maven", "Eugene Burger"];
function copyArray(aray) {
    return [...aray];
}
function make_great(Magicianaray) {
    Magicianaray.forEach(element => {
        console.log("the great : " + element);
    });
}
function show_Magicians(Magician) {
    Magicians.forEach(element => {
        console.log(element);
    });
}
const copyMagicianarray = copyArray(Magicians);
// make_great(copyMagicianarray);
console.log("\n\nthis is my original array:");
show_Magicians(Magicians);
console.log("\n\nthis is my modified copy of the array:");
make_great(copyMagicianarray);
