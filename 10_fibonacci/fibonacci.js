const fibonacci = function(n) {
    let fib = 1;
    let fibNext = 1;
    let nth = 0;

    if (n < 0)
        return 'OOPS'

    switch (+n) {
        case 0:
            return 0;
            break;
        case 1: 
        case 2:
            return 1;
            break;
    }

    for (let i = 3; i <= n; i++) {
        nth = fib + fibNext;
        fibNext = fib;
        fib = nth;
    }
    return fib;
};

// Do not edit below this line
module.exports = fibonacci;
