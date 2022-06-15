
const fs= require("fs")
// const { isModuleNamespaceObject } = require("util/types")
// importacion modulo. Guardo el modulo en una constante que llamo fs porque 
// es un valor que ni queremos ni vamos a modificarlo, pero tambien podriamos 
// guardarlo en un let o un var.
// el modulo importado fs, es un modulo que esta por defecto en node al instalarlo, 
// cosa que hice al principio del bootcamp, por lo tanto no tenemos que instalar el modulo,
// unicamente importarlo.

let persona =   {
                name:"Maria",
                surname: "Fernandez",
                age: 33
                } 

// writeFile y readFile son metodos asincronos (funciones) del modulo fs que tenemos guardado en la constante fs
// 1- poner el punto de "./persona.json" es lo mismo que poner /node/persona.json??
// 2- los metodos usados abajo funcionan unicamente con strings no??? por eso hacemos 
// la conversion a string para escribir, la mantenemos para leer y la convertimos a 
// json al imprimir.

// JSON es una clase (plantilla) que presenta sus metodos por defecto
// function() es la callback del metodo de ese modulo. Esta funcion nos permite 
// controlar la asincronia ya que al estar readfile dentro del parametro funcion de 
// whrite file, no se ejecutara la accion de leer, hasta que se alla escrito, con lo 
// que consegimos sincronia

fs.writeFile("./persona.json", JSON.stringify(persona), function(){
    fs.readFile("./persona.json", function(err, datoLeido){
        console.log(JSON.parse(datoLeido))
    })
})

