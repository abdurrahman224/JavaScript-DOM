/**
 * 1. Student Grade Analyzer
Scenario: Analyze student scores to assign grades, calculate the class average, and count the passes.
Example Data (Array of Objects):
[
  { name: "Alice", score: 88, class: "Math" },
  { name: "Bob", score: 52, class: "Math" },
  { name: "Charlie", score: 95, class: "Math" },
  { name: "Diana", score: 71, class: "Math" }
]

Conditions to Use:
forEach: Iterate over the students to sum scores and assign grades.
if/else: Determine the letter grade (e.g., A: ≥90, B: ≥80, C: ≥70, Fail: <60).
for or while: Loop over the data again to count how many students scored ≥70.
 */

console.log("<--1. Student Grade Analyzer--->");

const student = [
  { name: "Alice", score: 88, class: "Math" },
  { name: "Bob", score: 52, class: "Math" },
  { name: "Charlie", score: 95, class: "Math" },
  { name: "Diana", score: 71, class: "Math" },
];

student.forEach((student) => {
  if (student.score >= 90) {
    student.grade = "A";
  } else if (student.score >= 80) {
    student.grade = "B";
  } else if (student.score >= 70) {
    student.grade = "C";
  } else {
    student.grade = "Fail : ";
  }
});

let totleScored = 0;

student.forEach((student) => {
  totleScored += student.score;
});

const average = totleScored / student.length;
console.log(`Class Average : ${average}`);

let passesCount = 0;
let faliCount = 0;
const length = student.length;

for (let i = 0; i < length; i++) {
  if (student[i].score >= 70) {
    passesCount++;
  } else if (student[i].score <= 60) {
    faliCount++;
  } else {
    console.log(`Students is not defined`);
  }
}
console.log(`Passed Students : ${passesCount}`);
console.log(`Fail Students :  ${faliCount}`);

console.log(student);

/**
 * 
 * 
 * 
 * 
 * 2. Inventory Management System
Scenario: Check product stock levels and list low-stock items.
Example Data (Array of Objects):
[
  { id: 101, name: "Laptop", price: 1200, stock: 5 },
  { id: 102, name: "Mouse", price: 25, stock: 0 },
  { id: 103, name: "Keyboard", price: 75, stock: 12 },
  { id: 104, name: "Monitor", price: 300, stock: 1 }
]

Conditions to Use:
forEach: Iterate and print all product names and their stock.
if/else: Check if stock === 0 (out of stock) or stock < 5 (low stock).
 */

console.log("<--2. Inventory Management System--->");

const products = [
  { id: 101, name: "Laptop", price: 1200, stock: 5 },
  { id: 102, name: "Mouse", price: 25, stock: 0 },
  { id: 103, name: "Keyboard", price: 75, stock: 12 },
  { id: 104, name: "Monitor", price: 300, stock: 1 },
];

products.forEach((products) => {
  console.log(`${products.name} - ${products.stock} in Stock`);
});

console.log("-------------------------------------------");

products.forEach((products) => {
  if (products.stock === 0) {
    console.log(`${products.name} Out of stock `);
  } else if (products.stock < 5) {
    console.log(`${products.name} Low stock`);
  } else {
    console.log(`${products.name} in stock`);
  }
});

let i = 0;

while (products[i]) {
  if (products[i].stock < 2) {
    console.log(`${products[i].name} -- Very Low Stock ${products[i].stock}`);
  }
  i++;
}
console.log("<--3. User Profile Filter--->");

/**
  * User Profile Filter
Scenario: Filter users based on age and active status and then list their names.
Example Data (Array of Objects):
[
  { name: "Ella", age: 24, isActive: true },
  { name: "Frank", age: 35, isActive: true },
  { name: "Grace", age: 29, isActive: false },
  { name: "Henry", age: 41, isActive: true }
]

Conditions to Use:
forEach: Iterate over the users to perform checks.
if/else: Select users where isActive is true AND age is less than 30.
for: Loop over a new array containing only the filtered user names.

  */

const profiles = [
  { name: "Elldasfa", age: 24, isActive: true },
  { name: "Ellaweera", age: 21, isActive: true },
  { name: "Elasla", age: 4, isActive: true },
  { name: "Ella", age: 2, isActive: true },
  { name: "Ellasa", age: 20, isActive: true },
  { name: "Ellasdra", age: 24, isActive: true },
  { name: "Frank", age: 35, isActive: true },
  { name: "Grace", age: 29, isActive: false },
  { name: "Henry", age: 41, isActive: true },
];

let isActiveProfiles = [];
profiles.forEach((el) => {
  if (el.isActive === true && el.age < 30) {
    console.log(`isActive  age is less than 30 : ${el.name} ${el.age}`);
    isActiveProfiles.push(el);
  }
});

for (el of isActiveProfiles) {
  console.log(`Name :${el.name} Age : ${el.age}`);
}
console.log("<--4. Recipe Ingredient Calculator-->");

/**
 * 
 * 4. Recipe Ingredient Calculator
Scenario: Analyze recipe ingredients to see if you have enough on hand.
Example Data (Object containing an Array):
{
  recipeName: "Pancakes",
  servings: 4,
  ingredients: [
    { name: "Flour", quantity: 200, unit: "g", onHand: 150 },
    { name: "Milk", quantity: 300, unit: "ml", onHand: 500 },
    { name: "Egg", quantity: 2, unit: "count", onHand: 1 }
  ]
}

Conditions to Use:
for: Loop through the ingredients array to check supply levels.
if/else: Determine if onHand is less than quantity (missing ingredients).
forEach: Loop through the ingredients array to print a formatted list of all items needed

 */

recipe = {
  recipeName: "Pancakes",
  servings: 4,
  ingredients: [
    { name: "Flour", quantity: 200, unit: "g", onHand: 150 },
    { name: "Milk", quantity: 300, unit: "ml", onHand: 500 },
    { name: "Egg", quantity: 2, unit: "count", onHand: 1 },
  ],
};

let l = 0;
let missingIngredients = [];
for (l; l < recipe.ingredients.length; l++) {
  const item = recipe.ingredients[l];
  if (item.onHand < item.quantity) {
    const shortage = item.quantity - item.onHand;
    missingIngredients.push({
      name: item.name,
      shortage: shortage,
      unit: item.unit,
    });
  }
}

recipe.ingredients.forEach((item) => {
  console.log(
    `- ${item.name}: Need ${item.quantity}${item.unit}, Have ${item.onHand}${item.unit}`
  );
});

if (missingIngredients.length > 0) {
  console.log(` Missing Ingredients:`);
  missingIngredients.forEach((item) => {
    console.log(`- ${item.name}: Short by ${item.shortage}${item.unit}`);
  });
} else {
  console.log(` You have all the ingredients needed!`);
}

console.log("<-- 5. Bookstore Search-->");

/* Bookstore Search
Scenario: Find books published before a certain year and summarize the collection.
Example Data (Array of Objects):
[
  { title: "Novel A", author: "X. Y.", genre: "Fiction", year: 2010 },
  { title: "Tech B", author: "A. B.", genre: "Non-Fiction", year: 1998 },
  { title: "Poetry C", author: "J. K.", genre: "Poetry", year: 2005 },
  { title: "Old Manual", author: "S. T.", genre: "Reference", year: 1985 }
]

Conditions to Use:
while: Loop until you've found the first three books published before 2000.
if/else: Check if year is less than 2000.
forEach: Iterate over the entire array and print the title and author of every book.*/

const books = [
  { title: "Novel A", author: "X. Y.", genre: "Fiction", year: 2010 },
  { title: "Tech B", author: "A. B.", genre: "Non-Fiction", year: 1998 },
  { title: "Poetry C", author: "J. K.", genre: "Poetry", year: 2005 },
  { title: "Poetry C", author: "J. K.", genre: "Poetry", year: 2003 },
  { title: "Poetry C", author: "J. K.", genre: "Poetry", year: 2001 },
  { title: "Old Manual", author: "S. T.", genre: "Reference", year: 1985 },
  { title: "Old ", author: "E. T.", genre: "Referedfnce", year: 1986 },
  { title: " Manual", author: "S. H.", genre: "Referdcvfdence", year: 1995 },
];

let n = 0;
let oldBooks = [];
let newBooks = [];

while (n < books.length && oldBooks.length < 3) {
  if (books[n].year < 2000) {
    oldBooks.push(books[n]);
  } else {
    newBooks.push(books[n]);
  }
  n++;
}
console.log(` books publishe year is less than 2000`);
oldBooks.forEach((el) => {
  console.log(
    `Book Name : "${el.title}" Author : "${el.author}' Genre : "${el.genre}" Publish Year : "${el.year}" `
  );
});
console.log(` new Books `);
newBooks.forEach((el) => {
  console.log(
    `Book Name : "${el.title}" Author : "${el.author}' Genre : "${el.genre}" Publish Year : "${el.year}" `
  );
});

console.log();

/**
 * 
 * 
 * 6. Expense Tracker
Scenario: Calculate total spending and flag individual expenses that are over budget.
Example Data (Array of Objects):
[
  { date: "2024-03-01", amount: 45.50, category: "Groceries" },
  { date: "2024-03-01", amount: 150.00, category: "Rent" },
  { date: "2024-03-02", amount: 12.75, category: "Coffee" },
  { date: "2024-03-03", amount: 95.00, category: "Dinner" }
]

Conditions to Use:
forEach: Calculate the total sum of all amounts.
for: Loop through the expenses to check for high-cost items.
if/else: Flag an expense if amount is greater than 100.00.
 */

console.log(`<-- 6. Expense Tracker-->`);

const expense = [
  { date: "2024-03-01", amount: 45.5, category: "Groceries" },
  { date: "2024-03-01", amount: 150.0, category: "Rent" },
  { date: "2024-03-02", amount: 12.75, category: "Coffee" },
  { date: "2024-03-03", amount: 95.0, category: "Dinner" },
  { date: "2024-04-03", amount: 101, category: "Dinner" },
];

let totle = 0;
expense.forEach((el) => {
  totle += el.amount;
});

for (let i = 0; i < expense.length; i++) {
  const item = expense[i];
  if (item.amount > 100) {
    console.log(
      `${item.category} on ${item.date} is high-cost: ${item.amount}`
    );
  } else {
    console.log(
      `${item.category} on ${item.date}  is within budget: ${item.amount}`
    );
  }
}

console.log(totle);

/*7. Voting Eligibility Check
Scenario: Determine which voters are eligible (≥18) and process the list.
Example Data (Array of Objects):
[
  { id: 1, name: "Leo", age: 19, registered: false },
  { id: 2, name: "Mia", age: 17, registered: true },
  { id: 3, name: "Noah", age: 30, registered: true },
  { id: 4, name: "Olive", age: 18, registered: false }
]

Conditions to Use:
forEach: Iterate and check every voter's eligibility.
if/else: Check if age is ≥18 AND if registered is true.
while: Loop and print the names of voters until you encounter the first voter who is not registered.*/

console.log(`<-- 7. Voting Eligibility Check-->`);
const voters = [
  { id: 1, name: "Leo", age: 19, registered: false },
  { id: 2, name: "Mia", age: 17, registered: true },
  { id: 3, name: "Noah", age: 30, registered: true },
  { id: 4, name: "Olive", age: 18, registered: false },
];

voters.forEach((el) => {
  if (el.age >= 18 && el.registered === true) {
    console.log(` Name : ${el.name}  Age ${el.age}`);
  }
});

let e = 0;
while (e < voters.length && voters[e].registered === false) {
  console.log(`Voters Name : ${voters[e].name} Voters ${voters[e].age}`);

  e++;
}

/**
 * 
 * 
 * 8. Simple Quiz Scorer
Scenario: Compare user answers against correct answers to calculate a score.
Example Data (Object for Correct Answers & Array for User Answers):
// Correct Answers Object
{
  q1: "Mercury",
  q2: "Blue",
  q3: "Triangle"
}

// User Answers Array
[
  { qNum: "q1", uAnswer: "Mercury" },
  { qNum: "q2", uAnswer: "Red" },
  { qNum: "q3", uAnswer: "Triangle" }
]

Conditions to Use:
for: Loop through the User Answers array using the index.
if/else: Compare the uAnswer with the corresponding key's value in the Correct Answers object.
forEach: Loop through the User Answers array to print the question number and whether the answer was correct or incorrect.
 */

const correctAnswers = {
  q1: "Mercury",
  q2: "Blue",
  q3: "Triangle",
};

const userAnswers = [
  { qNum: "q1", uAnswer: "Mercury" },
  { qNum: "q2", uAnswer: "Red" },
  { qNum: "q3", uAnswer: "Triangle" },
];

let score = 0;
const lengt = userAnswers.length;
for (let i = 0; i < lengt; i++) {
  if (userAnswers[i].uAnswer === correctAnswers[userAnswers[i].qNum]) {
    score++;
    userAnswers[i].isCorrect = true;
  } else {
    userAnswers[i].isCorrect = false;
  }
}

userAnswers.forEach((item) => {
  const result = item.isCorrect ? "Correct" : "Incorrect";
  console.log(`${item.qNum} : ${result}`);
});

console.log(`Total Score: ${score} out of ${lengt}`);

/*
9. 
Scenario: Calculate the total length of a playlist and filter out short songs.
Example Data (Array of Objects):
[
  { title: "Song 1", artist: "A", durationSeconds: 180 },
  { title: "Song 2", artist: "B", durationSeconds: 250 },
  { title: "Song 3", artist: "C", durationSeconds: 15 },
  { title: "Song 4", artist: "D", durationSeconds: 320 }
]

Conditions to Use:
while: Loop through the array to accumulate the total duration, stopping if the total exceeds 600 seconds.
if/else: Check if durationSeconds is less than 60 (too short for the radio).
forEach: Create a new array containing only the titles of songs that are longer than 150 seconds.
*/
console.log("<---Music Playlist Manager--->");

const playlist = [
  { title: "Song 1", artist: "A", durationSeconds: 180 },
  { title: "Song 2", artist: "B", durationSeconds: 250 },
  { title: "Song 3", artist: "C", durationSeconds: 15 },
  { title: "Song 4", artist: "D", durationSeconds: 320 },
];

let o = 0;
const len = playlist.length;
let totalDuration = 0;
while (o < len && totalDuration <= 600) {
  totalDuration += playlist[o].durationSeconds;

  o++;
}
console.log(totalDuration);

playlist.forEach((el) => {
  if (el.durationSeconds < 60) {
    console.log(`${el.title} is too short for the radio`);
  } else {
    console.log(`${el.title} is fine `);
  }
});
let longSongs = [];
playlist.forEach((el) => {
  if (el.durationSeconds > 150) {
    longSongs.push(el.title);
  }
});
console.log(`${longSongs} ong songs`);

/*
10. Data Aggregator
Scenario: Calculate the sum and average of numerical data, and find the minimum and maximum.
Example Data (Array of Objects):
[
  { value: 42 },
  { value: 15 },
  { value: 87 },
  { value: 22 }
]

Conditions to Use:
forEach: Iterate to calculate the total sum and count.
for: Loop through the array to find the minimum and maximum value.
if/else: Update the minimum/maximum variables inside the loop when a smaller/larger number is found. Store the results in a summary object (e.g., { totalSum: 166, min: 15, max: 87 }).
*/

console.log("<--Data Aggregator--->");

const calculate = [{ value: 42 }, { value: 15 }, { value: 87 }, { value: 22 }];

let totalSum = 0;
calculate.forEach((el) => {
  totalSum += el.value;
});

let max = calculate[0].value;
let min = calculate[0].value;
for (let i = 0; i < calculate.length; i++) {
  if (calculate[i].value > max) {
    max = calculate[i].value;
  }
}
console.log("Max value :  ", max);

for (let i = 0; i < calculate.length; i++) {
  if (calculate[i].value < min) {
    min = calculate[i].value;
  }
}

console.log("Min value : ", min);

let averag = totalSum / calculate.length;

console.log("Average", averag);

console.log("totalSum:", totalSum);

/**
 * Scenario: Validate tickets and separate valid ones from invalid ones.
Example Data (Array of Objects):
[
  { id: "T001", destination: "Tokyo", valid: true },
  { id: "T002", destination: "Paris", valid: false },
  { id: "T003", destination: "London", valid: true },
  { id: "T004", destination: "Rome", valid: true },
  { id: "T005", destination: "Berlin", valid: false }
]

Conditions to Use:
for: Loop through the array to count how many tickets are valid.
if/else: Check the valid status and the destination (e.g., print a special message if the destination is 'Paris' and it's valid).
forEach: Iterate over the array to build a new array containing only the objects where valid is true.
 */



console.log("<--11. Ticket Validator-->");

const tickets = [
  { id: "T001", destination: "Tokyo", valid: true },
  { id: "T002", destination: "Paris", valid: false },
  { id: "T003", destination: "London", valid: true },
  { id: "T004", destination: "Rome", valid: true },
  { id: "T005", destination: "Berlin", valid: false },
];




let validCount = 0;
for (let i = 0; i < tickets.length; i++) {
  if (tickets[i].valid) {
    validCount++;

    if (tickets[i].destination === "Paris") {
      console.log(` Ticket ${tickets[i].id} is valid and going to Paris!`);
    } else {
      console.log(
        `Ticket ${tickets[i].id} is valid for ${tickets[i].destination}.`
      );
    }
  } else {
    console.log(`Ticket ${tickets[i].id} is invalid.`);
  }
}

console.log(`Total valid tickets: ${validCount}`);

let validTickets = [];
tickets.forEach((ticket) => {
  if (ticket.valid) {
    validTickets.push(ticket);
  }
});

console.log("Valid Tickets Array:", validTickets);


/**
 * 12. Weather Report Processor
Scenario: Analyze daily temperatures and conditions.
Example Data (Array of Objects):
[
  { day: "Mon", highTemp: 28, isSunny: true },
  { day: "Tue", highTemp: 22, isSunny: false },
  { day: "Wed", highTemp: 31, isSunny: true },
  { day: "Thu", highTemp: 25, isSunny: false }
]

Conditions to Use:
forEach: Iterate and print a summary of each day.
if/else: Check if highTemp is >30 AND isSunny is true (a heatwave day).
while: Loop until you find the first day where isSunny is false.
 */






    const weather = [
  { day: "Mon", highTemp: 28, isSunny: true },
  { day: "Tue", highTemp: 22, isSunny: false },
  { day: "Wed", highTemp: 31, isSunny: true },
  { day: "Thu", highTemp: 25, isSunny: false }
];


weather.forEach(item => {
  console.log(`${item.day}: High Temp ${item.highTemp}°C, Sunny: ${item.isSunny}`);
  

  if (item.highTemp > 30 && item.isSunny) {
    console.log(` Heatwave alert on ${item.day}!`);
  }
});


let v = 0;
while (v < weather.length && weather[v].isSunny) {
  v++;
}

if (v < weather.length) {
  console.log(`First day without sun: ${weather[v].day}`);
} else {
  console.log("All days are sunny!");
}

/*
13. Task Completion Checker
Scenario: Track task status and count tasks by priority.
Example Data (Array of Objects):
[
  { title: "Buy Milk", priority: "Low", completed: true },
  { title: "Finish Report", priority: "High", completed: false },
  { title: "Call Client", priority: "Medium", completed: false },
  { title: "Book Flight", priority: "High", completed: true }
]

Conditions to Use:
for: Loop through the array to count the number of high-priority tasks.
if/else: Check if priority is "High" and if completed is false.
forEach: Create a new array of objects containing only the tasks that are not completed.*/

const Data = [
  { title: "Buy Milk", priority: "Low", completed: true },
  { title: "Finish Report", priority: "High", completed: false },
  { title: "Call Client", priority: "Medium", completed: false },
  { title: "Book Flight", priority: "High", completed: true }
];

// --- Section 1: Count High-Priority Tasks and Check Status (for loop, if/else) ---
let highPriorityCount = 0;


console.log("--- High-Priority Task Status ---");
for (let i = 0; i < Data.length; i++) {
  const task = Data[i];

  if (task.priority === "High") {
    highPriorityCount++; 


    if (task.completed === false) {
      console.log(` Title: ${task.title} | Priority: ${task.priority} | Status: NOT Completed`);
    } else {
    
      console.log(`Title: ${task.title} | Priority: ${task.priority} | Status: Completed`);
    }
  }
}

console.log(`\nTotal High-Priority Tasks: ${highPriorityCount}`);


const uncompletedTasks = [];

Data.forEach(task => {
 
  if (task.completed === false) {
  
    uncompletedTasks.push(task); 
  }
});

console.log("\--- All Uncompleted Tasks (New Array) ---");
console.log(uncompletedTasks);




/**
 * 14. User Permissions
Scenario: Determine a user's permissions based on their role configuration.
Example Data (Config Object & User Array):
// Permissions Configuration Object
{
  admin: ["read", "write", "delete", "manage"],
  editor: ["read", "write"],
  viewer: ["read"]
}

// User Data Array
[
  { name: "Sam", role: "editor" },
  { name: "Tina", role: "admin" },
  { name: "Max", role: "viewer" }
]

Conditions to Use:
forEach: Iterate over the User Data array.
for: Inside the forEach, loop over the permissions array found in the Config object (using the user's role as the key).
if/else: Check if the user's permissions array includes the action "delete".
 */

const permissionsConfig = {
  admin: ["read", "write", "delete", "manage"],
  editor: ["read", "write"],
  viewer: ["read"]
};

const userData = [
  { name: "Sam", role: "editor" },
  { name: "Tina", role: "admin" },
  { name: "Max", role: "viewer" }
];



userData.forEach(user => {
  const userPermissions = permissionsConfig[user.role] || []; 
  let canDelete = false;

 
  for (let i = 0; i < userPermissions.length; i++) {
    const permission = userPermissions[i];

    
    if (permission === "delete") {
      canDelete = true;
      break; 
    }
  }

  if (canDelete) {
    console.log(`${user.name} (Role: ${user.role}) **has** the "delete" permission. `);
  } else {
    console.log(`${user.name} (Role: ${user.role}) **does not have** the "delete" permission. `);
  }
});


/*
15. Product Price Updater
Scenario: Apply a 10% price increase only to products in the 'electronics' category.
Example Data (Array of Objects):
[
  { id: 201, name: "Webcam", price: 50.00, category: "electronics" },
  { id: 202, name: "Coffee Maker", price: 75.00, category: "home" },
  { id: 203, name: "USB Drive", price: 15.00, category: "electronics" },
  { id: 204, name: "Blender", price: 40.00, category: "home" }
]

Conditions to Use:
while: Loop until the price of the first 'electronics' item exceeds $60.00 (This forces multiple iterations of updates).
if/else: Check if category is "electronics" and apply the price update (price ×1.10).
forEach: Loop through the array after the updates to print the final, adjusted price for every product.*/


// Initial product data
let product = [
  { id: 201, name: "Webcam", price: 50.00, category: "electronics" },
  { id: 202, name: "Coffee Maker", price: 75.00, category: "home" },
  { id: 203, name: "USB Drive", price: 15.00, category: "electronics" },
  { id: 204, name: "Blender", price: 40.00, category: "home" }
];


let firstElectronicsProduct;

console.log("--- Starting Price Updates (10% increase for 'electronics' per iteration) ---");


while (
  (firstElectronicsProduct = product.find(p => p.category === "electronics")) &&
  firstElectronicsProduct.price <= 60.00
) {
  console.log(`Current Webcam Price (id: 201): $${firstElectronicsProduct.price.toFixed(2)}`);

  for (let i = 0; i < product.length; i++) {
    if (product[i].category === "electronics") {
      product[i].price *= 1.10;
    } 
    
  }
}

console.log(`\nCondition met: Webcam Price (id: 201) is now $${firstElectronicsProduct.price.toFixed(2)}.`);
console.log("--- Final Product Prices ---");


product.forEach(product => {

  console.log(
    `ID: ${product.id}, Name: ${product.name}, Category: ${product.category}, Final Price: $${product.price.toFixed(2)}`
  );
});

