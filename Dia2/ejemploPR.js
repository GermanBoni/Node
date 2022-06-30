
let personas = [
    {
        nombre: "Andrea",
        profesion: "Desarrolladora Full Stack"
    },
    {
        nombre: "Germán",
        profesion: "Desarrollador Full Stack"
    },
    {
        nombre: "Laura",
        profesion: "Desarrolladora Full Stack"
    }
]
//Esto funciona de forma síncrona y lo devuelve todo correctamente, pero simulamos en el siguiente apartado
//la asincronía con el setTimeOut 
// function getDatos(){
//     return personas;
// }

// console.log(getDatos());


//En este caso, el console log, intentará ejecutarlo de inmediato, mientras que la función tardará 2 segundos en
//obtener los datos, por lo que en el console log, nos mostrará undefined
//Podemos resolver ese problema usando promesas

// function getDatos(){
//     setTimeout( function(){
//         return personas;         
//     }, 1000)
// }

// console.log(getDatos());

//Para resolverlo con promesas, en este caso tendemos que crear nuestra propia promesa, pero lo normal es que 
//trabajemos con paquetes de node, que ya devuelven promesas
// personas = null;
function getDatos(){
    return new Promise((resolve,reject)=>{
        setTimeout( function(){
            if(personas){ //Si encuentra los datos, se resuelve la promesa
                resolve(personas);
            } 
            else{   //Si no los encuentra, rechaza la promesa
                reject("No se encuentran los datos")
            }
        }, 2000);
    });
}


//Con el then y el chatch, operamos sobre la promesa que devuelve la función getDatos()
//El then captura el resolve de la promesa, y en caso de error, el catch, captura el reject
//Con los datos capturados con then y catch ya podemos operar como nosotros queramos
getDatos()
    .then((datos) => {
        console.log(datos);
    })
    .catch((error) =>{
        console.log(error);
    })


//Esta sería la forma de operar con async/await, utilizando la misma promesa que en el ejemplo anterior
//Declaramos la función usando la palabra reservada async, en esta función declaramos un bloque try/catch
//Dentro del try, usaremos todas las funciones que devuelvan promesas, usando la palabra reservada await
//await lo que hará, es esperar a que se termine de ejecutar esa función, para seguir la ejecución del programa
//El bloque catch, capturará cualquier error que pueda ocurrir en el bloque try, y parará la ejecución
// async function getDatosAsync(){
//     try{
//         let misDatos = await getDatos();
//         console.log(misDatos);
//     } catch(error){
//         console.log(error);
//     }
// }

//getDatosAsync();


function pregunta(pregunta) {
    const question = new Promise ((resolve,reject)=>{
        // Creamos interface de readline
        const rl = readline.createInterface(process.stdin, process.stdout);

        rl.question(pregunta, (respuesta) => {
            resolve(respuesta);

            rl.close()
        })
    });
    return question;
}

function readConsole(){
    let person = {name : null, surname: null, age: null};
    // llamamos a la funcion(promesa);
    pregunta('¿cual es tu nombre ')
        // con cada promesa recogemos los valores
        .then((respuesta)=>{
            person.name = respuesta

            // retornamos la siguiente pregunta que capturaremos con
            //el siguiente then 
            return pregunta('¿cual es tu apellido ')
        })
        .then((respuesta)=>{
            person.surname = respuesta;

            return pregunta ('¿y tu edad? ')
        })
        .then((respuesta)=>{
            person.age = respuesta;
             // comenzamos con el fs para crear nuestro archivo texto.JSON
             fs.writeFile('./persona33.json', JSON.stringify(person))
             .then (()=>{
                 // retornamos para podre capturar esto en al siguiente then
                 // ya que si no haria referencia al primer fs.write
                 return fs.readFile('./persona33.json')
             })
             .then(readData =>{
                 let data = JSON.parse(readData);
                 console.log(data);
             })
             .catch(err =>{
                 console.log(err);
             })
     })
}
// llamada a readConsole
readConsole();