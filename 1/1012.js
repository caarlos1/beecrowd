let lines = ["3.0 4.0 5.2"];
lines = ["12.7 10.4 15.2"];

const number = lines[0].split(" ");
const A = parseFloat(number[0]);
const B = parseFloat(number[1]);
const C = parseFloat(number[2]);

const pi = 3.14159;

const triangulo = (A * C) / 2;
const circulo = pi * C ** 2;
const trapezio = ((A + B) * C) / 2;
const quadrado = B * B;
const retangulo = A * B;

console.log(`TRIANGULO: ${triangulo.toFixed(3)}`);
console.log(`CIRCULO: ${circulo.toFixed(3)}`);
console.log(`TRAPEZIO: ${trapezio.toFixed(3)}`);
console.log(`QUADRADO: ${quadrado.toFixed(3)}`);
console.log(`RETANGULO: ${retangulo.toFixed(3)}`);
