// Los archivos se corren connode cuando es en la carpeta dist.
// type: object
let user: object;
user = {}; // Object

user = {
    id: 1,
    username: 'paparazzi',
    firstName: 'Pablo',
    isPro: true
};

console.log('user', user);
// Object vs object (Clase JS vs tipo TS)
const myobj = {
    id: 1,
    username: 'paparazzi',
    firstName: 'Pablo',
    isPro: true
};
const isInstance = myobj instanceof Object; // clase Object JavaScript
console.log('isInstance ', isInstance);


console.log('user.username ', myobj.username);