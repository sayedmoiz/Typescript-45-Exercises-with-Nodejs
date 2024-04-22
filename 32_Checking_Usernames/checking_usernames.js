"use strict";
let current_users = ['Hyder', 'saMeer', 'mOiz', 'zeesHan', 'Junaid'];
let new_users = ['Daniyal', 'Hyder', 'Faseeh', 'Rehan', 'zeesHan'];
new_users.forEach(newUsernames => {
    let lowerCase = newUsernames.toLowerCase();
    if (current_users.map(c_users => c_users.toLowerCase()).includes(lowerCase)) {
        console.log(`The username ${newUsernames} is not available. Please write a different username.`);
    }
    else {
        console.log(`The username ${newUsernames} is available.`);
    }
});
