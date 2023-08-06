const prompt = require("prompt-sync")();

function bestFriend(friendsName)
{
    let bestFriend, count=0, largestCount=0, largestCountIndexStart;
    bestFriend=friendsName.join();
    bestFriend = bestFriend + ',';
    // console.log(bestFriend);
    // console.log(bestFriend);
    // console.log(bestFriend.length);

    for(let i=0; i<bestFriend.length; i++)
    {
        if(bestFriend[i]===',')
        {
            if(largestCount<count)
            {
                largestCount=count;
                largestCountIndexStart=i-count;
                count=0;
            }
        }
        else
            count++;
    }
    // console.log(largestCountIndexStart,largestCount);
    let bestFriendName=bestFriend.slice(largestCountIndexStart,largestCountIndexStart+largestCount);
    // console.log(bestFriendName);
    return bestFriendName;
}
let friendsNumber;
friendsNumber=prompt('Enter the number of your friend:');
let name=[friendsNumber];
console.log('Enter your friends name:');
for(let i=0; i<friendsNumber; i++)
{
    name[i]=prompt();
}

console.log(name);
let bestFriendName= bestFriend(name);

console.log(bestFriendName);