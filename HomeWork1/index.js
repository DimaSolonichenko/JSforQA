// Task 1

let cat = 'cat';
let dog = 'dog';
let temp = dog;

dog = cat;
cat = temp;

console.log(cat); // Should equal 'dog'
console.log(dog); // Should equal 'cat'

//Task 2

const company = "Portmone.com";
let position = "QA engineer";

console.log("Company is " + company + '\nPosition is ' + position);

//Task 3

const isProductCompany = true;
let productName;

console.log("Type of variable 'isProductCompany' is " + typeof(isProductCompany));
console.log("Type of variable 'company' is " + typeof(company));
console.log("Type of variable 'position' is " + typeof(position));

//Task 4

productName = "Payments"
isProductCompany = false // Error "Assignment to constant variable"
