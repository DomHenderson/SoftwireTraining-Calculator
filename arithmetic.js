const userInput = require('./userInput');

function getArgCount ( op ) {
    return userInput.requestValidNumber(`How many numbers do you want to ${op} ?`);
}

function getOperand ( index ) {
    return userInput.requestValidNumber(`Please enter number ${index}:` );
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
            args = args.filter(function(item) { return item != 0 } );
            break;
    }

    return args.reduce(func);
}



exports.performOneArithmeticCalculation = function() {
    const op = userInput.requestValidOperator(['+','-','*','/']);
    const num = getArgCount( op );
    const args = getAllOperands(num);
    console.log(`The result is ${performCalculation(op, args)}\n` );
}