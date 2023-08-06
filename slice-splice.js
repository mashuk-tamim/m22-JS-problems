let friends=[0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let newFriends=[10, 11, 12, 13];

let allFriends=friends.concat(newFriends);
// console.log(allFriends);

// // slice
// console.log(friends.slice(6)); // slicing from index 6 to end
// console.log(friends.slice(6,8)); // // slicing from index 6 to 7(not 8)

// console.log(friends);
// console.log(allFriends); // the result is same as before because slice() doesn't modify or alter the original array. But splice() does.

// splice

// let deletedFriends=friends.splice(2,5) // splice(start index, number of elements to be deleted, number of elements to be added in between(not necessarily equals to number of elements to be deleted))
console.log(friends);
deletedFriends=friends.splice(2, 5, 22, 33, 44);
// allFriends=friends.concat(newFriends);
console.log(friends);

