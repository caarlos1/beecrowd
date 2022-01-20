const lines = [5.0, 7.1];

const A = lines[0];
const B = lines[1];

const weightA = 3.5;
const weightB = 7.5;

const calc = (A * weightA + B * weightB) / (weightA + weightB);

console.log(`MEDIA = ${calc.toFixed(5)}`);
