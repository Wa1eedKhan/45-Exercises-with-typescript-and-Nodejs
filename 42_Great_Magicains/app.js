"use strict";
// Great Magicians
let Magicians = ["Doug Henning", "Siegfried", "Max Maven", "Eugene Burger"];
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
// show_Magicians(Magicians);
make_great(Magicians);
