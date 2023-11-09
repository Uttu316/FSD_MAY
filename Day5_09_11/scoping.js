/// globmal scope

function abc() {
  //functional scope
  var z = 3;
  let p = 5;

  if (z < p) {
    // block scope
    let m = 0;
    var n = -1;
    console.log(m, z);
  }

  console.log(n);

  console.log(z, p);
}

// console.log(z); // error: z is not present in this scope

abc();
