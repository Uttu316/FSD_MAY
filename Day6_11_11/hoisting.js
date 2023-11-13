console.log(x);
console.log(abc);

//abc: function expression
var abc = function () {
  var x = -1;

  console.log(x);
};

function xyz() {
  console.log("Hello");
}

xyz();

abc();

var x = 2;

console.log(x);

// console.log(x);

// let x = 3;
// function xyz() {
//   x = 4;

//   let y = 5;

//   if (x !== y) {
//     let y = 3;
//     x = 5;
//     console.log(x, y);
//   }
//   console.log(y);
// }

// xyz();

/*
    let and const variables are hoisted  uninitialised
    function variables hoisted with function refrence
    var variables are undefined at hoisting

*/
