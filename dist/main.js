"use strict";
console.log('main');
// Number
// Explicito 
let phone;
phone = 1;
phone = 1232134;
//phone = 'hola'; //error
// inferido
let phoneNumber = 1234;
phoneNumber = 23;
// phoneNumber = true; // data type error
let hex = 0xf00d; //hexadecimal
let binary = 0b1010; // binario
let octal = 0o744; // número octal
// tipo: boolean
// tipado explicito
let isPro;
isPro = true;
//isPro = 1; // error
// inferido
let isUserPro = false;
isUserPro = true;
// string
let userName;
userName = "Edy";
// Template string 
// Uso de back-tick ``
let userInfo;
userInfo = `
    User Info : 
    userName: ${userName}
    firstName: ${userName + ' Saput'}
    phone: ${phone}
    ispro: ${isPro}
`;
console.log('user Info :) ', userInfo);
