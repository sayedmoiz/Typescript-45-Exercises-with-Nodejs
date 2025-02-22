
//The locations in a array. The array is not in alphabetical order.
let places :string[] = ['Saudia' , 'Turkey' , 'Burj khalifa' , 'Eifel tower' , 'Times square'];

//Print array in its original order.
console.log('Original ' + places);

//Print array in alphabetical order without modifying the actual list.
console.log('Copy ' + [...places].sort());

//Show that array is still in its original order by printing it.
console.log('Original ' + places);

//Print array in reverse alphabetical order without changing the order of the original list.
console.log('Copy ' + [...places].sort().reverse());

//Show that array is still in its original order by printing it again.
console.log('Original ' + places);

//Reverse the order of list. Printing the array to show that its order has changed.
console.log('Original ' + places.reverse());

//Reverse the order of list again. Print the list to show it’s back to its original order.
console.log('Original ' + places.reverse());

//Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
console.log('Original ' + places.sort());

//Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
console.log('Original ' + places.sort().reverse());