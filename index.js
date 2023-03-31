const readline = require("readline-sync");
const ARITHMETIC_MODE = '1';
const VOWEL_COUNTING_MODE = '2';

function welcomeMessage(){
console.log("Welcome to the calculator!");
}

function askAQuestion(i) {
  console.log(i);
  return readline.prompt();
}

function whichMode() {
  return askAQuestion(`Which calculator mode do you want?
  1) arithmetic
  2) Vowel counting`);
}

function getOperator() {
  return askAQuestion(`Please enter an operator:`);
}

function getHowManyTimes(operator) {
  return askAQuestion(`How many numbers do you want to ${operator}?`);
}

function getNumbers(times) {
  let listOfNumbers = [];
  for (let i = 1; i <= times; i++) {
    let number = askAQuestion(`Please enter number ${i}:`);
  
    while (isNaN(+number)) {
      number = askAQuestion(`Please enter a valid number ${i};`);
    }
  
    listOfNumbers.push(+number);
  }
  return listOfNumbers;
}

function performArithmeticCalculation() {
  let operator = getOperator();
  let times = getHowManyTimes(operator);
  let listOfNumbers = getNumbers(times);

  let sum = listOfNumbers[0];
  switch (operator) {
    case "+":
      for (let i = 1; i < listOfNumbers.length; i++) {
        sum += listOfNumbers[i];
      }
      console.log(`The answer is ${sum}`);
      break;

    case "-":
      for (let i = 1; i < listOfNumbers.length; i++) {
        sum -= listOfNumbers[i];
      }
      console.log(`The answer is ${sum}`);
      break;

    case "*":
      for (let i = 1; i < listOfNumbers.length; i++) {
        sum *= listOfNumbers[i];
      }
      console.log(`The answer is ${sum}`);
      break;

    case "/":
      for (let i = 1; i < listOfNumbers.length; i++) {
        sum /= listOfNumbers[i];
      }
      console.log(`The answer is ${sum}`);
      break;
  }
}

function getAString() {
  return askAQuestion(`Please enter a string:`);
}

function performVowelCountingCalculation() {
  const myString = getAString();
  const resultOfVowels = {
    numberOfA: myString.split("").filter(el => /a/i.test(el)).length,
    numberOfE: myString.split("").filter(el => /e/i.test(el)).length, 
    numberOfI: myString.split("").filter(el=>/i/i.test(el)).length, 
    numberOfO: myString.split("").filter(el=>/o/i.test(el)).length, 
    numberOfU: myString.split("").filter(el=>/u/i.test(el)).length
  }

  console.log(`
  The vowel counts are:
  A: ${resultOfVowels.numberOfA} 
  E: ${resultOfVowels.numberOfE}
  I: ${resultOfVowels.numberOfI}
  O: ${resultOfVowels.numberOfO}
  U: ${resultOfVowels.numberOfU}
  `);
}

console.log(welcomeMessage())

while (true) { 
  const calculationMode = whichMode();
  if (calculationMode === ARITHMETIC_MODE) {
    performArithmeticCalculation();
  } else if (calculationMode === VOWEL_COUNTING_MODE) {
    performVowelCountingCalculation();
  }
}


