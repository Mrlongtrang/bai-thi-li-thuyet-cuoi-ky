const btn= document.getElementById('btn')

const lowerNumber = parseInt(prompt('Enter lower number: '));
const higherNumber = parseInt(prompt('Enter higher number: '));

console.log(`Số nguyên tố của ${lowerNumber} và ${higherNumber} là:`);
// dung console log de thay so nguyen to

for (let i = lowerNumber; i <= higherNumber; i++) {
    let flag = 0;

    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            flag = 1;
            break;
        }
    }


    if (i > 1 && flag == 0) {
        console.log(i);
    }
}