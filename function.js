function greetUser(fname, lname) {
  console.log(`Hello there ${fname} ${lname} ! Welcome to the console.`);
}

// greetUser("Abdur", "Rahman" )
// greetUser("Abdur", "Rahman" )
// greetUser("Abdur", "Rahman" )
// greetUser("Abdur", "Rahman" )
// greetUser("Abdur", "Rahman" )

function addTwoNumbers(num1, num2) {
  console.log(`Fast Valou : ${num1} `);

  console.log(`Laet Valou : ${num2} `);

  return num1 + num2;
}

//  let result =  addTwoNumbers(20,30)
//  console.log("totale Value :" ,result);

let result = 0;

let doubleNumber = (num1) => {
  result = num1 * 2;

  return result;
};
let number1 = doubleNumber(4);
let number2 = doubleNumber(6);
// console.log(number1,number2);

function calculateTotal(Cost, taxRate = 0.05) {
  return (Cost += Cost * taxRate);
}
let total = calculateTotal(100);
// console.log(`Total : ${total}` );

let getStringLength = (str) => str.length;
console.log(getStringLength("LearnAboutFunction"));

function calculator(a, b) {
  let discountAmount = (a * b) / 100;
  let finalPrice = a - discountAmount;

  console.log("discount: ", a - finalPrice);

  return finalPrice; // Returns 187
}

function finalPrice() {
  let finalPrice = calculator(350, 15);
  console.log(" Final Price", finalPrice);
}
finalPrice();




function conditional  (age){


    if(age >=18){
        console.log(` is Adult: ${true}`);
        
    }else{

        console.log(`isAdult : ${false}`);
        
    }
}

conditional(17)


function generateRandomNum() {

let math = Math.floor(Math.random()*10+1)
return math


}


console.log(generateRandomNum());

 generateRandomNum = ()=>Math.floor(Math.random()*10+1)

console.log(generateRandomNum());



function boxVolume(l,w,x){

let volume = l*w*x
return volume;

}


console.log(boxVolume(5,2,3));





