export{};
// 10, '10'

let idUser: number | string
idUser = 10;
idUser = '10';

// Buscar username dad un ID
function geUsernameById(id: number | string) {
    // logica de negocio, find the user
    return 'Edy Saput';
}

geUsernameById("Edy Saput");

geUsernameById(10);

// Alieas de tipos:  TS

type IdUser = number | string;
type Username = string;
let idUserr: IdUser;
idUser = 10;
idUser = '10';

// Buscar username dad un ID
function getUsernameByIdAnother(id: IdUser): Username {
    // logica de negocio, find the user
    return 'Edy Saput';
}
getUsernameByIdAnother("Edy Saput");

getUsernameByIdAnother(10);

// Tipos literales
// 100x100, 500x500, 1000x1000
type SquareSize = '100x100' | '500x500' | '1000x1000'

//let smallPicture: SquareSize = '200x200' // da error porque no es de tipo de valiable que esta definido.
let smallPicture: SquareSize = '100x100';
let mediumPicture: SquareSize = '500x500';
 
