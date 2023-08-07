const prompt = require('prompt-sync')();

function removeDuplicate(names)
{
    let unique=[];
    for(let i=0; i<names.length; i++)
    {
        let name=names[i];
        if(unique.includes(name)===false)
        {
            unique.push(name);
        }
    }
    return unique;
}

let size;
size=prompt('Enter the number of names:');

let names=[size];
for(let i=0; i<size; i++)
{
    names[i]=prompt();
}
let uniqueNames=removeDuplicate(names);

console.log(uniqueNames);