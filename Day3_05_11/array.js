var arr = ["Aman", "Ritik", "Nandhini", "Amaan", "Shobhit"];

arr.push("Mathew");

arr.pop();

arr.unshift("Aditya");
arr.shift();

console.log(arr);

arr.splice(2, 2, "Kunal", "Faizan", "Prince");

var arr2 = [1, 2, 3];

var arr3 = arr2.concat(arr);

console.log(arr3);

var isFound = arr.includes("Ritik");
