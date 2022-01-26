let lines = ["500", "35.0"];
lines = ["2254", "124.4"];
lines = ["4554", "464.6"];

const km = parseFloat(lines[0]);
const l = parseFloat(lines[1]);

let kmL = km / l;

console.log(`${kmL.toFixed(3)} km/l`);
