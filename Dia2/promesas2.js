
const fs = require("fs/promises")
const readline = require("readline")

const rl = readline.createInterface(process.stdin, process.stdout)
// esto de arriba para que lo hacemos???

let persona={
    nombre: "",
    apellido: "",
    edad: ""
}   

// Estas variables deberian estar dentro de la funcion???
let pregunta1="¿Cual es tu nombre? "

let pregunta2="¿Cual es tu apellido? "

let pregunta3= "¿Cual es tu edad? "


function pregunta (pregunta){
// Cuando saltaria reject??? que error???
    const nuevaPromesa = new Promise((resolve, reject) => {
        rl.question(pregunta, (respuesta) => {
            resolve (respuesta)
            reject ("Error")
             
        })

    })
    return nuevaPromesa
}


pregunta(pregunta1)
.then((dato1) => {
    persona.nombre=dato1
    return pregunta(pregunta2)
})
.then((dato2) => {
    persona.apellido=dato2
    return pregunta(pregunta3)
})
.then((dato3) => {
    persona.edad=dato3
    rl.close()
    // console.log(persona)
    // las rutas de la misma carpeta en la que se trabaja se marca con ./???????? o solo con /???? porque en .gitignore solo me lo coge con una barra
    return fs.writeFile("./persona_promesa.json", JSON.stringify(persona))
})
.then(() => {
    return fs.readFile("./persona_promesa.json")
})
.then((personaLeida) => {
    console.log(JSON.parse(personaLeida))
})
.catch((error) => {
    console.log(error)
})





















