class Professional{

    constructor(name, age, nationality, hairColor){
        this.name=name
        this.age=age
        this.nationality=nationality
        this.hairColor=hairColor
    }
}
// esta clase tiene que estar definida o importada en los dos archivos js no????

function post_user(){

    let professional1 = new Professional(document.getElementById("name_user").value, document.getElementById("age_user").value, document.getElementById("nationality_user").value, document.getElementById("hairColor_user").value)

    const url= "http://localhost:5000/professional"

    let param={
                headers: {"content-type":"application/json"},
                body: JSON.stringify(professional1),
                method: "POST" 
    }

    fetch(url,param)
    .then((data) =>{
        return data.json()
    })
    .then((result) =>{
        console.log(result)
        if (result.error=true){
            console.log("Error: " + result.message)
        }
        else{
            console.log(result.message)
        }
    })
    .catch((error) =>{
        console.log(error)
    })
    // cuando saltaria el catch??? que tipo de error??
}

function put_user(){

    let professional1 = new Professional(document.getElementById("name_user").value, document.getElementById("age_user").value, document.getElementById("nationality_user").value, document.getElementById("hairColor_user").value)

    const url= "http://localhost:5000/professional"

    let param={
                headers: {"content-type":"application/json"},
                body: JSON.stringify(professional1),
                method: "PUT" 
    }

    fetch(url,param)
    .then((data) =>{
        return data.json()
    })
    .then((result) =>{
        console.log(result)
        if (result.error=true){
            console.log("Error: " + result.message)
        }
        else{
            console.log(result.message)
        }
    })
    .catch((error) =>{
        console.log(error)
    })
}

function delete_user(){

    let professional1 = new Professional(document.getElementById("name_user").value, document.getElementById("age_user").value, document.getElementById("nationality_user").value, document.getElementById("hairColor_user").value)

    const url= "http://localhost:5000/professional"

    let param={
                headers: {"content-type":"application/json"},
                body: JSON.stringify(professional1),
                method: "DELETE" 
    }

    fetch(url,param)
    .then((data) =>{
        return data.json()
    })
    .then((result) =>{
        console.log(result)
        if (result.error=true){
            console.log("Error: " + result.message)
        }
        else{
            console.log(result)
        }
    })
    .catch((error) =>{
        console.log(error)
    })
}

function get_user(){

    const url= "http://localhost:5000/professional"

    let param={
                headers: {"content-type":"application/json"},
                method: "GET" 
    }

    fetch(url,param)
    .then((data) =>{
        return data.json()
    })
    .then((result) =>{
        console.log(result)
        if (result.error==true){
            console.log("Error: " + result.message)
        }
        else{
            document.getElementById("name_res").value=result.professional.name
            document.getElementById("age_res").value=result.professional.age
            document.getElementById("nationality_res").value=result.professional.nationality
            document.getElementById("hairColor_res").value=result.professional.hairColor
        }
    })
    .catch((error) =>{
        console.log(error)
    })
}



