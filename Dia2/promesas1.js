
const fs = require("fs/promises")

let persona1 =   {
    name:"Maria",
    surname: "Fernandez",
    age: 33
} 

function escribirLeer (persona){

    return fs.writeFile("/persona.json", JSON.stringify(persona))
    // estw metodo dde este modulo nos devueve una promesa pero poder sacarla de la function, necesito un return.
}
// la funcion tiene que estar llamada antes del .then no???
escribirLeer(persona1)
.then(() => {    
    return fs.readFile("/persona.json", "utf-8")
})
.then((datos) => {
    console.log(datos);
})
.catch(() => {
    console.log("error")
})

// el codigo dentro de la callback ja es sincrono??? diapositiva de las slice
// cuando termina de ejecutarse una funcion asincrona?? Cuando empieza a ejecutarse su callback
