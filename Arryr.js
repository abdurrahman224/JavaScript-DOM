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
  }else if(student[i].score <=60){
faliCount++;
    
  }else {

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




const product = [
  { id: 101, name: "Laptop", price: 1200, stock: 5 },
  { id: 102, name: "Mouse", price: 25, stock: 0 },
  { id: 103, name: "Keyboard", price: 75, stock: 12 },
  { id: 104, name: "Monitor", price: 300, stock: 1 }
]



product 