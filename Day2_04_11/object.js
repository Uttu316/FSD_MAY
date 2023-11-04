var x = {
  name: "Utkarsh",
  age: 25,
  city: "Agra",
  compony: "Sony",
  salary: 30000000,
};

console.log(x.name);
console.log(x.age);
console.log(x["city"]);

var key = "city";
x[key] = "pune";
// use this way when you are dependent on key name

x.phone = 323123231;
// use this way when your are sure about key name

delete x.city;
