let given = 9;
let i = 1;
let count = 0;

for (i = 1; i <= given; i++) {
    if (given % i == 0)
        count++;
}

if (count == 2) {
    console.log(given + ": Prime Number");
}

console.log(given + ": not a Prime Number");