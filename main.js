/* Elementos HTML */
let square = document.querySelectorAll(".square")
let colorDisplay = document.getElementById("colorDisplay")
let title = document.querySelector("h1")
let message = document.getElementById("message")
let resetButton = document.getElementById("reset")
let easyButton = document.getElementById("easy")
let hardButton = document.getElementById("hard")
let selected = document.getElementsByClassName("selected")
let divButtons = document.getElementById("stripe")
let modeButtons =  document.getElementsByClassName("mode")

/* Variables */
let numberOfSquares = 6;
let colors = generateRandomColors(numberOfSquares);
let pickedColor = pickColor()

//Le asignamos al span el texto del color ganador
colorDisplay.innerHTML = pickedColor

init()
/* le agregamos la clase selected al boton clickeador */
/* function modeToPlay(modeButtons) {
    for (let i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener('click', function() {
            modeButtons[0].classList.remove('selected');
            modeButtons[1].classList.remove('selected');
            this.classList.add('selected');
            numberOfSquares = this.textContent == 'EASY' ? 3 : 6
        });
        
    }
} */
function init() {
    paintSquares()
    modeGame()
    resetGame()

}

//Reseteamos el juego
function resetGame() {

    resetButton.addEventListener("click", function () {
        resetButton.textContent = "New Colors"
        colors = generateRandomColors(numberOfSquares)
        pickedColor = pickColor()
        for (let i = 0; i < square.length; i++) {
            square[i].style.backgroundColor = colors[i];
            if (pickedColor !== colors[i]) {

            }
        }
        title.style.backgroundColor = "rgb(255, 57, 125)";
        colorDisplay.innerHTML = pickedColor
        message.textContent = ""
        message.style.background = "rgb(245, 31, 106)"
    })
}



/* Botones easy & hard */

function modeGame(){
    easyButton.addEventListener("click", function () {
        easyButton.classList.add("selected")
        hardButton.classList.remove("selected")
        numberOfSquares = 3;
        colors = generateRandomColors(numberOfSquares)
        pickedColor = pickColor()
        for (let i = 0; i < square.length; i++) {
            if (colors[i] != undefined) {
                square[i].style.backgroundColor = colors[i];
                square[i].style.display = 'block';
            } else {
                square[i].style.display = "none";
                square[i].style.backgroundColor = null;

            }
        
        }
    })
    hardButton.addEventListener("click", function () {
        hardButton.classList.add("selected")
        easyButton.classList.remove("selected")
        numberOfSquares = 6;
        colors = generateRandomColors(numberOfSquares)
        pickedColor = pickColor()
        for (let i = 0; i < square.length; i++) {
            square[i].style.display = "block";
            square[i].style.backgroundColor = colors[i];
        }
    })

}



//Recorremos los div, square y le asignamos un color diferente
//Verificamos el color del div clickeado y le cambiamos el color no coincide
//Si coincide cambiamos el fondo del titulo y le damos un mensaje de acierto

function paintSquares(){
    for (let i = 0; i < square.length; i++) {
        square[i].style.backgroundColor = colors[i]
        square[i].addEventListener("click", function(){
            var clickedColor = square[i].style.backgroundColor;
            if(clickedColor == pickedColor){
                message.innerHTML = "Correct"
                message.style.backgroundColor = "green"
                title.style.backgroundColor = clickedColor;
                changeColors(clickedColor);
                resetButton.textContent = "Play Again?"
                
                
            } else {
                this.style.backgroundColor = "#4b4a4a"
                message.textContent = "Try again"
                message.style. backgroundColor = "red"
            
            } 
        }) 
    }
}
//Funcion para cambiar todos los div al color del acierto
function changeColors(color) {
    for (let i = 0; i < square.length; i++) {
        square[i].style.backgroundColor = color;
        
    }
}

/* Elegimos del arreglo un color random para que sea el ganador */
function pickColor() {
    let numRandom
    if(hardButton.classList.contains("selected")) {
        numRandom = Math.trunc(Math.random() * (6 - 0) + 0)
    } else {

        numRandom = Math.trunc(Math.random() * (3 - 0) + 0)
    }
    return colors[numRandom]
}

/* Generamos un RGB random*/
function randomColor() {
    let r = Math.trunc(Math.random() * (256 - 0) + 0)
    let g = Math.trunc(Math.random() * (256 - 0) + 0)
    let b = Math.trunc(Math.random() * (256 - 0) + 0)
    return "rgb(" + r + ", " + g + ", " + b + ")" 
}

//Generamos colores randoms para el array de colores
function generateRandomColors(num) {
    var arr = new Array(num); 
    for (let i = 0; i < arr.length; i++) {
        arr[i] = randomColor();
    }
    return arr
}




