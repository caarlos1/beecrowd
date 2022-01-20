let lines = [25, 100, 5.5];
lines = [1, 200, 20.5];
lines = [6, 145, 15.55];

const number = lines[0];
const hours = lines[1];
const value = lines[2];

const salary = hours * value;

console.log(`NUMBER = ${number}`);
console.log(`SALARY = U$ ${salary.toFixed(2)}`);
