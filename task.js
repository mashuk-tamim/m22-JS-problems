const prompt = require("prompt-sync")();
// let a=10;
// const b=30;

// a=20; //b cannot be modified because it is of constant(const) type

// console.log(a,b);

function paperRequirements(a, b, c)
{
    let totalPages=a*100+b*200+c*300;
    return totalPages;
}

let book1, book2, book3;
book1=prompt("Enter the copies of book 1:");
book2=prompt("Enter the copies of book 2:");
book3=prompt("Enter the copies of book 3:");

totalPages=paperRequirements(book1, book2, book3);
console.log(totalPages);
