let lines = ["12 1 5.30", "16 2 5.10"];
lines = ["13 2 15.30", "161 4 5.20"];
lines = ["1 1 15.10", "2 1 15.10"];

const p1 = lines[0].split(" ");
const p2 = lines[1].split(" ");

const total = (p1[1] * p1[2]) + (p2[1] * p2[2]);

console.log(`VALOR A PAGAR: R$ ${total.toFixed(2)}`);
