const readline = require('readline-sync');

console.log('Welcome to the calculator!');

console.log('Enter the operator');
var op = readline.prompt();
while ( op != '+' && op != '-' && op != '*' && op != '/') {
    console.log('Operator \'op\' not recognised');
    console.log('Valid operators are \'+\', \'-\', \'*\', \'/\'' );
    console.log('Enter the operator');
    op = readline.prompt();
}

console.log('How many numbers do you want to ' + op + '?');
const num = Number(readline.prompt());

var args = [];

for ( var i = 0; i < num; ++i ) {
    console.log('Please enter number ' + (i+1) + ':' );
    args[i] = Number(readline.prompt());
}

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

console.log('The result is ' + args.reduce(func));