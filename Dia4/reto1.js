
// let professionalClass = require("./professional.js")

// Para importar la clase, esta tiene que estar en un archivo solo???

const { request, response } = require("express")
const express = require ("express")
const app = express()

app.use(express.urlencoded({extended:false}))
app.use(express.json())

// let professional = new professionalClass ("Antonio Banderas", 61, "Española", "Negro")

// console.log(professional)
// Como no me sale la clase importada, me la creo en este documento

class Professional{

    constructor(name, age, nationality, hairColor){
        this.name=name
        this.age=age
        this.nationality=nationality
        this.hairColor=hairColor
    }
}

let professional1 = new Professional("antonio", 61, "española", "negro")

// console.log(professional1);

//Metodo GET

app.get("/professional", (request, response) =>{

    let res
    let name= request.query.name
    // name lo creo para preguntar por un parametro concreto.
    // Si fuera para preguntar por la existencia de la clase professional1, no haria falta crear ninguna variable "name"

    if (professional1 !=null && name===professional1.name){
        res = {error: false, message: "Actor encontrado coincide con busqueda", profesional: professional1}
    }
    else if (professional1 !=null){
        res= {error: false, message: "El actor existe, pero no coincide", profesional: professional1}
    }
    else{
        res= {error: false, message: "El actor no existe", profesional: null}
    }

    response.status(200).send(res)

})

// Metodo POST

app.post("/profesional", (request, response) =>{

    let res
    const{name, age, nationality, hairColor} = request.body
    // como funciona els constructor de arriba??? es const o constructor??

    if (professional1 === null){
        professional1= {name:name, age: age, nationality:nationality, hairColor:hairColor}

        res = {error: false, message:"Actor creado", profressional:professional1}
    }
    else{
        res= {error:false, message:"Actor existene", professional:professional1}
    }

    response.status(200).send(res)

})


// Metodo PUT

app.put("/professional", (request, response) =>{

    let res
    const{name, age, nationality} = request.body

    if (professional1 !=null && name ===professional1.name){
        professional1.age=age
        professional1.nationality=nationality
        res ={error:false, message: "Actor modificado 1", professional:professional1}
    }
    else if (professional1 !=null && age ===professional1.age){
        professional1.name=name
        professional1.nationality=nationality
        res ={error:false, message: "Actor modificado 2", professional:professional1}
    }
    else if (professional1 !=null && nationality ===professional1.nationality){
        professional1.name=name
        professional1.age=age
        res ={error:false, message: "Actor modificado 3", professional:professional1}
    }
    else{
        res ={error:false, message: "Actor inexistente o sin ninguna coincidencia", professional:professional1}
    }
    response.status(200).send(res)
})


// console.log(professional1);

app.delete("/professional", (request, response) =>{

    let res
    const{name, age, nationality}= request.body

    if (professional1 != null && professional1.name===name){
        professional1 =null
        res ={error:false, message:"Eliminado por coincidencia en el nombre", professional:null}
    }
    else if (professional1 !=null && professional1.age===age && professional1.nationality===nationality){
        professional1=null
        res ={error:false, message:"Eliminado por coincidencia en la edad y en la nacionalidad", professional:null}
    }
    else{
        professional1=professional1
        res ={error:false, message:"No eliminado", professional:professional1}
    }
    // este else de arriba haria falta ponerlo???
    response.status(200).send(res)
})

// los cambios que voy haciendo con el post, put y delet se guardan??? Creo que se guardan en postman pero no en el archivo js. Para reiniciar y
// que los cambios no esten guardados en postman se tiene que volver a ejecutar el archivo js en node.


app.listen(5000)