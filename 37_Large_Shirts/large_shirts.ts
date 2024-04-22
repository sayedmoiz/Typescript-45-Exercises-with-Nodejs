function make_shirt(size:string = 'large', text:string = 'i love typescript.'){

    console.log(`Creating a ${size} shirt with the message of: ${text}`);

}

make_shirt();

make_shirt('medium');

make_shirt('small', 'i love phython');