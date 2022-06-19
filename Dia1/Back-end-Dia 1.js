
// importación del modulo fs
const fs = require ('fs')


// objetos
let persona = {
    nombre : 'Andrea',
    apellido : 'lopez',
    edad : 23
}
let persona2 = {
    nombre : 'pepe',
    apellido : 'lopez',
    edad : 68
}

// la funcion nos permite que se ejecute en una sola ejecución
function escribirYleer(objeto) {
    // est método escribe en un archivo .json el dato que le pasamo y tiene 
    // una callback para controlar la asincronia del siguiente método
    fs.writeFile('./persona.json',JSON.stringify(objeto), function() {
        // este método lee el archivo creado y recoge la lectura en el parametro de la callback
        fs.readFile('./persona.json',function(err,datoleido){
            // JSON.parse nods devuleve la lectura a Json
            console.log(JSON.parse(datoleido));
        })
    })
    
}

// llamada a la funcion 
escribirYleer(persona2);
console.log('hola');

// IMPORTANTE!! duda en linea 22. Poner fs.writeFile('./persona.json',JSON.stringify(objeto), function() {   es lo 
//     mismo que poner fs.writeFile('./persona.json',JSON.stringify(objeto), () => {  ???????????????????????????????????
// ?????????????????????????
// la callback es un metodo sincrono! La sincronia del codigo se consigue con el anidamiento en las callbacks.La callback 
// se empieza a ejecutar cuando ya se ha ejecutado la funcion asincrona

