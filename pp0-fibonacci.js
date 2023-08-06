const prompt = require('prompt-sync')();
function fibonacci(a, b)
{
    let sum=a+b;
    return sum;
}

let n, previousNum=0, nowNum=1, nextNum;
n=prompt('Enter the length of the fibonacci series:');

console.log(previousNum);
console.log(nowNum);
for(let i=1; i<=n; i++)
{
    nextNum=fibonacci(previousNum, nowNum);
    console.log(nextNum);
    previousNum=nowNum;
    nowNum=nextNum;
}