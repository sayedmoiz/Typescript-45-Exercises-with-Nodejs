let personName :string = '';

personName = prompt('what is your name?') || '';

let lowercase :string = personName. toLowerCase();
let uppercase :string = personName. toUpperCase();
let titlecase :string = personName.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ')

if(personName !== null && personName !== ''){
    alert(`Hello ${personName}, here are your name in:
lowercase: ${lowercase}
uppercase: ${uppercase}
titlecase: ${titlecase}`)
}
else{
  alert('please fill your name !')
}