let sum = 0;
for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 2; j++) {
        sum = sum + i + j;
        break;
    }
}
console.log(sum);