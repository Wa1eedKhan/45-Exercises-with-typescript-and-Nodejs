
// turn your if-else chain 25-26 into an if-else chain

 let alienColor: string = "green";

// if the alien is green , prinit a message that the player earned 5 pionts
alienColor = "green";

if( alienColor === "green" ){

console.log("The player have earned 5 pionts");
}

// if the alien is yellow , print a message that the player earned 10 pionts

alienColor = "yellow";

 if(alienColor === "yellow"){

    console.log("The player have earned 10 pionts");
}

// if the alien is red , print a message that the player earned 15 pionts
alienColor = "red";

 if(alienColor === "red"){
    
    console.log("The player have earned 15 pionts");
}
else {
    console.log("Please select a right color")
}


// write three version of this program , making sure each message is printed for the appropriate color alien

// version 1 :

 alienColor = "green";

 if( alienColor === "green" ){
    console.log("The player have earned 5 pionts");
    }
    else if(alienColor === "yellow"){
        console.log("The player have earned 10 pionts");
    }
    else if(alienColor === "red"){
        console.log("The player have earned 15 pionts");
    }
    else {
        console.log("Please select a right color")
    }

    // version 2 :
    alienColor = "yellow";

 if( alienColor === "green" ){
    console.log("The player have earned 5 pionts");
    }
    else if(alienColor === "yellow"){
        console.log("The player have earned 10 pionts");
    }
    else if(alienColor === "red"){
        console.log("The player have earned 15 pionts");
    }
    else {
        console.log("Please select a right color")
    }
  //  version 3 :

alienColor = "red";

 if( alienColor === "green" ){
    console.log("The player have earned 5 pionts");
    }
    else if(alienColor === "yellow"){
        console.log("The player have earned 10 pionts");
    }
    else if(alienColor === "red"){
        console.log("The player have earned 15 pionts");
    }
    else {
        console.log("Please select a right color")
    }
