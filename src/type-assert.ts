// <tipo> // Angle Bracket syntax
// creo que es tipo castin para saber el tipo de variable y utilizar metodos.
let username: any;
username='Santiii';

// tenemos una cadena, TS confia en mi!
let message : string =(<string>username).length > 5 ?
                        `Welcome ${username}`:
                        `Username is too short`;

console.log('message', message);

let usernameWithID: any = 'Santi 1';
// Como obenter el user name?
username = (<string>usernameWithID).substring(0,5);
console.log('Username only', username);

// sintaxis "as"
message : (username as string).length > 5 ?
                        `Welcome ${username}`:
                        `Username is too short`;

let helloUser: any;
helloUser = 'hello paparazzi';
username = (helloUser as string).substring(6);
console.log('username', username);
