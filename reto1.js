
function impresion_instantanea(){
    console.log("Mensaje 1");
    setTimeout(function(){
        console.log("Mensaje 2")
        console.log("Mensaje 3")
    },3000)
}

impresion_instantanea()