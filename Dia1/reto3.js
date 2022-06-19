
const fs = require ('fs')
const readline = require ("readline")

// 1-readline es un modulo que viene por defecto cuando instalamos node no??? porque no me salen los 3 puntos debajo de require??

let persona={
    nombre: "",
    apellido: "",
    edad: ""
}

let rl = readline.createInterface(process.stdin, process.stdout)
// let rl = readline.createInterface({
//     input: process.stdin, 
//     output: process.stdout
// })

// 2- Esto de arriba no entiendo realmente porque lo he hecho. Las dos formas creo que estan bien.????????????

rl.question("¿Cual es tu nombre? ", (respuesta) => {
    
    persona.nombre= respuesta
    rl.question("¿Cual es tu apellido? ", (respuesta2) => {

        persona.apellido= respuesta2
        rl.question("¿Cual es tu edad? ", (respuesta3) => {
            persona.edad= respuesta3
            fs.writeFile("./persona3.json", JSON.stringify(persona), function() {
                fs.readFile("./persona3.json", function (err, dato) {
                   console.log (JSON.parse(dato)) 
                })
            })
        })
    })

})