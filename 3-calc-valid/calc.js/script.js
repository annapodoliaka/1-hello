const action = getAction ();

const firstNum = getNumber ('A');

const secondNum = getNumber ('B');

const result = calculate(firstNum, secondNum, action);

showResult (firstNum, secondNum, action, result)


function getAction () {
  let action;

  do {
    action = prompt( 'Please, enter what arithmetic action do you want to perform? (+ - / *)' );
  } while (!isActionValid(action));

  return action;
}


function getNumber(numberName) {
  let number; 

  do {
    number = Number(prompt(`Please, enter your number ${numberName}`));
  } while (!isNumberValid(number))

  return number;
}


function calculate(firstNum, secondNum, action) {
  switch (action) {
    case '+': return add(firstNum, secondNum); 
    case '-': return sub(firstNum, secondNum);
    case '/': return div(firstNum, secondNum);
    case '*': return mult(firstNum, secondNum);
    default: return 'Wrong action';
  }
}


function isActionValid(action) {
  return action === "+" || action === "-" || action === "/" || action === "*";
}

function isNumberValid(number) {
  return !isNaN(number);
}

function add(firstNum, secondNum) {
  return firstNum + secondNum;
}

function sub(firstNum, secondNum) {
  return firstNum - secondNum;
}

function div(firstNum, secondNum) {
  return firstNum / secondNum;
}

function mult(firstNum, secondNum) {
  return firstNum * secondNum;
}

function showResult (firstNum, secondNum, action, result) {
  console.log(`${firstNum} ${action} ${secondNum} = ${result}`);
}