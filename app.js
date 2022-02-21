console.log("Este programa se utiliza para conocer el promedio de un alumno, y sus presencias a clases.")

class estudiante{
    constructor(nombre, apellido, documento, curso, ){
        this.nombre = nombre,
        this.apellido = apellido,
        this. documento = documento,
        this.curso = curso
        
    }
    presentarse(){
        console.log(`El alumno ${this.apellido}, ${this.nombre}, de documento ${this.documento}, de ${this.curso}`)
    }
    
}
const estudiante1 = new estudiante(
    prompt("Ingrese el nombre del estudiante"),
    prompt("Ingrese el apellido del estudiante"),
    parseInt(prompt("Ingrese el documento del mismo")),
    prompt("Ingrese a que curso asiste" )
)

estudiante1.presentarse()


let cant = parseInt(prompt("Ingrese la cantidad de notas"))
let acumulador = 0 //se declara el acumulador como 0 para poder ir sumando en el bucle

for (let i=0;i<cant; i++ ){
    let nota=parseFloat(prompt("Ingrese una nota"))
    acumulador += nota //se van sumando las notas al acumulador 
}//Aca realizo un bucle para poder ingresar las notas una por una la cantidad de veces ingresada

console.log(`tiene promedio de ${acumulador / cant}`)

let promedio = acumulador / cant //creo la variable promedio para poder clasificar este mismo
//clasifico el promedio dependiendo como haya sido el resultado
if(promedio >= 1 && promedio <= 5){

    console.log("el alumno esta reprobado")

}else if(promedio == 6){

    console.log("El alumno esta aprobado con conta regular")

}else if(promedio > 6 && promedio < 8){

    console.log("El alumno esta aprobado con nota de bien")

}else if(promedio >= 8 && promedio <= 9){ 

    console.log("El alumno esta aprobado con nota de muy bien")

}else if(promedio > 9 && promedio == 10){

    console.log("El alumno esta reprobado con nota de Exelente")

}else{
    //este ultimo else es por si el resultado no da entre los estandares marcados, ejemplo da menos de 0, mas de 10 o contiene letras
    console.log("Error ingresar notas validas")

}

//el programa de abajo es para saber cuantas clases el alumno se a ausentado
let cantidadclases = parseFloat(prompt("Ingrese la cantidad de clases que se realizaron"))
let clases = parseFloat(prompt("Ingrese la cantidad de clases que asistio el alumno"))

const asist = (clases, cantidadclases) => cantidadclases - clases

console.log(`El alumno no asistio a`,asist(clases, cantidadclases))
let alumnosrendir = []//este arreglo se realiza para que quede guardado que alumno rendira en diciembre
if(promedio<6){
    console.log("El alumno va a rendir a diciembre")
    let alumnosrendir = [estudiante1]
}else{
    if(promedio>=6){
        console.log("el alumno no va a rendir a diciembre")
    }
}
console.log(alumnosrendir)
