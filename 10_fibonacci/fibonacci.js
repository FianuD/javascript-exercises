const fibonacci = function(num) {
    if(num < 0) return "OOPS";
    let figureOne = 0;
    let figureTwo = 1;
    let fibonacciNumber;

    if(num == 1 || num == 2) return figureTwo;
    
    for(let i=1; i < num; ++i) {
        fibonacciNumber = figureOne + figureTwo;
        figureOne = figureTwo;
        figureTwo = fibonacciNumber
    }
    return fibonacciNumber;
};

// Do not edit below this line
module.exports = fibonacci;
