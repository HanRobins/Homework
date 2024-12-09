const { get } = require("http");

//Create an array of Pizza Toppings
let pizzaToppings = ["Pepperoni", "BellPepper", "Sausage", "Olives", "Onions"];

//defining a function that lists the toppings by looping over our array
function listToppings(toppingsArray) {
  //creating an empty array to loop my toppings onto
  let sortedToppings = "";

  //using an index to check which loop we are on.
  let index = 0;

  // looping the array of toppings onto another array
  for (let topping of toppingsArray) {
    //if im on the last word print an and statement
    if (index === toppingsArray.length - 1) {
      sortedToppings += "and " + topping;
    } else {
      // else just use a coma
      sortedToppings += topping + ", ";
    }
    index += 1;
  }
  return sortedToppings;
}

//Create a function that greet customer and informs about toppings.
function greetCustomer() {
  let topping = listToppings(pizzaToppings);

  let greet = `Welcome to out pizza house our topping are: ${topping}.`;
  console.log(greet);
  //Creating for loop
  // for (let topping of pizzaToppings) {
  //   greet += topping + ", ";
  // }
}

//getting the customers pizza order
function getPizzaOrder(size, crust, ...toppings) {
  //sorting customers order
  let sortedToppings = listToppings(toppings);
  //putting all my variables into one statement
  let order = `One ${size} ${crust} pizza with ${sortedToppings} coming right up!`;

  //printing statement and returning array
  console.log(order);
  let orderArray = [size, crust, toppings];
  return orderArray;
}

// prepping our pizza
function preparePizza(foodArray) {
  console.log("...Cooking Pizza...");

  //creating a pizza object
  let pizza = {
    size: foodArray[0],
    crust: foodArray[1],
    toppings: foodArray[2]
  };
  //returning pizza object
  return pizza;
}

// serving the pizza
function servePizza(pObject) {
  //formatting the toppings
  let toppingsMessage = listToppings(pObject.toppings);
  //putting my message on a variable
  let orderMessage = `Order up! Here's your ${pObject.size} ${pObject.crust} with ${toppingsMessage}! ENJOY!`;
  console.log(orderMessage);
}

//calling my functions
greetCustomer();

// getting my customers order
let orderArray = getPizzaOrder(
  "small",
  "Thick Crust",
  "Pepperoni",
  "Sausage",
  "BellPepper",
  "Onions"
);

//putting my pizza object in variable
let pizzaObject = preparePizza(orderArray);

//SERVING THE PIZZA!!
servePizza(pizzaObject);
