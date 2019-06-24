const readline = require('readline-sync');

exports.ARITHMETIC_MODE = 1;
exports.VOWEL_COUNTING_MODE = 2;

exports.getCalculationMode = function () {
    console.log('Which calculator mode do you want?');
    console.log(`${this.ARITHMETIC_MODE}: arithmetic mode`);
    console.log(`${this.VOWEL_COUNTING_MODE}: vowel counting mode`);
    var mode = readline.prompt();
    while ( mode != this.ARITHMETIC_MODE && mode != this.VOWEL_COUNTING_MODE ) {
        console.log(`${mode} is not a valid mode`);
        console.log('Which calculator mode do you want?');
        console.log(`${this.ARITHMETIC_MODE}: arithmetic mode`);
        console.log(`${this.VOWEL_COUNTING_MODE}: vowel counting mode`);
        var mode = readline.prompt();
    }
    return mode;
}

exports.requestValidNumber = function ( message ) {
    console.log ( message );
    var num = readline.prompt();
    while ( isNaN ( +num ) ) {
        console.log(`${num} is not a valid number`);
        console.log(message);
        num = readline.prompt();
    }
    return Number(num);
}

exports.requestValidOperator = function ( validOperators ) {
    console.log('Enter the operator');
    var op = readline.prompt();
    while ( !validOperators.includes(op)) {
        console.log(`Operator \'${op}\' not recognised`);
        console.log(`Valid operators are \'${ validOperators.join('\', \'') } \'` );
        console.log('Enter the operator');
        op = readline.prompt();
    }
    return op;
}