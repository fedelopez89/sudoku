/* --------- */
/* Inicio JS */
/* --------- */

console.log('Load page...');

/* ------------------------ */
/* Declaracion de Variables */
/* ------------------------ */

/* Constantes  */
const colorCuadradoFijo = "yellowgreen"
const colorResaltador = "khaki"
const colorInputFijo = "black"
const numerosPosiblesEnCuadrado = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const fila1 = [1, 2, 3, 10, 11, 12, 19, 20, 21]
const fila2 = [4, 5, 6, 13, 14, 15, 22, 23, 24]
const fila3 = [7, 8, 9, 16, 17, 18, 25, 26, 27]
const fila4 = [28, 29, 30, 37, 38, 39, 46, 47, 48]
const fila5 = [31, 32, 33, 40, 41, 42, 49, 50, 51]
const fila6 = [34, 35, 36, 43, 44, 45, 52, 53, 54]
const fila7 = [55, 56, 57, 64, 65, 66, 73, 74, 75]
const fila8 = [58, 59, 60, 67, 68, 69, 76, 77, 78]
const fila9 = [61, 62, 63, 70, 71, 72, 79, 80, 81]

const col1 = [1, 4, 7, 28, 31, 34, 55, 58, 61]
const col2 = [2, 5, 8, 29, 32, 35, 56, 59, 62]
const col3 = [3, 6, 9, 30, 33, 36, 57, 60, 63]
const col4 = [10, 13, 16, 37, 40, 43, 64, 67, 70]
const col5 = [11, 14, 17, 38, 41, 44, 65, 68, 71]
const col6 = [12, 15, 18, 39, 42, 45, 66, 69, 72]
const col7 = [19, 22, 25, 46, 49, 52, 73, 76, 79]
const col8 = [20, 23, 26, 47, 50, 53, 74, 77, 80]
const col9 = [21, 24, 27, 48, 51, 54, 75, 78, 81]

const filas = [fila1, fila2, fila3, fila4, fila5, fila6, fila7, fila8, fila9]
const col = [col1, col2, col3, col4, col5, col6, col7, col8, col9]

/* Variables let  */
let datoOK = false
let sumacuadrado = 45
let sumacuadrado1 = 45
let sumacuadrado2 = 45
let sumacuadrado3 = 45
let sumacuadrado4 = 45
let sumacuadrado5 = 45
let sumacuadrado6 = 45
let sumacuadrado7 = 45
let sumacuadrado8 = 45
let sumacuadrado9 = 45

let numerosPosiblesEnCuadrado1 = new Array(9)
let numerosPosiblesEnCuadrado2 = new Array(9)
let numerosPosiblesEnCuadrado3 = new Array(9)
let numerosPosiblesEnCuadrado4 = new Array(9)
let numerosPosiblesEnCuadrado5 = new Array(9)
let numerosPosiblesEnCuadrado6 = new Array(9)
let numerosPosiblesEnCuadrado7 = new Array(9)
let numerosPosiblesEnCuadrado8 = new Array(9)
let numerosPosiblesEnCuadrado9 = new Array(9)
let numerosPosiblesEnCuadrado10 = new Array(9)
let numerosPosibles = []

let numeroFila
let numeroColumna


/* ------- */
/* Inicio  */
/* ------- */
let resolucion = document.getElementById("resolucion")
let todosLosInput = document.querySelectorAll("input")

/* ------- */
/* Proceso */
/* ------- */
obtenerNumerosDeUnCuadradoInput(todosLosInput)
resaltar();
noresaltar();
controlarInput();
botonCargarSudoku();
botonResolverCuadrado();
botonLimpiarSudoku();


/* ------------------------ */
/* Declaracion de funciones */
/* ------------------------ */

function obtenerNumerosDeUnCuadradoInput(array) {
    return auxiliar = Array.from(todosLosInput).map(function (x) { if (isNaN(parseInt(x.value))) { return 0 } else { return parseInt(x.value) } });
}

function resaltar() {
    todosLosInput.forEach(input => input.addEventListener("focus", e => {
        console.log("resaltar")
        e.preventDefault();
        pintoColumna(parseInt(input.id), colorResaltador)
        pintoFila(parseInt(input.id), colorResaltador)
    })
    )
}

function noresaltar() {
    todosLosInput.forEach(input => input.addEventListener("blur", e => {
        console.log("noresaltar")

        e.preventDefault();
        let color = "lightgrey"
        pintoColumna(parseInt(input.id), color)
        pintoFila(parseInt(input.id), color)
    })
    )
}

function controlarInput() {
    todosLosInput.forEach(input => input.addEventListener("input", e => {
        console.log("input")

        e.preventDefault();

        datoOK = false

        // Evalua a que cuadrado pertenece
        let numeroCuadrado = input.id
        if (numeroCuadrado <= 9) {
            numeroCuadrado = 1
            numerosPosibles = numerosPosiblesEnCuadrado1;
            sumacuadrado = sumacuadrado1;
        } else if (numeroCuadrado <= 18) {
            numeroCuadrado = 2;
            numerosPosibles = numerosPosiblesEnCuadrado2;
            sumacuadrado = sumacuadrado2;
        } else if (numeroCuadrado <= 27) {
            numeroCuadrado = 3;
            numerosPosibles = numerosPosiblesEnCuadrado3;
            sumacuadrado = sumacuadrado3;
        } else if (numeroCuadrado <= 36) {
            numeroCuadrado = 4;
            numerosPosibles = numerosPosiblesEnCuadrado4;
            sumacuadrado = sumacuadrado4;
        } else if (numeroCuadrado <= 45) {
            numeroCuadrado = 5;
            numerosPosibles = numerosPosiblesEnCuadrado5;
            sumacuadrado = sumacuadrado5;
        } else if (numeroCuadrado <= 54) {
            numeroCuadrado = 6;
            numerosPosibles = numerosPosiblesEnCuadrado6;
            sumacuadrado = sumacuadrado6;
        } else if (numeroCuadrado <= 63) {
            numeroCuadrado = 7;
            numerosPosibles = numerosPosiblesEnCuadrado7;
            sumacuadrado = sumacuadrado7;
        } else if (numeroCuadrado <= 72) {
            numeroCuadrado = 8;
            numerosPosibles = numerosPosiblesEnCuadrado8;
            sumacuadrado = sumacuadrado8;
        } else if (numeroCuadrado <= 81) {
            numeroCuadrado = 9;
            numerosPosibles = numerosPosiblesEnCuadrado9;
            sumacuadrado = sumacuadrado9;
        }

        let cuadradoID = "cuadrado" + numeroCuadrado
        let arrayCuadrado = Array.from(document.getElementById(cuadradoID).getElementsByTagName("input"))

        validoDato(arrayCuadrado, input, numerosPosibles, numeroCuadrado, sumacuadrado)

    }
    ));
}

function pintoColumna(numeroInput, color) {
    let columnaIncludes = col.filter(x => x.includes(numeroInput))[0]
    columnaIncludes.forEach(function (elemento) {
        if (!((document.getElementById(elemento).style.backgroundColor) == colorCuadradoFijo)) {
            document.getElementById(elemento).style.backgroundColor = color
        }
    })
}


function pintoFila(numeroInput, color) {
    let filaIncludes = filas.filter(x => x.includes(numeroInput))[0]
    filaIncludes.forEach(function (elemento) {
        if (!((document.getElementById(elemento).style.backgroundColor) == colorCuadradoFijo)) {
            document.getElementById(elemento).style.backgroundColor = color
        }
    })
}

function validoDato(array, input, numerosPosibles, numeroCuadrado, sumaCuadrado) {


    let idStartCuadrado = (numeroCuadrado - 1) * 9 + 1
    console.log("idStartCuadrado " + idStartCuadrado)
    let posicionInputEnCuadrado = parseInt(input.id) - idStartCuadrado
    console.log("posicionInputEnCuadrado " + posicionInputEnCuadrado)

    if (input.value == '') {
        // Borra un dato existente.
        // Quita de la lista de numeropendientes
        // Suma al a region del cuadrado

        // Recuperar Valor
        let inputAnterior = numerosPosibles[posicionInputEnCuadrado]
        console.log("inputAnterior " + inputAnterior)

        // Sumar valor recuperado
        sumacuadrado += inputAnterior
        // FGL
        console.log("sumacuadrado: " + sumacuadrado)

        // Eliminar valor del Array
        numerosPosibles.splice(posicionInputEnCuadrado, 1, NaN)

    } else if (!numerosPosiblesEnCuadrado.includes(parseInt(input.value))) {

        // Valido que el dato introducido sea válido
        alert("ERROR: Dato inválido")

    } else {

        // Valido que el dato introducido no esté cargado en el cuadrado de la región

        if (numerosPosibles.includes(input.value)) {
            input.value = ""
            alert("ERROR: Dato ya cargado en region")

        } else {

            // Valido que sobre la columna que se introdujo el dato no existe el mismo valor

            let columnaIncludes = col.filter(x => x.includes(parseInt(input.id)))[0].map(x => parseInt(document.getElementById(parseInt(x)).value))
            let columnaFiltro = columnaIncludes.filter(function (x) {
                return x == input.value
            })
            if (columnaFiltro.length > 1) {
                input.value = ""
                alert("ERROR: Dato ya cargado en misma columna")

            } else {

                // Valido que sobre la fila que se introdujo el dato no existe el mismo valor

                let filaIncludes = filas.filter(x => x.includes(parseInt(input.id)))[0].map(x => parseInt(document.getElementById(parseInt(x)).value))
                let filaFiltro = filaIncludes.filter(function (x) {
                    return x == input.value
                })
                if (filaFiltro.length > 1) {
                    input.value = ""
                    alert("ERROR: Dato ya cargado en misma fila")
                } else {
                    numerosPosibles.splice(posicionInputEnCuadrado, 1, input.value)
                    sumacuadrado = sumacuadrado - parseInt(input.value)
                    // FGL
                    console.log("sumacuadrado: " + sumacuadrado + " input.value " + input.value)
                    datoOK = true
                }
            }
        }
    }
}

function botonResolverCuadrado() {
    resolucion.addEventListener("click", e => {
        console.log("click")

        console.log("botonResolverCuadrado")
        e.preventDefault();
        resolverCuadrado(todosLosInput, sumacuadrado)
    }
    )
}

function botonCargarSudoku() {
    cargar.addEventListener("click", e => {
        console.log("botonCargarSudoku")
        e.preventDefault()
        cargarSudoku(todosLosInput)
        resolucion.style.display = "inline"
        cargar.hidden = true
    }
    )
}

function botonLimpiarSudoku() {
    limpiar.addEventListener("click", e => {
        console.log("botonLimpiarSudoku")
        e.preventDefault()
        limpiarCuadrados(todosLosInput)
        resolucion.style.display = "none"
        cargar.hidden = false
    })
}

function ingresaDato(input) {
    cambioFondo(input);
}

function cambioFondo(input) {
    if (input.value > 0) {
        pintoColumna(parseInt(input.value), "lightgrey");
        pintoFila(parseInt(input.value), "lightgrey");
        input.style.color = "black";
    } else {
        input.style.backgroundColor = "lightgrey";
        input.style.color = "black";
    }
}

function resolverCuadrado(arrayCuadrado, sumaCuadrado) {
    console.log("arrayCuadrado:" + arrayCuadrado)
    let arrayCuadradoAux = Array.from(arrayCuadrado)
    let cantidadDeCeros = arrayCuadradoAux.filter(input =>
        input.value == 0);
    console.log("cantidadDeCeros:" + cantidadDeCeros.length)
    if (cantidadDeCeros.length > 1) {
        alert("Faltan cargar datos")
    } else {
        console.log("se puede resolver")
        arrayCuadradoAux.find(input => (input.value == 0)).value = sumacuadrado
    }
}

function limpiarCuadrados(todosLosInput) {
    todosLosInput.forEach
        (input => { input.value = ""; input.style.backgroundColor = "lightgrey"; input.disabled = false})
    vaciarNumeroPosiblesEnCuadrado();
}

function cargarSudoku() {
    console.log("cargarSudoku")
    todosLosInput.forEach
        (input => {
            if (input.value > 0) {
                input.style.backgroundColor = colorCuadradoFijo;
                input.style.color = colorInputFijo;
                input.disabled = 'true';
            }
        })
}

function vaciarNumeroPosiblesEnCuadrado() {
    numerosPosiblesEnCuadrado1 = new Array(9)
    numerosPosiblesEnCuadrado2 = new Array(9)
    numerosPosiblesEnCuadrado3 = new Array(9)
    numerosPosiblesEnCuadrado4 = new Array(9)
    numerosPosiblesEnCuadrado5 = new Array(9)
    numerosPosiblesEnCuadrado6 = new Array(9)
    numerosPosiblesEnCuadrado7 = new Array(9)
    numerosPosiblesEnCuadrado8 = new Array(9)
    numerosPosiblesEnCuadrado9 = new Array(9)
    numerosPosiblesEnCuadrado10 = new Array(9)
    numerosPosibles = []
}

function resetearSumaEnCuadrado() {
    datoOK = false
    sumacuadrado = 45
    sumacuadrado1 = 45
    sumacuadrado2 = 45
    sumacuadrado3 = 45
    sumacuadrado4 = 45
    sumacuadrado5 = 45
    sumacuadrado6 = 45
    sumacuadrado7 = 45
    sumacuadrado8 = 45
    sumacuadrado9 = 45
}