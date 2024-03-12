alert ("coche no arranca")
let vivesCerca = prompt("vives cerca? Si/No?")
let vivesCercaMin = vivesCerca.toLowerCase()

let caminar = prompt("quieres caminar? Si/No?")
let caminarMin = caminar.toLowerCase()

if (vivesCercaMin == "si" && caminar == "si") {
    document.write("<h1>Mejor nos vamos andando y ya lo arreglaremos mañana</h1>")
} else {
    document.write("<h1>Hagamos mas comprobaciones...</h1>")
};
let gasolina = prompt("tienes gasolina? Si/No?")
let gasolinaMin = gasolina.toLowerCase()

let dinero = prompt("Tienes dinero? Si/No?")
let dineroMin = dinero.toLowerCase()

if ( gasolinaMin == "no" && dineroMin == "si") { 
    document.write("<h1>Poner Gasolina</h1>") 
} else if (gasolina == "no" && dineroMin == "no"){
    document.write("<h1>vas en metro</h1>")
};


