const prompt= require('prompt-sync')();

let size;
size=prompt('Enter the total numbers:');
const numbers=[size];
for(let i=0; i<size; i++)
{
    numbers[i]=parseInt(prompt());
    // console.log(typeof numbers[i]);
}

let count=0;
for(i=0; i<size; i++)
{
    if(numbers[i]<0)
        count++;
}

console.log(count);