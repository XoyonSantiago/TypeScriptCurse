// Corchetes []

// Tipo Explicito
let users: string[];
users = ['luixaviles','paparazzi','lensqueen'];
//users = [1, true, 'test']; // errror

// tipo inferido

let otherUsers = ['luixaviles','paparazzi','lensqueen'];
//otherUsers  = [1, true, 'test']; error

//Array<TIPO>
let pictureTitles: Array<string>;
pictureTitles = ['Favorite Sunset', 'Vacation Time', 'Landscape'];

// Accedinedo a los valores en un Array
console.log('First user', users[0]);
console.log('first title', pictureTitles[0]);

// Propiedades en array
console.log('users.length ', users.length);

// uso de funciones en arrays
users.push('otroDato XD');
users.sort();
console.log('users', users);

