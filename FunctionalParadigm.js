//Main call for the use of the sumar function.
function letTest_adding() {
    let x = window.prompt("Please enter a number of your prefer chose: ", 0);
    x = parseInt(x);
    let y = window.prompt("Please enter a number that you would like to add to your first chosen one", 0);
    y = parseInt(y);
    const sumando = sumar(x);
    window.alert("El Resultado de la suma de ambos numeros es: " + sumando(y));
};

//Main call for the use of the factorial function.
function letTest_factorial() {
    let x = window.prompt("Please enter a natural number of your preferences: ", 0);
    x = parseInt(x);
    let y = window.prompt("Give a number to scale the result of the factorial ", 0);
    y = parseInt(y);
    const facto = procesar(x);
    window.alert("El resultado de calcula el factorial del numero es: " + facto(y));

};

//Function that comply with the requierements for a functional JavaScript.
const sumar = a => {
    return b => {

        return a + b;
    }
};

//Function for the factorial of a number.
//const factorial = n => (n===1 || n===0) ? 1: factorial(n-1)*n;
const factorial = n => {
    //The base case in the recursive aproach of this function
    if (n === 1 || n === 0) {
        return 1;
    } else {
        return factorial(n - 1) * n;
    }
};

const procesar = n => {
    const k = factorial(n);
    return j => {
        return k * j;
    }
}