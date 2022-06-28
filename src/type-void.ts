// void


// tipo explicito
function showInfo(user: any) {
    console.log('User info', user.id, user.username, user.firstName);
    // return 'hola';
}

showInfo({
    id: 1,
    username: 'Edy Saput',
    firstName: 'Edy'
});

// tipo inferido

function showFormattedinfo(user: any) {
    console.log('User info', `
        id: ${user.id}
        username: ${user.username}
        firstName: ${user.firstName}
    `);
}

showFormattedinfo(
    {
        id: 1,
        username: 'Edy Saput',
        firstName: 'Edy'
    }
);

//tipo void, como tipo de dato en variable
let unusable: void;
// unusable = null; se cambia al false en tsconfig.json  "strict": true,  
unusable = undefined;



// tipo: never para nunca retornar un valor
function handleError(code: number, message: string): never {
    //process your code her
    //generate a message
    throw new Error(`${message}. Code: ${code}`);

}

try {
    handleError(404, 'Not Found');
} catch (error) {

}

//
function sumNumber(limit: number){
    let sum = 0;
    while (true){
        sum++;
    }
    // return sum;
}

sumNumber(10);
// cilco infinito, programa nunca termina 