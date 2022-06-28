export { } // ya que la variable user fue declarada en otro arhcivo.

// [1, 'user']
let user: [number, string];
user = [1, 'Santi']

console.log('user', user);
console.log('UserName: ', user[1]);
console.log('UserName.length: ', user[1].length);
console.log('ID: ', user[0]);

// tuplas con varios valores
// id, username, isPro
let userInfo: [number, string, boolean];
userInfo = [2, 'santii', true];
console.log('userInfo ', userInfo);

// arreglo de tuplas
let array: [number, string][] = []; // hay que inicializar el arreglo si no dará error 
array.push([1, 'santi']);
array.push([2, 'Melisa']);
array.push([3, 'Juan']);

console.log('array:', array);

// uso de funciones Array
// Juan --> JuanCambio

array[2][1] = array[2][1].concat('Cambio'); //posicion 2 esta juan
console.log('array:', array);