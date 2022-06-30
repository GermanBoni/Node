

const express = require("express")
const app= express()

app.get("/", (request, response) => {
    console.log("Peticion recibida del cliente");
    console.log("Url: " + request.url);
    console.log("Metodo: " + request.method);
    console.log("User-agent " + request.headers["user-agent"])
    // response.writeHead(200, {"content-type": "application/json"})
    response.send("{ ok: true, message: ‘Recibido!’ }")
    response.end()
    // se usa send en lugar de write???son distintos.uno escribe y otro envia.
})

app.get("/bye", (request, response) => {
    console.log("Peticion recibida del cliente");
    // console.log("Url: " + request.url);
    // console.log("Metodo: " + request.method);
    // console.log("User-agent " + request. );?????
    // response.writeHead(200, {"content-type": "application/json"})
    // esto de arriba lo devuelve el servidor al cliente , no se deberia ver en el navegador???
    response.send("{ ok: true, message: ‘Adios!’ }")
    response.end()
})

app.listen(8000)
