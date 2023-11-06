var sumOfDigit = function (x, o) {
  if (x === 0) {
    return o;
  }
  var r = x % 10;
  var s = parseInt(x / 10);
  o += r;
  return sumOfDigit(s, o);
};

var x = 413;
var output = sumOfDigit(x, 0);
console.log(output);

/// sum

const getValue = (num) => {
  let numberX = num;
  num = 0;
  while (numberX > 0) {
    num = num + (numberX % 10 | 0);
    numberX = numberX / 10;
  }
  if (num < 10) {
    return num;
  } else {
    return getValue(num);
  }
};

///

var sumOfDigit = function (x) {
  var o = 0;
  while (x > 0) {
    var r = x % 10;
    x = parseInt(x / 10);
    o += r;
  }
  if (o <= 9) {
    return o;
  } else {
    return sumOfDigit(o);
  }
};

var sumOfDigit = function (x) {
  var o = 0;

  while (x > 0) {
    var r = x % 10;

    x = parseInt(x / 10);

    o += r;
  }

  if (o <= 9) {
    return o;
  } else {
    return sumOfDigit(o);
  }
};
