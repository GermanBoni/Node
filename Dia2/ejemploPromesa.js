
function prueba (bool) {
const nuevaPromesa = new Promise((resolve, reject) => {
    
    

    let dato = {
                ok: null,
                message: null
    }

    if (bool) {
        dato.ok= true
        dato.message= "Esta promesa funciona correctamente"
        resolve(dato)
    }else{
        dato.ok=false
        dato.message= "Esta promesa no funciona correctamente"
        reject(dato)
    }
})

    return nuevaPromesa
}

prueba()
.then((resultado) => {
    console.log(resultado)
})
.catch((resultado) => {
    console.log(resultado)
})

// 1- en el condicional, if (bool), significa que si bool presenta un valor???, 
// ya sea true o false no? else haria referencia a cuando bool sea igual a null??
// 2- el parametro de then y catch es resultado. A este parametro, le podemos poner 
// el nombre que queramos, pero equivaldra al valor que nos devueva la promesa, 
// es decir, en este caso equivaldra al valor de dato,