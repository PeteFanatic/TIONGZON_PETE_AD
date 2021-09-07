function spacing(val) {
    let spacing = '';
    let pad = 4 - val;
    while (pad-- > 0)
        spacing += ' ';
    return spacing;
}
let result = '';

for (let i = 0; i < 11; i++) {

    for (let j = 0; j < 11; j++) {

        if (i > 0 && j > 0) {
            result += spacing((i * j + '').length) + i * j;
        }
    }
    result += '\n'
}
console.log(result);