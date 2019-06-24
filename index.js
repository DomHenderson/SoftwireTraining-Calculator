const readline = require('readline-sync');
const userInput = require('./userInput');
const arithmetic = require('./arithmetic');
const vowelCounting = require('./vowelCounting');

function welcome () {
    console.log('Welcome to the calculator!');
}

welcome();
while ( true ) {
    const calculationMode = userInput.getCalculationMode();
    if ( calculationMode == userInput.ARITHMETIC_MODE ) {
        arithmetic.performOneArithmeticCalculation();
    } else if ( calculationMode == userInput.VOWEL_COUNTING_MODE ) {
        vowelCounting.performOneVowelCountingCalculation();
    }
}