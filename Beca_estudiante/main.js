let = edad = parseInt(prompt("Que edad tienes?"))  // declaracion de las variables
let = casa = prompt("en que ciudad resides?")
let casaMinuscula = casa.toLowerCase()
let = familiaNumerosa = prompt("perteneces a una familia numerosa? (Si/No)")
let familiaMinuscula = familiaNumerosa.toLowerCase()
let = genious = prompt("eres un/una geni@ de la programación? (Si/No)")
let geniousMinusculo = genious.toLowerCase()

//comprobación de las variables

if ((edad >= 18 &&  casaMinuscula == "barcelona") || (edad > 30 && familiaMinuscula == "si") || ( 12 < edad < 18 && geniousMinusculo == "si")) {
    document.write("<h1>Bienvenido! puedes optar a la beca</h1>")
} 
// otra forma:
   // else if (edad > 30 && familiaMinuscula == "si") {
   // document.write("<h1>Bienvenido abuelete! puedes optar a la beca</h1>")} 
   // else if ( 12 < edad < 18 && geniousMinusculo == "si"){
   // document.write("<h1>Eso tenemos que verlo geniesito, Bienvenido, optas por la beca ")} 
   else {
    document.write("<h1>Lo sentimos pero nos estas haciendo perder el tiempo<h1>")
}