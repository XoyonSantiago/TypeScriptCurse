// Orientación para fotografias
// const landscape =0;
// const portrait = 1;
// const square = 2;
// const panomara = 3;

enum PhotoOrientation{
    Landscape, // 0 posicion
    Portrait, // 1
    Square, // 2
    Panomara // 3
}

const landscape: PhotoOrientation = PhotoOrientation.Landscape;
console.log('landscape', landscape);


enum PictureOrientation{
    Landscape = 10, // 10
    Portrait, // 11
    Square, // 12
    Panomara // 13
}

console.log('portrait', PictureOrientation.Portrait);

enum Country {
    Bolivia = 'bol',
    Colombia = 'col',
    Mexico = 'mex',
    EEUU = 'usa',
    Espana = 'esp',
    guatemala = 'GTQ'
}

const country: Country = Country.guatemala;
console.log('country', country);