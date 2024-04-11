let guest_list : string[] =['Ahmed','Osama','Hiba','Sana',];
for(let i=0; i <guest_list.length; i++){

    console.log('Respected Sir/Madam,' + guest_list[i] + '\n We Invited You On Dinner Tommorow.\nthankyou\n');
}
let not_present : string = 'Osama';
let new_guest : string = 'babar';
guest_list[1] = new_guest;

for(let i=0; i <guest_list.length; i++){

    console.log('Respected Sir/Madam,' + guest_list[i] + '\n We Invited You On Dinner Tommorow.\nthankyou\n');
}
console.log(`MR. ${not_present} Will Not Come On Dinner Tommorow`);



