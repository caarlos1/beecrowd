let lines = ["7 14 106"];
lines = ["217 14 6"];

const number = lines[0].split(" ").map((n) => parseInt(n));
let bigger = 0;

number.forEach((n) => {
    if (n > bigger) {
        bigger = n;
    }
});

console.log(`${bigger} eh o maior`);
