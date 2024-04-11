let guest_list : string[] =['Ahmed','Osama','Hiba','Sana',];
// for(let i=0; i <guest_list.length; i++){

//     console.log('Respected Sir/Madam,' + guest_list[i] + '\n We Invited You On Dinner Tommorow.\nthankyou\n');
// }
let not_present : string = 'Osama';
let new_guest : string = 'babar';
guest_list[1] = new_guest;

// for(let i=0; i <guest_list.length; i++){

//     console.log('Respected Sir/Madam,' + guest_list[i] + '\n We Invited You On Dinner Tommorow.\nthankyou\n');
// }

// console.log('Good News! We Have Found A Bigger Dinner Table So We Are Inviting 3 More Guest');
// adding 3 guest

guest_list.unshift('Hammad');
guest_list.splice(2 , 0, 'Waleed');
guest_list.push('Arham');
 
//   for(let i=0; i <guest_list.length; i++){

//    console.log('Respected Sir/Madam,' + guest_list[i] + '\n We Invited You On Dinner Tommorow.\nthankyou\n');

//   }

// removing guest

// console.log('\n Unfortunately We Can Not Arrange A Big Table , So Only 2 Guest Can Come.')

while(guest_list.length>2){
    let remove_guest = guest_list.pop()
    // console.log(`Sorry, Sir/Madam. ${remove_guest} You Are Not Invited On Dinner.`);

}
// inviting 2 guest

// for(let i=0; i <guest_list.length; i++){
//     console.log('Respected Sir/Madam,' + guest_list[i] + '\n You Are Still Invited On Dinner Tommorow.\nthankyou\n');
//    }
   //removing all guest using array
   guest_list.splice(0,2)
   console.log(guest_list)
    
   // print a message indicating the number of people you are inviting for dinner.
   console.log(`Total Numbers Of Guest Are: ${guest_list.length}`) 
 




