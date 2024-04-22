let magician:string[] = ['Harry Potter', 'Harmione Granger', 'Ron Weasley', 'Albus Dombledore'];

function copyArray(arr:string[]){

    return [...arr]
}


function make_great(magicianArray:string[] ){

    for(let i=0; i<magicianArray.length; i++){
       
        magicianArray[i] = 'The Great ' + magicianArray[i];

    }

}

function show_magicians(magicians: string[]){

magicians.forEach(element => {
    console.log(element);
});

}

const copyMagicicanArray = copyArray(magician)


make_great(copyMagicicanArray);


console.log('\n\nThis is my original array:')

show_magicians(magician);

console.log('\n\nThis is my modified copy of the array:')

show_magicians(copyMagicicanArray);
