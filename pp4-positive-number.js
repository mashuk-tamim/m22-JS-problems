const prompt = require('prompt-sync')();

let numbers = [];
let positiveNumbers = [];
for(let i=0; i<7; i++)
{
    console.log('Enter the number',i+1)
    numbers[i]=prompt();
}

for(let i=0; i<numbers.length; i++)
{
    if(numbers[i]>=0)
    {
        positiveNumbers.push(numbers[i]);
    }
}
console.log(positiveNumbers);
