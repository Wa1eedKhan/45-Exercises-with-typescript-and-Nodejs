"use strict";
let guest_list = ['Ahmed', 'Osama', 'Hiba', 'Sana',];
// for(let i=0; i <guest_list.length; i++){
//     console.log('Respected Sir/Madam,' + guest_list[i] + '\n We Invited You On Dinner Tommorow.\nthankyou\n');
// }
let not_present = 'Osama';
let new_guest = 'babar';
guest_list[1] = new_guest;
for (let i = 0; i < guest_list.length; i++) {
    console.log('Respected Sir/Madam,' + guest_list[i] + '\n We Invited You On Dinner Tommorow.\nthankyou\n');
}
console.log('Good News! We Have Found A Bigger Dinner Table So We Are Inviting 3 More Guest');
guest_list.unshift('Hammad');
guest_list.splice(2, 0, 'Waleed');
guest_list.push('Arham');
for (let i = 0; i < guest_list.length; i++) {
    console.log('Respected Sir/Madam,' + guest_list[i] + '\n We Invited You On Dinner Tommorow.\nthankyou\n');
}
