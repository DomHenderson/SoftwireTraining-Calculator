const readline = require('readline-sync');

function welcome () {
    console.log('Welcome to the calculator!');
}

function getOperator ( validOperators ) {
    console.log('Enter the operator');
    var op = readline.prompt();
    while ( !validOperators.includes(op)) {
        console.log('Operator \'op\' not recognised');
        console.log('Valid operators are \'' + validOperators.join('\', \'') +'\'' );
        console.log('Enter the operator');
        op = readline.prompt();
    }
    return op;
}

function getArgCount ( op ) {
    console.log('How many numbers do you want to ' + op + '?');
    return Number(readline.prompt());
}

function getOperand ( index ) {
    console.log('Please enter number' + index + ':' );
    return Number(readline.prompt());
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

welcome();
while ( true ) {
    const op = getOperator(['+','-','*','/']);
    const num = getArgCount( op );
    const args = getAllOperands(num);
    console.log('The result is ' + performCalculation(op, args) + '\n' );
}