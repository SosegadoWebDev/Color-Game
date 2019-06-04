var squares = document.querySelectorAll(".square")
var clickStart = document.querySelector("#message")
var colorSelectedToWin = document.querySelector("#colorSelected")
var message = document.querySelector("h2")

function randomColor() { //genera colores para luego darselos a un array
    var r = Math.floor(Math.random() * 255)
    var g = Math.floor(Math.random() * 255)
    var b = Math.floor(Math.random() * 255)
    return "rgb(" + r + ", " + g + ", " + b + ")"
}
function generateRandomColor(num) { //Los colores generados van a ser dados a este array
    var arreglos = []
    for (var i = 0; i < num; i++) {
        arreglos[i] = randomColor()
    }
    return arreglos
}
function selectedColor(arrColor) { //Elige color del array y lo asigna como el color elegido
    var random = Math.floor(Math.random() * arrColor.length)
    return arrColor[random]
}
function changeColors(color) { //se usara para cambiar todos los colores de los divs al mismo color
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color
    }
}
clickStart.addEventListener("click", function () {
    //console.log("funciona")
    clickStart.textContent = " "
    message.textContent = "Vamos!"
    var colorsBackground = generateRandomColor(6)
    var colorWinner = selectedColor(colorsBackground)
    colorSelectedToWin.textContent = colorWinner
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colorsBackground[i]
        squares[i].addEventListener("click", function () {
            //console.log("funciona")
            var clickedColor = this.style.backgroundColor
            if (clickedColor === colorWinner) {
                message.textContent = "Correcto! click para volver a jugar"
                message.style.cursor = "pointer"
                for (var i = 0; i < document.querySelectorAll(".font-text").length; i++) {
                    document.querySelectorAll(".font-text")[i].style.textShadow = "0px 0px 5px " + colorWinner
                }
                changeColors(colorWinner)
                message.addEventListener("click", function () {
                    location.reload();
                })
            } else {
                this.style.backgroundColor = "transparent"
                message.textContent = "Intenta de nuevo!"
            }
        })
    }
})