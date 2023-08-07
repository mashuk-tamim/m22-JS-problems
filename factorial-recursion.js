const prompt= require('prompt-sync')();

function factorial(n)
{
    if(n===1)
        return 1;
    else
        return n * factorial(n-1);
}

let n;
n=prompt();
console.log(factorial(n));
