// Great Magicians

let Magicians:string [] = ["Doug Henning", "Siegfried","Max Maven","Eugene Burger"]


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

make_great( Magicians);