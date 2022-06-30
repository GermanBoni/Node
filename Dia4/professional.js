
class Professional{

    constructor(name, age, nationality, hairColor){
        this.name=name
        this.age=age
        this.nationality=nationality
        this.hairColor=hairColor
    }
}




// esta clase la podia haber importado de un archivo situado en otra carpeta fuera de este repositorio????

let professional1 = new Professional("antonio", 61, "española", "negro")

// console.log(professional1);

module.exports={Professional, professional1}

