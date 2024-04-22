"use strict";
let Guest_list = ['imran khan', 'nawaz sharif', 'asif ali zardari'];
// for(let i=0; i<Guest_list.length; i++){
//     console.log('Dear Mr. ' + Guest_list[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank you!\n\n');
// }
let absent_Guest = 'imran khan';
let new_Guest = 'kamran tessori';
Guest_list[0] = new_Guest;
for (let i = 0; i < Guest_list.length; i++) {
    console.log('Dear Mr. ' + Guest_list[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank you!\n\n');
}
console.log(`Mr. ${absent_Guest} is not coming to the party.`);
console.log('Good News! we find Big Table So we are inviting 3 more guests.');
Guest_list.unshift('Sir Zia Khan');
Guest_list.splice(2, 0, 'Shehbaz Sharif');
Guest_list.push('Bilawal Bhutto');
for (let i = 0; i < Guest_list.length; i++) {
    console.log('Dear Mr. ' + Guest_list[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank you!\n\n');
}
