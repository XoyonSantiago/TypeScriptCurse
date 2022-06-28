// Any es recomendable usarlo en ultimo recurso 
// tipo explicito 
let idUser: any;
idUser =1; //Number
idUser = '1'; //String
console.log('idUser :',idUser )

// tipo inferido 
let otherId;
otherId=1;
otherId='1';
otherId=true;
console.log('otherId :',otherId )

let surprise: any =' Hola mundo, ';
const res = surprise.substring(5); // pude generar error si le asignamos otro tipo a la varialbre surprise.  
console.log(res);


