let lines = ["1.0 7.0", "5.0 9.0"];
lines = ["-2.5 0.4", "12.1 7.3"];
lines = ["2.5 -0.4", "-12.2 7.0"];

const stringToFloat = (string) => string.split(" ").map((n) => parseFloat(n));

const l1 = stringToFloat(lines[0]);
const l2 = stringToFloat(lines[1]);

const distance = Math.sqrt((l2[0] - l1[0]) ** 2 + (l2[1] - l1[1]) ** 2);

console.log(`${distance.toFixed(4)}`);
