/*Calculating with Functions [5 kyu]
    This time we want to write calculations using functions and get the results. Let's have a look at some examples:

        seven(times(five())); // must return 35
        four(plus(nine())); // must return 13
        eight(minus(three())); // must return 5
        six(dividedBy(two())); // must return 3

    Requirements:
        There must be a function for each number from 0 ("zero") to 9 ("nine")
        There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy (divided_by in Ruby and Python)
        Each calculation consist of exactly one operation and two numbers
        The most outer function represents the left operand, the most inner function represents the right operand
        Division should be integer division. For example, this should return 2, not 2.666666...:
    eight(dividedBy(three()));
*/
function main(number, operation){
    if (!operation) return number;
    return operation(number);
}

function zero(operation) {return main(0, operation)}
function one(operation) {return main(1, operation)}
function two(operation) {return main(2, operation)}
function three(operation) {return main(3, operation)}
function four(operation) {return main(4, operation)}
function five(operation) {return main(5, operation)}
function six(operation)  {return main(6, operation)}
function seven(operation) {return main(7, operation); }
function eight(operation) {return main(8,operation)}
function nine(operation) {return main(9,operation)}

function plus(x) { return (y) => { return y + x; } }
function minus(x) { return (y) => { return y - x; } }
function times(x) { return (y) => { return y * x; } }
function dividedBy(x) { return (y) => { return Math.floor(y / x); } }

seven(times(five())); // must return 35
four(plus(nine())); // must return 13
eight(minus(three())); // must return 5
six(dividedBy(two())); // must return 3


/* Clever Answer

*/