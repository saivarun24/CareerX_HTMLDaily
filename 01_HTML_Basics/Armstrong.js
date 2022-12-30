let sum = 0;
const number = prompt('Enter a positive integer: ');


let temp = number;
while (temp > 0) {
    // finding the one's digit
    let remainder = temp % 10;

    sum += remainder * remainder * remainder;

