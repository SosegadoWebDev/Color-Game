var squares = document.querySelectorAll(".square")
var clickStart = document.querySelector("#message")
var colorSelectedToWin = document.querySelector("#colorSelected")

function randomColor(){ //genera colores para luego darselos a un array
    var r = Math.floor(Math.random()*255) 
    var g = Math.floor(Math.random()*255) 
    var b = Math.floor(Math.random()*255)
    return "rgb("+r+", "+g+", "+b+")" 
}
function generateRandomColor(num){ //Los colores generados van a ser dados a este array
    var arreglos = []
    for (var i=0; i<num; i++){
        arreglos[i] = randomColor()
    }
    return arreglos //regresa y guarda el valor de los recorridos 
}
function selectedColor (arrColor){ //Elige color del array y lo asigna como el color elegido
   var random = Math.floor(Math.random()*arrColor.length)
   return arrColor[random]
}
clickStart.addEventListener("click", function(){
    //console.log("funciona")
    clickStart.textContent = "nuevos colores"
    var colorsBackground = generateRandomColor(6)
    var colorWinner = selectedColor(colorsBackground)
    colorSelectedToWin.textContent = colorWinner
    for(var i = 0; i < squares.length; i++ ) {
        squares[i].style.backgroundColor = colorsBackground[i]
    }
})









/*
var color = generateRandomColor(6)
var colores = document.querySelectorAll(".square")
var reset = document.querySelector("#reset")
    reset.addEventListener("click", function(){
		refresh()
    })
for (var i = 0; i < colores.length; i++) {
    colores[i].style.backgroundColor = color[i]
    colores[i].addEventListener("click", function(){
        var clickedColor = this.style.backgroundColor
        if (clickedColor === pickedColor){
            document.querySelector("#message").innerHTML = "Correct!"
            document.querySelector("h1").style.backgroundColor = clickedColor
            changeColors(pickedColor)
        } else {
            this.style.backgroundColor = "#232323"
            document.querySelector("#message").innerHTML = "Try again!"
        }
    })
}
var pickedColor = pickColor() //guarda el color en una variable para luego mostrarla
var span = document.querySelector("#colorDisplay").innerHTML = pickedColor
function changeColors(unColor){ //se usara para cambiar todos los colores de los divs al mismo color "unColor"
    for (var i = 0; i < colores.length; i++){
        colores[i].style.backgroundColor = unColor
    }
}
function refresh (){ //refresca el contenido de la pagina
	color = generateRandomColor(6)
	pickedColor = pickColor()
	document.querySelector("#colorDisplay").innerHTML = pickedColor
	document.querySelector("h1").style.backgroundColor = "#232323"
	document.querySelector("#message").innerHTML = ""
	for (var i = 0; i < colores.length; i++) {
		colores[i].style.backgroundColor = color[i]
}}
function pickColor (){ //Elige color del array y lo asigna como el color elegido para el "correct!"
   var random = Math.floor(Math.random()*color.length)
   return color[random]
}
function randomColor(){ //genera colores para luego darselos a un array
    var r = Math.floor(Math.random()*255) 
    var g = Math.floor(Math.random()*255) 
    var b = Math.floor(Math.random()*255)
    return "rgb("+r+", "+g+", "+b+")" 
}
function generateRandomColor(num){ //Los colores generados van a ser dados a este array
    var arreglos = []
    for (var i=0; i<num; i++){
        arreglos[i] = randomColor()
    }
    return arreglos //regresa y guarda el valor de los recorridos 
}
*/