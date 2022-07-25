"use strict";
// <tipo> // Angle Bracket syntax
// creo que es tipo castin para saber el tipo de variable y utilizar metodos.
let username;
username = 'Santiii';
// tenemos una cadena, TS confia en mi!
let message = username.length > 5 ?
    `Welcome ${username}` :
    `Username is too short`;
console.log('message', message);
let usernameWithID = 'Santi 1';
// Como obenter el user name?
username = usernameWithID.substring(0, 5);
console.log('Username only', username);
// sintaxis "as"
message: username.length > 5 ?
    `Welcome ${username}` :
    `Username is too short`;
let helloUser;
helloUser = 'hello paparazzi';
username = helloUser.substring(6);
console.log('username', username);
