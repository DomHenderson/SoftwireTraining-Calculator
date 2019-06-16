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

console.log('Enter the first number');
const lhs = Number(readline.prompt());

console.log('Enter the second number');
const rhs = Number(readline.prompt());

var result;

switch ( op ) {
    case '+':
        result = lhs+rhs;
        break;
    
    case '-':
        result = lhs-rhs;
        break;
    
    case '*':
        result = lhs*rhs;
        break;
    
    case '/':
        result = lhs/rhs;
        break;
}

console.log('The result is ' + result);