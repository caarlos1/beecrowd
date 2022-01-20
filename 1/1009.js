let lines = ["JOAO", "500.00", "1230.30"];
lines = ["PEDRO", "700.00", "0.00"];
lines = ["MANGOJATA", "1700.00", "1230.50"];

const salary = parseFloat(lines[1]);
const sales = parseFloat(lines[2]);
const commission = 0.15;
const total = salary + sales * commission;

console.log(`TOTAL = R$ ${total.toFixed(2)}`);
