"use strict";
// store the locations in an array. make sure the array is not in the alphabetical order
let places = ['Canada', 'Denmark', 'finland', 'Bahrain', 'Austrilia'];
// print your array in its original order
console.log('Original ' + places);
//print your array in alphabetical order without modifying the actual list
console.log('Copy ' + [...places].sort());
//show that your array is still in its original order by printing it
console.log('Original ' + places);
//print your array in reverse alphabetical without changing its original order list
console.log('Copy ' + [...places].sort().reverse());
//show that your array is still in its original order by printing it again
console.log('Original ' + places);
//reverse the order of your list. print the array to show that its order has changed
console.log('Original ' + places.reverse());
//reverse the order of your list again. print the list to show its back to its orginal order
console.log('Original ' + places.reverse());
// sort your array so its stored in alphabetical order. print the array to show that its order has bee changed
console.log('Original ' + places.sort());
//sort to change your array so its stored in reverse alphabetical order.print the list to show that its order has changed
console.log('Original ' + places.sort().reverse());
