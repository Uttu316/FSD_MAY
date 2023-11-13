const arr = [1, 2, 3, 4, 5, 6];

console.log(arr.length); // size of the array

arr.shift();
arr.pop();
arr.push(-1);
arr.pop();
arr.push("Amaan");

arr.reverse();

arr.unshift(0);

console.log(arr);

const arr2 = ["Shobhit", "Swathi", "Neha", "Sagar"];

const arr3 = arr.concat(arr2);
console.log(arr3);

console.log(arr.join(""));

console.log(arr3.toString());

const arr4 = arr.splice(2, 2); // splice: actually removes the elemnts from given start pos and num of items to be removed for array

console.log(arr);

// const arr2 = arr.slice(1,4) slice function gives a copy of array's starting pos to ending pos(excluded)
