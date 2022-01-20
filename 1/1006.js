// Desenvolvi dessa forma, mas por algum motivo o compilador
// não conseguiu compilar, mesmo funcionando ao executar.

/** 
// const lines = () => {
//     const input = require("fs").readFileSync("/dev/stdin", "utf8");
//     return input.split("\n");
// };

const lines = () => ["5.0", "6.0", "7.0"];
// const lines = () => [5.0, 10.0, 10.0];
// const lines = () => [ 10.0, 10 .0, 5.0];

const calc = () => {
    const notes = [...lines()].map((line) => parseFloat(line));
    const weights = [2, 3, 5];

    let num = 0;
    let den = 0;

    notes.forEach((note, i) => {
        const weight = weights[i];
        num += note * weight;
        den += weight;
    });

    return (num / den).toFixed(1);
};

console.log(`MEDIA = ${calc()}`);
*/

// O engraçado é que assim foi...

const lines = ["5.0", "6.0", "7.0"];
const w = [2, 3, 5];

const A = lines[0];
const B = lines[1];
const C = lines[2];

const calc = (A * w[0] + B * w[1] + C * w[2]) / (w[0] + w[1] + w[2]);

console.log(`MEDIA = ${calc.toFixed(1)}`);
