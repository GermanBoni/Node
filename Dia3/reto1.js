
const http = require ("http")

const server = http.createServer((request, response) => {

    console.log("Petición recibida del cliente");
    console.log("URL: " + request.url);
    console.log("Metodo: " + request.method);
    console.log("Cabecera content-type: " + request.headers["content-type"]);
    console.log("Cabecera content-length: " + request.headers["content-length"]); 
  
    console.log("Cabecera user-agent: " + request.headers["user-agent"]);
    
    if (request.url=="/bye") {
        response.writeHead(200, {"content-type": "application/json"})
        
        response.write("{ ok: true, message: 'Adios!' }")
        
    }else{
        response.writeHead(200, {"content-type": "application/json"})
        response.write("{ ok: true, message: ‘Recibido!’ }")
    }
    response.end()
    
})

server.listen(3000)
