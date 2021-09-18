process.argv.forEach((val, index) => {
    console.log(`${index}: ${val}`);
});

let first_value = process.argv[2]; // This should be a number
let second_value = process.argv[4]; // This should be a number
let operator = process.argv[3]; // This should be an operator
console.log(first_value, operator, second_value);

switch (operator) {
    case '+':
        result = first_value + second_value
        console.log(result);
        break;
    case '-':
        result = first_value - second_value
        console.log(result);
        break;
    case '*':
        result = first_value * second_value
        console.log(result);
        break;
    case '/':
        result = first_value / second_value
        console.log(result);
        break;
    case '%':
        result = first_value / second_value
        console.log(result);
        break;

    default:
        console.log('Comando no reconocido');

}