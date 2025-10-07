/**
 * Task 1: Basic Function
Scenario: Greeting App
Description: Create a function named greetUser that takes one argument, a name, and prints a personalized greeting to the console.
Hint: Use function greetUser(name) { ... } and console.log().
Example: // Call the function with your name to test it
 */

function greetUser(fname, lname) {
  console.log(`Hello there ${fname} ${lname} ! Welcome to the console.`);
}

// greetUser("Abdur", "Rahman" )
// greetUser("Abdur", "Rahman" )
// greetUser("Abdur", "Rahman" )
// greetUser("Abdur", "Rahman" )
// greetUser("Abdur", "Rahman" )

/*
Task 2: Function Return
Scenario: Simple Math
Description: Write a function addTwoNumbers that accepts two numbers and returns their sum..
Hint: Use the return keyword. The function should not use console.log().
Example: let result = addTwoNumbers(15, 20);

*/

function addTwoNumbers(num1, num2) {
  console.log(`Fast Valou : ${num1} `);

  console.log(`Laet Valou : ${num2} `);

  return num1 + num2;
}

//  let result =  addTwoNumbers(20,30)
//  console.log("totale Value :" ,result);

/*
Task 3: Arrow Function
Scenario: Quick Double
Description: Write an arrow function named doubleNumber that takes a number and returns that number multiplied by 2.
Hint: Use the return keyword. The function should not use console.log().
Example: let result = addTwoNumbers(15, 20);


*/

let result = 0;

let doubleNumber = (num1) => {
  result = num1 * 2;

  return result;
};
let number1 = doubleNumber(4);
let number2 = doubleNumber(6);
// console.log(number1,number2);

/*
Task 4: Default Parameter
Scenario: Dinner Cost
Description: Create calculateTotal that takes a price and an optional taxRate. Default taxRate to 0.05 (5%).
Hint: Set the default in the signature: (price, taxRate = 0.05). Return the full total.
Example: let total = calculateTotal(100);


*/

function calculateTotal(Cost, taxRate = 0.05) {
  return (Cost += Cost * taxRate);
}
let total = calculateTotal(100);
// console.log(`Total : ${total}` );

/**
 * 
 * Task 5: Arrow Function
Scenario: String Length
Description: Write a single-line arrow function getStringLength that takes a string and returns its length.
Hint: Omit parentheses for the single parameter. Use the .length property.
Example: let nameLength = getStringLength("LearnAboutFunction");
 */

let getStringLength = (str) => str.length;
console.log(getStringLength("LearnAboutFunction"));

function calculator(a, b) {
  let discountAmount = (a * b) / 100;
  let finalPrice = a - discountAmount;

  console.log("discount: ", a - finalPrice);

  return finalPrice; // Returns 187
}

/*

Task 6: Function Calling
Scenario: Price Calculator
Description: Write a function applyDiscount(price, percentage). Then, call it inside a main function finalPrice and print the result.
Hint: Define two functions. The second function calls the first and uses its return value.
Example: function applyDiscount(...) { ... }
*/

function finalPrice() {
  let finalPrice = calculator(350, 15);
  console.log(" Final Price", finalPrice);
}
finalPrice();

/*
Task 7: Conditional Return
Scenario: Is Adult?
Description: Create a function isAdult that takes an age and returns true if the age is 18 or greater, otherwise false.
Hint: Use a comparison operator (>=) and the return keyword.
Example: console.log(isAdult(20)); // Should be true

*/

function conditional(age) {
  if (age >= 18) {
    console.log(` is Adult: ${true}`);
  } else {
    console.log(`isAdult : ${false}`);
  }
}

conditional(17);

/*
Task 8: No Parameters
Scenario: Random Number
Description: CWrite a function generateRandomNum that takes no arguments and returns a random integer between 1 and 10 (inclusive).
Hint: Use Math.random() multiplied by 10, then use Math.floor() and add 1.
Example: let luckyNum = generateRandomNum();
*/

function generateRandomNum() {
  let math = Math.floor(Math.random() * 10 + 1);
  return math;
}

console.log(generateRandomNum());

generateRandomNum = () => Math.floor(Math.random() * 10 + 1);

console.log(generateRandomNum());

/*
Task 9: Multiple Parameters
Scenario: Volume of a Box
Description: Write a function boxVolume that takes length, width, and height and returns the volume.
Hint: The formula is l×w×h.
Example: let volume = boxVolume(5, 2, 3)
*/

function boxVolume(l, w, x) {
  let volume = l * w * x;
  return volume;
}

console.log(boxVolume(5, 2, 3));

/*

Task 10: Function Printing
Scenario: To-Do List
Description: Create a function printList that takes an array of strings and prints each one on a new line.
Hint: Use a basic for loop or tasks.forEach(...) inside the function.
Example: const tasks = ["Buy Milk", "Code", "Sleep"];

*/

/*

Task 11: Conditional Logic
Scenario: Temperature Check
Description: Write checkTemp that takes a temperature. If it's over 30, return "It's hot!", otherwise return "It's mild or cool."
Hint: Use an if/else block with two different return values.
Example: console.log(checkTemp(35));
*/

function eckTemp(termperature) {
  if (termperature > 30) {
    console.log(`${termperature}'s Hot Outside`);
  } else {
    console.log(`${termperature}'s Cold Outside`);
  }
}

eckTemp(29);

/*

Task 12: Arrow + Default
Scenario: Power 
Description: Write an arrow function power(base, exponent = 2) that returns the base raised to the power of the exponent.
Hint: Use the exponent operator: **.
Example: console.log(power(5)); // 25

*/

let Power = (base, exponent = 2) => {
  return (calculator = base ** exponent);
};

console.log(Power(10, 3));

/**
 * Task 13: Template Literal
Scenario: HTML Generator
Description: Create a function makeListItem(content) that returns a string formatted as an HTML list item.
Hint: Use Template Literals (backticks ``) to easily insert the content.
Example: let item = makeListItem("Hello");
 */

function templateLiteral(Litera) {
  console.log(` <li> ${Litera} </li> `);
}
templateLiteral("hello");

/**
 * Task 14: Input Validation
Scenario: Positive Check
Description: Write a function isPositive(num) that returns true only if num is greater than 0.
Hint: Focus solely on the condition num > 0.
Example: console.log(isPositive(-5)); // false
 */

function isPositive(num) {
  if (true && Number()) {
    return `isPositive :  ${num} `;
    return `isNegative : ${num}`;
  }
}
console.log(isPositive(""));

/**
 * Task 15: Side Effect
Scenario: Counter
Description: Declare let count = 0;. Write a function incrementCount that adds 1 to count each time it is called.
Hint: The function does not need a return statement, only the modification: count = count + 1;.
Example: incrementCount(); console.log(count);
 */

let count = 0;

function incrementCount() {
  count++;
}

incrementCount(count);
console.log(count);
incrementCount(count);
console.log(count);
incrementCount(count);
console.log(count);
incrementCount(count);
console.log(count);
incrementCount(count);
console.log(count);
incrementCount(count);
console.log(count);


/**
 * Task 16: Callback Concept
Scenario: Simple Execution
Description: Define a function execute(callback) that calls the function it receives. Pass an arrow function that prints "Task Done!" to execute.
Hint: Call execute(() => { ... });
Example: function execute(callback) { ... }
 */



function execute (callback){

callback();
}


execute (()=>{
  console.log("Task Done!");
  
})





/**
 * Task 17: Array Access
Scenario: First Element
Description: Create a function getFirstElement that takes an array and returns the item at index 0.
Hint: Use bracket notation: array[0].
Example: const colors = ["Red", "Blue", "Green"];
 */

function getFirstElement (array){

return array [0]

}

 const colors = ["Red", "Blue", "Green"];



 console.log(getFirstElement(colors));
 

 /**  
  * 
  * Task 18: Object Access
Scenario: User Info
Description: Write a function getUserAge(user) that takes a user object and returns only their age.
Hint: Use dot notation: user.age.
Example: const user = { name: "Alice", age: 24 };
  */


const user = { name: "Alice", age: 24 };

function  getUserAge(user){

return user.age;

}


console.log(getUserAge(user));

/**
 * Task 19: String Manipulation
Scenario: Capitalize Name
Description: Create a function capitalizeName(name) that capitalizes the first letter of a name and keeps the rest lowercase.
Hint: Use string methods like .toUpperCase() for the first letter and .slice(1) for the rest.
Example: console.log(capitalizeName("chris"));
 */


function capitalizeName (name){




return name[0].toUpperCase()+name.slice(1) .toLowerCase();


}


console.log(capitalizeName("and"));
console.log(capitalizeName("aBd"));
console.log(capitalizeName("a0d"));
console.log(capitalizeName("anD"));


/**
 * Task 20: Function Scope
Scenario: Inner Function Access
Description:Write outerFunction that defines let message = "Hello". Inside, define and call innerFunction which prints message.
Hint: Show that innerFunction can access variables in the parent outerFunction scope.
Example: function outerFunction() { ... }
 */



function outerFunction(){

  let message = "Hello";
  
  function innerFunction() {

    console.log(message);
    
  }
  innerFunction()
}


outerFunction()

/**
 * 
 * 
 * 
Task 21: push Method
Scenario: Shopping Cart
Description: Start with an empty cart. Use push inside a function addItem(item) to add an item to the end of the array.
Hint: Add End: cart.push("Apples").
Example: const cart = [];
 * 
 */




const cart = [];


function addItem(item){

cart.push(item);


}

addItem("Apples");
addItem("Bananas");
console.log(`Shopping-1 : ${cart[0]} \nShopping-2 : ${cart[1]}`);
      

/**
 * 
 * Task 22: pop Method
Scenario: Last-in, First-out
Description: Use an array of numbers. Use pop to remove and store the last number, then print the removed number.
Hint: Remove End: let removed = numbers.pop();
Example: const numbers = [10, 20, 30];
 */



const numbers = [10, 20, 30];
let removed = numbers.pop();
console.log(removed);
console.log(numbers);

// Task 23: shift Method
// Scenario: Customer Queue
// Description: Use an array of names. Use the shift method to process (remove) and print the first customer in the queue.
// Hint: Remove Front: queue.shift()..
// Example: const queue = ["Anya", "Ben", "Chloe"];
 
const queue = ["Anya", "Ben", "Chloe"];
 let served = queue.shift();
 
console.log("Served customer:", served);
console.log("reminig queue :", queue);


// Task 24: unshift Method
// Scenario: VIP Insertion
// Description: Use the queue array from Task 23. Use unshift to add "VIP Customer" to the beginning of the queue.
// Hint: Add Front: queue.unshift("VIP Customer").
// Example: const queue = ["Ben", "Chloe"];
 
const cheng = ["Ben", "Chloe"];
 
cheng.unshift("VIP INsertion");
 
console.log("Updet queue:", cheng);



// Task 25: for...of Loop
// Scenario: Movie Marathon
// Description: Use the array of movie titles. Use a for...of loop to print every title.
// Hint: Value Iteration: for (const movie of movies) { ... }
// Example: const movies = ["Dune", "Arrival", "Interstellar"];
 
const movies = ["Dune", "Arrival", "Interstellar"];
 
for (const movie of movies){
    console.log(movie);
   
}



// Task 26: for...in Loop (Keys)
// Scenario: Inventory Check
// Description: Use the object. Use a for...in loop to print the name of each property (the inventory key/fruit name).
// Hint: Key Iteration: for (const fruit in inventory) { ... }
// Example: const inventory = { apples: 5, bananas: 10, oranges: 3 };
 
const inventory = { apples: 5, bananas: 10, oranges: 3 };
 
for (const fruit in inventory){
    console.log(fruit);
   
}


// Task 27: for...in Loop (Values)
// Scenario: Price Listing
// Description: Use the inventory object. Use a for...in loop to print both the fruit name (key) and its quantity (value).
// Hint: Access Value: Use inventory[fruit] inside the loop.
// Example: const inventory = { apples: 5, bananas: 10 };
 
const inventor = {
  apples: 5,
  bananas: 10
};
 
for (const fruit in inventor) {
  console.log(fruit + ": " + inventor[fruit]);
}
 

// Task 28: slice (Copy)
// Scenario: Save Game State
// Description: Create an array of high scores. Use the slice() method with no arguments to create a new copy of the scores.
// Hint: Copying: const newScores = originalScores.slice();
// Example: const originalScores = [100, 90, 80];
 
let originalScores = [100, 90, 80, 70, 60]
 const newScores = originalScores.slice();
 
 console.log("Original Scores:", originalScores);
console.log("Copied Scores:", newScores);


// Task 29: slice (Partial)
// Scenario: Top 3 Scores
// Description: Use the high scores array. Use slice(0, 3) to extract and print only the first three scores.
// Hint: Extract Range: allScores.slice(startIndex, endIndex). Remember the end index is exclusive.
// Example: const allScores = [100, 90, 80, 70, 60];
 
const allScores = [100, 90, 80, 70, 60];
 
const score = allScores.slice(0, 3);
 
console.log("All Scores:", allScores);
console.log("Top 3 Scores:", score);


// Task 30: Loop & Array Combo
// Scenario: Filter List
// Description: Use the array of numbers. Use a for...of loop and an if statement to push numbers greater than 10 into a new array.
// Hint: Combine: Start with const filtered = [];. Use filtered.push(...) inside the conditional loop.
// Example: const data = [5, 12, 3, 22, 8];
const data = [5, 12, 3, 22, 8];
const filtered = [];
 
for (const number of data) {
  if (number > 10) {
    filtered.push(number);
  }
}
 
console.log("Original Data:", data);
console.log("Filtered Data (greater than 10):", filtered);