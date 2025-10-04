// function foramCerat (){
// const Fform = document.forms['myForm']

// const value = Fform['fname'].value;

// if(value === ""){

//     alert("form is not valide")
// }

// console.log(value);

// return false;
// }

// setTimeout(function () {
//   const cssStyle = document.querySelector("#dome");
//   cssStyle.style.color = "red";
//   cssStyle.style.fontSize = "50px";
// },3000);

//   function button () {
//   const cssStyle = document.querySelector("#dome");

//   cssStyle.style.color = "";
//   cssStyle.style.fontSize = "";
// }

// function myMove (){
// const animate = document.getElementById("animate")
// let post = 0;
// const interValt = setInterval(frame,10);
// function frame(){

//     if(post < 350){

//         post ++;
//         animate.style.top = post + 'px';
//         animate.style.left = post + 'px';
//     }else{

//         clearInterval(interValt)
//     }
// }

// }
//     function Move (){
//     const animate = document.getElementById("animate")
//     let post = 350;
//     const interValt = setInterval(frame,10);
//     function frame(){

//         if(post > 0){

//             post --;
//             animate.style.top = post + 'px';
//             animate.style.left = post + 'px';
//         }else{

//             clearInterval(interValt)
//         }
//     }

//     }

// let isDoen = false;
// function toggMove() {
//   const animate = document.getElementById("animate");
//   const toggleBtn = document.getElementById("toggleBtn");
//   let post = isDoen ? 0 : 350;
//   const target = isDoen ? 350 : 0;
//   const step = isDoen ? 1 : -1;
//   const interValt = setInterval(frame, 4);
//   function frame() {
//     if ((isDoen && post  < target) || (!isDoen && post > target)) {
//       post += step;
//       animate.style.top = post + "px";
//       animate.style.left = post + "px";

//     } else {
//       clearInterval(interValt);
//       isDoen = !isDoen;
//       toggleBtn.innerText = isDoen? " move loer":"move uper";
//     }
//   }
// }

// let isDone = true;

// function toglMove() {
//   const animate = document.getElementById("animate");
//   const toggleBtn = document.getElementById("toggleBtn");
//   let post = isDone ? 0 : 350;
//   const target = isDone ? 350 : 0;
//   const step = isDone ? 1 : -1;
//   const etInterval = setInterval(frame, 5);
//   function frame() {
//     if ((isDone && post < target) || (!isDone && post > target)) {
//       post += step;
//       animate.style.top = post + "px";
//       animate.style.left = post + "px";
//     }else{
// clearInterval(etInterval)

// isDone=!isDone;
// toggleBtn.innerText = isDone? "Move Down": "Move Up";

//     }
//   }
// }

// function onliek (){
// const titli = document.getElementById('even')

// titli.innerHTML = "HELOO"

//  }

// const utton = document.querySelector('#utton')
// utton.onclick = function(){

//     onliek()

// }

// Task 1: Grade Calculator
// Given an array of 5 test scores [85, 92, 78, 96, 88] , calculate the total and average score using a for
// loop:
// Loop through each score in the array
// Add each score to a running total
// After the loop, divide total by number of tests
// Display: "Total: 439, Average: 87.8"

const Calculator = [90, 92, 90, 96, 88];
let total = 0;

const lengt = Calculator.length;

for (let i = 0; i < lengt; i++) {
  total += Calculator[i];
}

const average = total / 5;

console.log("Total : " + total);
console.log("Average : " + average);

console.log("__________________________________________________________");

/*
Task 2: Shopping Cart Total
You have a shopping cart with items and prices ] . Calculate the total cost:
Use a for loop to iterate through each price
Add each price to a running total
Apply 8% tax to the final total
Display: "Subtotal: $66.49, Tax: $5.32, Total: $71.81"
*/

const shopping = [12.99, 8.5, 25.0, 4.75, 15.25];
let Subtotal = 0;
const lengT = shopping.length;

for (let i = 0; i < lengT; i++) {
  Subtotal += shopping[i];
}
console.log("Subtotal:" + Subtotal);

let tax = Subtotal * 0.08;
console.log("Tex : " + tax);

const toTal = Subtotal + tax;

console.log("Total : " + toTal);

console.log("__________________________________________________________");

/*
Task 3: Multiplication Table Generator
 a number (e.g., 7), create its multiplication table from 1 to 10:
Use a for loop from 1 to 10
Multiply the given number by each loop counter
Display each result: "7 x 1 = 7", "7 x 2 = 14", etc.
Show all 10 multiplication results

*/

const given = 7;

let number = 0;

for (let i = 1; i <= 10; i++) {
  number = [i] * given;
  console.log("Result : " + [i], "*", number);
}

console.log("__________________________________________________________");

let uppercase = 0;
let lowercase = 0;
let numbers = 0;
let special = 0;

const very = "Very Strong";
const strong = "Strong";
const medium = "Medium";
const weak = "Weak";
const password = "Abdurgdfg546";

const length = password.length;

let characters;

for (let i = 0; i > length; i++) {
  characters = password[i];
  if (characters >= "A" && characters <= "Z") {
    uppercase++;
  } else if (characters >= "a" && characters <= "z") {
    lowercase++;
  } else if (characters >= 1 && characters <= 9) {
    number++;
  } else {
    special++;
  }
}

if (uppercase >= 0 && lowercase >= 0 && number >= 0 && special >= 0) {
  console.log("password : " + very);
  console.log("rating : 100%");
} else if (uppercase >= 0 && lowercase >= 0) {
  console.log("password : " + strong);
  console.log("rating : 80%");
} else if (lowercase >= 0) {
  console.log("password : " + medium);
  console.log("rating : 50%");
} else {
  console.log("password : " + weak);
  console.log("rating : 20%");
}

console.log("__________________________________________________________");

/*
Task 5: Student Attendance Tracker
Given an array of attendance records ["Present", "Absent", "Present", "Late", "Present"] for 5 days:
Loop through each day's record
Count present days, absent days, and late days
Calculate attendance percentage (Present + Late = attended)
Display: "Present: 3, Absent: 1, Late: 1, Attendance: 80%"*/

const attendance = [
  "Present",
  "Absent",
  "Present",
  "Late",
  "Present",
  "Absent",
];
let presentCount = 0;
let absentCount = 0;
let lateCount = 0;

const length2 = attendance.length;
for (let i = 0; i <= length2; i++) {
  if (attendance[i] === "Present") {
    presentCount++;
  } else if (attendance[i] === "Absent") {
    absentCount++;
  } else if (attendance[i] === "Late") {
    lateCount++;
  }
}

const attendedDays = presentCount + lateCount;

const totalDays = length2;

const attendancePercentage = (attendedDays / totalDays) * 100;

console.log("Present : " + presentCount);
console.log("Absent : " + absentCount);
console.log("Late : " + lateCount);

console.log("Attendance:" + attendancePercentage.toFixed(0) + "%");

console.log("__________________________________________________________");

/*

Task 6: Temperature Converter
Given an array of Celsius temperatures [0, 15, 25, 30, 35] , convert each to Fahrenheit:
Loop through each Celsius temperature
Convert using formula: F = (C × 9/5) + 32
Store results in a new array or display each conversion
Show: "0°C = 32°F", "15°C = 59°F", etc.

*/

const temperatures = [0, 15, 25, 30, 35];

const length_3 = temperatures.length;
for (let i = 0; i < length_3; i++) {
  let fahrenheit = (temperatures[i] * 9) / 5 + 32;

  console.log(`${temperatures[i]}°C =  ${fahrenheit}°F`);
}

console.log("__________________________________________________________");

/**
 Task 7: Inventory Stock Check
Given product quantities [5, 0, 12, 3, 0, 8] , identify stock status:
Loop through each product quantity
Categorize: Out of Stock (0), Low Stock (1-5), In Stock (6+)
Count items in each category
Display: "Out of Stock: 2 items, Low Stock: 2 items, In Stock: 2 items"
WHILE LOOP SCENARIOS
 */

const stock = [5, 0, 12,0, 8,0,0,3,1,2,4, 6,];
let Out_of_Stock = 0;
let Low_Stock = 0;
let In_Stock = 0;

const length_4 = stock.length;

for (let i = 0; i < length_4; i++) {
  if (stock[i] <= 0) {
    Out_of_Stock++;
  } else if ( stock[i] <= 5) {
    Low_Stock++;
  } else if (stock[i] >= 6) {
    In_Stock++;
  }
}


console.log(`Out of Stock : ${Out_of_Stock}`);
console.log(`Low Stock:  ${Low_Stock}`);
console.log(`In Stock: ${In_Stock}`);


console.log("__________________________________________________________");


/**
 Task 8: ATM Withdrawal Simulator
Starting with account balance of $500, simulate withdrawals:
Keep asking for withdrawal amounts while balance > 0
Each withdrawal reduces the balance
Stop when balance reaches 0 or user enters 0
Display remaining balance after each transaction
Final message: "Account empty" or "Session ended, Balance: $X"
 */




// let balance = 500;
// const  withdrawals = 50;
// while (balance > 0){
//   if(balance )
// balance = balance-withdrawals;
// if(balance ===0){
// console.log("Account empty");
// }
// // console.log("Remaining balance:", balance);

// }


// console.log("Final Balance:", balance);





/*
Task 9: Number Guessing Game
The computer picks a random number between 1-50, player keeps guessing:
Continue asking for guesses while guess is incorrect
Give hints: "Too high" or "Too low" after each wrong guess
Count the number of attempts
Stop when correct number is guessed
Display: "Correct!  it in You guessedX attempts
*/


let guessing = [40,];
let attempts = 0;
let numbe = Math.floor(Math.random()*50)+1
let i = 0;
while (i < guessing.length) {
let guess = guessing [i]
  attempts++;

  if(guess > numbe){

    console.log(`${guess} Too high`);
    
  }else if(guess < numbe){

    console.log(`${guess} Too low`);
  }else {


    console.log(`${guess}  Correct! You guessed it in ${attempts} attempts`);
    break;
  }
  i++
}

console.log("__________________________________________________________");


// // Task 10: Dice Rolling Challenge
// //  Player rolls dice until they get three 6's in a row:
// //  Keep rolling dice while streak of 6's is less than 3
// //  Reset streak counter if any roll is not a 6
// //  Count total number of rolls
// //  Display each roll result and current streak
// //  Final message: "Success! Got three 6's in X total rolls
 
 
let streak = 0;
let totalRolls = 0;
 
while(streak <3){
  let roll = Math.floor(Math.random() * 6) + 1;
  totalRolls++;
  if (roll === 6){
    streak++;
  }
  else{
    streak =0;
  }
 
 
console.log(`Roll ${totalRolls}: ${roll} Streak of 6's: ${streak}`);

 
  }
 console.log(`Success! Got three 6's in ${totalRolls} total rolls.`);



console.log("__________________________________________________________");



 
// //    Task 11: Savings Goal Tracker
// //  Person saves $25 each week toward a $500 goal:
// //  Start with $0 saved
// // Keep adding $25 each week while total < $500
// //  Count the number of weeks
// //  Display weekly progress: "Week X: Saved $Y, Total: $Z"
// //  Final message: "Goal reached in X weeks!"
 
 
let weeklySaving = 25;
let goal = 500;
let totalSaved = 0;
let week = 0;

while (totalSaved < goal) {
  totalSaved += weeklySaving;
  week++;
  console.log(`Week ${week}: Saved $${weeklySaving}, Total: $${totalSaved}`);
}

console.log(`Goal reached in ${week} weeks!`);
 console.log("__________________________________________________________");

 

//
 
 
 
//  Task 12: Password Login System
//  User has 3 attempts to enter correct password "admin123":
//  Keep asking for password while attempts < 3 AND password is wrong
//  Count failed attempts
//  Give feedback after each wrong attempt
//  Stop when correct password entered or attempts exhausted
//  Display: "Access granted" or "Account locked after 3 failed attempts"
 
const correctPassword = "admin123";
let attempt = 1;
let enteredPassword = "";
 
 
while (attempt  < 3 && enteredPassword !== correctPassword) {
  enteredPassword =  ("Enter password")
 
  if (enteredPassword --- correctPassword) {
    console.log("Access granted");
   
  }
  else{
    attempt++;
    if (attempt <3) {
      console.log("wrong passwrod! Attemts left:" + (3 - attempt));
     
    }
 
  else {
    console.log("Account locked after 3 failed attempts");
   
  }
}
}
 

console.log(`Goal reached in ${week} weeks!`);


 

 /**
  * Task 13: Battery Drain Simulator
Phone battery starts at 100% and drains 15% per hour:
Keep draining battery while percentage > 0
Reduce battery by 15% each hour
Count hours passed
Display hourly status: "Hour X: Battery at Y%"
Final message: "Phone died after X hours"
  */


let battery = 100;
let drainRate = 15;
let hour = 0;

while(battery>0){

hour++;


battery-=drainRate;

let displayBattery = battery<0?0:battery;
console.log(`Hour ${hour}: Battery at ${displayBattery}%`)



}
console.log(`Phone died after ${hour} hours`);




console.log(`Goal reached in ${week} weeks!`);


console.log("_______________________________________");
/**
 * Task 14: Population Growth Calculator
City population of 10,000 grows 3% annually until it reaches 50,000:
Keep calculating new population while current < 50,000
Increase population by 3% each year
Count the number of years
Display yearly growth: "Year X: Population is Y"
Final message: "Population reached 50,000+ in X years"
 */
// Population Growth Calculator
let population = 10000;
let target = 50000;
let growthRate = 0.03;
let year = 0;

while (population < target) {
  year++;
  population += population * growthRate;
  console.log(`Year ${year}: Population is ${Math.floor(population)}`);
}

console.log(`Population reached 50,000+ in ${year} years`);


console.log("_______________________________________");

/**
 * 
 * Task 15: Menu-Driven Calculator
Display calculator menu until user chooses to exit:
Keep showing menu while user doesn't select "Exit"
Options: 1-Add, 2-Subtract, 3-Multiply, 4-Divide, 5-Exit
Perform selected operation with two numbers
Display result and return to menu
Stop only when user selects option 5
 */



function calculatorMenu() {
  let choice;

  while (true) {

    choice = parseInt(prompt(
      "Calculator Menu:\n" +
      "1. Add\n" +
      "2. Subtract\n" +
      "3. Multiply\n" +
      "4. Divide\n" +
      "5. Exit\n" +
      "Enter your choice (1-5):"
    ));

    if (choice === 5) {
      console.log("Exiting calculator... Goodbye!");
      break; 
    }

    let num1 = parseFloat(prompt("Enter first number:"));
    let num2 = parseFloat(prompt("Enter second number:"));
    let result;

    switch (choice) {
      case 1:
        result = num1 + num2;
        console.log(`${num1} + ${num2} = ${result}`);
        break;
      case 2:
        result = num1 - num2;
        console.log(`${num1} - ${num2} = ${result}`);
        break;
      case 3:
        result = num1 * num2;
        console.log(`${num1} × ${num2} = ${result}`);
        break;
      case 4:
        if (num2 !== 0) {
          result = num1 / num2;
          console.log(`${num1} ÷ ${num2} = ${result}`);
        } else {
          console.log("Error: Cannot divide by zero!");
        }
        break;
      default:
        console.log("Invalid choice! Please enter 1-5.");
    }
  }
}


calculatorMenu();
