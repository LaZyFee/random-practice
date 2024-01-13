// write a funtion called odd_even() which takes an integer value and tells whether this value is even or odd. you need to do it in 4 ways:
// >has return+has parameter
// >no return+has parameter




function odd_even_with_return_and_parameter(number) {
    return number % 2 === 0 ? 'Even' : 'Odd';
}

function odd_even_no_return_with_parameter(number) {
    if (number % 2 === 0) {
        console.log('Even');
    } else {
        console.log('Odd');
    }
}



function odd_even_with_return_no_parameter() {

    const number = 10;
    return number % 2 === 0 ? 'Even' : 'Odd';
}



function odd_even_no_return_no_parameter() {

    const number = 21;

    if (number % 2 === 0) {
        console.log('Even');
    } else {
        console.log('Odd');
    }
}

const numberToCheck = 7;


console.log(odd_even_with_return_and_parameter(numberToCheck));
odd_even_no_return_with_parameter(numberToCheck);
console.log(odd_even_with_return_no_parameter());
odd_even_no_return_no_parameter();
