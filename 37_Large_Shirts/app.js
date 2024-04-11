"use strict";
function make_shirt(size = "Large", text = "i love typescript") {
    console.log(`Creating a ${size} Shirt with message : ${text} `);
}
make_shirt();
make_shirt("Medium");
make_shirt("Small", "I love python");
