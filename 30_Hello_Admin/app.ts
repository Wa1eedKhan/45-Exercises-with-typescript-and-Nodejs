// Hello admin , make a array of five or more usernames, including the name admin imagine that 
// you are writing the code that will print a greeting to each user after they login into a website.
// loop through the array, and prinit a greeting to each user:


const userNames : string[] = ["admin","Eric","Mike","Tommy","Ivan"];

userNames.forEach(userName => {

    //  . if the user name is admin, print a special greeting,such as hello admin,would you like to see 
//the status report?.


    if(userName == "admin"){
        console.log("Hello admin, would you like to see the status report?");

        // otherwise, print a generic greeting, such as hello eric , thank you for logging in again.
    }
    else{
        console.log(`hello ${userName} , thank you for logging in again.`);
    }
})



