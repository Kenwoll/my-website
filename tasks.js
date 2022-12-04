//fibonacci task

function fib(m) {

    let arr = new Array(m);
    arr.fill(0);
    
    function f(n) {
        if (n == 1)
            return 0;
        
        if (n == 2)
            return 1;
    
        if (arr[n] != 0)
            return arr[n];
        
        return arr[n] = f(n-1) +f(n-2); 
    }

    let res = f(m);
    return arr;
}

//Random Number

const randomNumber = (a, b, c) => { 
    var min = a > b ? b : a
    var max = a > b ? a : b 
    
    let arr = new Array(c);
    for (let i = 0; i < c; i++)
        arr[i] = Math.floor(Math.random() * (max - min + 1) + min);
    
    return arr;
}

const counter = (arr) => {
    const count = {};

    for (const element of arr) {
        if (count[element])
            count[element] += 1;
        else 
            count[element] = 1;
    }

    return count;
}