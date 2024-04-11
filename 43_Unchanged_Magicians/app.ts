let Magicians:string [] = ["Doug Henning", "Siegfried","Max Maven","Eugene Burger"]

function copyArray(aray: string []): string []{
   return  [...aray]
}


function make_great (Magicianaray: string[]){

    Magicianaray.forEach(element => {
    console.log("the great : " + element)
});
}

function show_Magicians(Magician: string[]){


    Magicians.forEach(element => {
        console.log(element)
    });
}

 const copyMagicianarray = copyArray(Magicians);



console.log("\n\nthis is my original array:")
show_Magicians(Magicians);


console.log("\n\nthis is my modified copy of the array:")
make_great(copyMagicianarray);