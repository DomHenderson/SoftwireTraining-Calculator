const readline = require('readline-sync');

const ARITHMETIC_MODE = 1;
const VOWEL_COUNTING_MODE = 2;

function welcome () {
    console.log('Welcome to the calculator!');
}

function getOperator ( validOperators ) {
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

function requestValidNumber ( message ) {
    console.log ( message );
    var num = readline.prompt();
    while ( isNaN ( +num ) ) {
        console.log(`${num} is not a valid number`);
        console.log(message);
        num = readline.prompt();
    }
    return Number(num);
}

function getArgCount ( op ) {
    return requestValidNumber(`How many numbers do you want to ${op} ?`);
}

function getOperand ( index ) {
    return requestValidNumber(`Please enter number ${index}:` );
}

function getAllOperands ( count ) {
    var args = [];
    for ( var i = 0; i < count; ++i ) {
        args[i] = getOperand(i+1);
    }
    return args;
}

function performCalculation ( op, args ) {
    var func;

    switch ( op ) {
        case '+':
            func = function(accumulator,currentValue) {
                return accumulator + currentValue;
            };
            break;
    
        case '-':
            func = function(accumulator,currentValue) {
                return accumulator - currentValue;
            };
            break;
        
        case '*':
            func = function(accumulator,currentValue) {
                return accumulator * currentValue;
            };
            break;
        
        case '/':
            func = function(accumulator,currentValue) {
                return accumulator / currentValue;
            };
            break;
    }

    return args.reduce(func);
}

function getCalculationMode() {
    console.log('Which calculator mode do you want?');
    console.log(`${ARITHMETIC_MODE}: arithmetic mode`);
    console.log(`${VOWEL_COUNTING_MODE}: vowel counting mode`);
    var mode = readline.prompt();
    while ( mode != ARITHMETIC_MODE && mode != VOWEL_COUNTING_MODE ) {
        console.log(`${mode} is not a valid mode`);
        console.log('Which calculator mode do you want?');
        console.log(`${ARITHMETIC_MODE}: arithmetic mode`);
        console.log(`${VOWEL_COUNTING_MODE}: vowel counting mode`);
        var mode = readline.prompt();
    }
    return mode;
}

function performOneArithmeticCalculation() {
    const op = getOperator(['+','-','*','/']);
    const num = getArgCount( op );
    const args = getAllOperands(num);
    console.log(`The result is ${performCalculation(op, args)}\n` );
}

function performOneVowelCountingCalculation() {
    console.log('Please enter a string:');
    const str = readline.prompt().toUpperCase();
    var result = {
        A:0, E:0, I:0, O:0, U:0, 
        prettyPrint: function() {
            console.log(`A: ${this.A}`);
            console.log(`E: ${this.E}`);
            console.log(`I: ${this.I}`);
            console.log(`O: ${this.O}`);
            console.log(`U: ${this.U}\n`);
        }
    };
    for ( const c of str ) {
        for ( var v in result ) {
            if ( c == v ) {
                result[c] += 1;
            }
        }
    }
    console.log('The vowel counts are:');
    result.prettyPrint();
}

welcome();
while ( true ) {
    const calculationMode = getCalculationMode();
    if ( calculationMode == ARITHMETIC_MODE ) {
        performOneArithmeticCalculation();
    } else if ( calculationMode == VOWEL_COUNTING_MODE ) {
        performOneVowelCountingCalculation();
    }
}