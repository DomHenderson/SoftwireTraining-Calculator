const readline = require('readline-sync');

exports.performOneVowelCountingCalculation = function() {
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