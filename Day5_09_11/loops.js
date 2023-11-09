var arr = [
  {
    name: "Utkarsh",
    age: 25,
  },
  {
    name: "Aman",
    age: 22,
  },
  {
    name: "Krishna",
    age: 20,
  },
  {
    name: "Pallavi",
    age: 19,
  },
];

for (var i = 0; i < arr.length; i++) {
  var value = arr[i];
  console.log(value);
}

// if index is not requird use for of loop with array
for (var i of arr) {
  console.log(i.age);
}

var obj = {
  name: "Thar",
  brand: "Mahindra",
  mfd: 2023,
};

// use for in loop to iterate an object
for (var key in obj) {
  var value = obj[key];

  console.log(key, value);
}
