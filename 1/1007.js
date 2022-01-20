let lines = [5, 6, 7, 8];
lines = [0, 0, 7, 8];
lines = [5, 6, -7, 8];

const A = lines[0];
const B = lines[1];
const C = lines[2];
const D = lines[3];

const calc = A * B - C * D;

console.log(`DIFERENCA = ${calc}`);
