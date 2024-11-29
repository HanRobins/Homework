//Pizza place homework
const pizzaPlace = "Pepperoni's With Cheese";

let numberOfToppings = 10;

console.log(pizzaPlace, typeof pizzaPlace);
console.log(numberOfToppings, typeof numberOfToppings);

console.log(`${pizzaPlace} is by far the best pizza place around. They have like
${numberOfToppings} toppings!`);

if (numberOfToppings >= 10) {
  console.log("A whole lot of pizza");
} else {
  console.log("Quality, not quantity.");
}

for (let i = 0; i <= numberOfToppings; i += 2) {
  console.log("There is ", i, "toppings.");
}
