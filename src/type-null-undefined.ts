// explicita 
let nullVariable: null;
nullVariable = null;
//nullVariable=1; //error

let otherVarialbe  = null;
otherVarialbe = 'tes';

console.log('nullVariable ', nullVariable);
console.log('otherVariable ', otherVarialbe);

// undefined
let undefinedVariable: undefined = undefined;
//undefinedVariable = 'test'; //Error

let otherUndefined = undefined;
otherUndefined = 1;

console.log('UndefinedVariable ', undefinedVariable);
console.log('otherUndefined ', otherUndefined);

// Null y Undefined: Como subtipos

// --strictNullChecks
//en la terminal se corre como tsc rutaProyecto/NombreArchivo.ts --strictnullChecks o desde el archivo tsconfig.json habilitar la opción y solo correr tsc para mostranos los errores.
let albumname: string;
// albumname = null;
// albumname = undefined;
