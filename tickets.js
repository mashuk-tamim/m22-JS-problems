const prompt = require('prompt-sync')();

let ticketNumber;
ticketNumber = parseInt(prompt('Enter the ticket number:')); // Convert input to an integer
let totalExpense;

if (ticketNumber <= 100)
{
    totalExpense = ticketNumber * 100;
}
else if (ticketNumber > 100 && ticketNumber <= 200) 
{
    totalExpense = (ticketNumber - 100) * 90 + (100 * 100);
} 
else if (ticketNumber > 200) 
{ 
    totalExpense = (ticketNumber - 200) * 80 + (100 * 90) + (100 * 100);
} 
else 
{
    totalExpense = 0; // Handle invalid input
}

console.log(totalExpense);