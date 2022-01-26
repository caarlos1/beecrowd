let lines = [
    "5",
    "1 2 3 4 5",
    "3 1 2 5 4",
    "5",
    "3 1 2 5 4",
    "1 2 3 4 5",
    "5",
    "3 1 2 5 4",
    "5 3 2 1 4",
    "17",
    "17 11 16 2 13 4 9 6 5 1 7 8 10 14 15 3 12",
    "16 5 15 11 12 4 3 9 14 6 2 17 1 8 7 13 10",
];

let cont = 0;

while (cont < lines.length) {
    if (!lines[cont] && !lines[cont + 1] && !lines[cont + 2]) break;

    let largada = lines[cont + 1].split(" ");
    let chegada = lines[cont + 2].split(" ");

    let chegadaEntries = [...chegada].entries();

    let ul = 0;

    for (const l of largada) {
        for (let [ci, c] of chegadaEntries) {
            if (l == c) {
                chegada.splice(ci, 1);
                chegadaEntries = [...chegada].entries();
                break;
            } else {
                ul++;
            }
        }
    }
    console.log(ul);
    cont += 3;
}
