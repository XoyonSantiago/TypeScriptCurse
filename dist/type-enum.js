"use strict";
// Orientación para fotografias
// const landscape =0;
// const portrait = 1;
// const square = 2;
// const panomara = 3;
var PhotoOrientation;
(function (PhotoOrientation) {
    PhotoOrientation[PhotoOrientation["Landscape"] = 0] = "Landscape";
    PhotoOrientation[PhotoOrientation["Portrait"] = 1] = "Portrait";
    PhotoOrientation[PhotoOrientation["Square"] = 2] = "Square";
    PhotoOrientation[PhotoOrientation["Panomara"] = 3] = "Panomara"; // 3
})(PhotoOrientation || (PhotoOrientation = {}));
const landscape = PhotoOrientation.Landscape;
console.log('landscape', landscape);
var PictureOrientation;
(function (PictureOrientation) {
    PictureOrientation[PictureOrientation["Landscape"] = 10] = "Landscape";
    PictureOrientation[PictureOrientation["Portrait"] = 11] = "Portrait";
    PictureOrientation[PictureOrientation["Square"] = 12] = "Square";
    PictureOrientation[PictureOrientation["Panomara"] = 13] = "Panomara"; // 13
})(PictureOrientation || (PictureOrientation = {}));
console.log('portrait', PictureOrientation.Portrait);
var Country;
(function (Country) {
    Country["Bolivia"] = "bol";
    Country["Colombia"] = "col";
    Country["Mexico"] = "mex";
    Country["EEUU"] = "usa";
    Country["Espana"] = "esp";
    Country["guatemala"] = "GTQ";
})(Country || (Country = {}));
const country = Country.guatemala;
console.log('country', country);
