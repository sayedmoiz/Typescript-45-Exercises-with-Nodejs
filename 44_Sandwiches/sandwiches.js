"use strict";
function makeSandwich(item) {
    console.log('\nMaking your sandwich with: ');
    item.forEach(element => console.log("- " + element));
    console.log('Enjoy your sandwich !\n');
}
makeSandwich(['cheese', 'ham', 'lettuce']);
makeSandwich(['turkey', 'bacon']);
makeSandwich(['peanut butter', 'jelly']);
