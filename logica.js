const botonesNumericos = document.querySelectorAll('.calculatorBox-numberKeysBox-keys');
const screen = document.getElementById("calculatorBox-screen");
const keyEliminar = document.getElementById("boton-eliminar");
const keyIgual = document.getElementById("boton-igual")

const keySuma = document.getElementById("keySuma");

botonesNumericos.forEach((boton) => {
    boton.addEventListener('click', function () {
        screen.value += boton.textContent;
    });
});

keyEliminar.addEventListener('click', () => {
    screen.value = '';
})

keySuma.addEventListener('click', () => {
    let numero1 = parseInt(screen.value);
    screen.value = '';

    function sumar() {
        let numero2 = parseInt(screen.value);
        screen.value = numero1 + numero2;
        keyIgual.removeEventListener('click',sumar)
    }
    keyIgual.addEventListener('click', sumar)
})