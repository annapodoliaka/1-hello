const ACTION_LIST = ['+', '-', '/', '*']
const ACTIONS = {'+': add, '-': sub, '/': div, '*': mult}

const action = getAction();
const operandsCount = getOperandCount();
const operands = getOperands(operandsCount);
const result = calculate(operands, action);

showResult (operands, action, result)


function getAction() {
  let action;

  do {
    action = prompt('Please, enter what arithmetic action do you want to perform? (+ - / *)');
  } while (!isActionValid(action));

  return action;
}

function isActionValid(action) {
  return ACTION_LIST.includes('+');
}


function getOperandCount() {
  let count;

  do {
    count = prompt('Enter operands count');
  } while (!isOperandsCountValid(count));

  return count;
}

function isOperandsCountValid(count) {
  return !isNaN(count) && count >=2 && count <=4;
}


function getOperands(count) {
  const nums = [];

  for (let i = 1; i <= count; i++) {
    nums.push(getOperant(i));
  }

  return nums;
}


function getOperant(operantName) {
  let operant; 

  do {
    operant = Number(prompt(`Enter operant ${operantName}`));
  } while (!isOperantValid(operant))

  return operant;
}

function isOperantValid(operant) {
  return !isNaN(operant);
}


function calculate(operands, action) {
  const mathFunk = ACTIONS[action];

  return operands.reduce((acc, operand) => mathFunk(acc, operand));
}


function add(operandA, operandB) {
  return operandA + operandB;
}

function sub(operandA, operandB) {
  return operandA - operandB;
}

function div(operandA, operandB) {
  return operandA / operandB;
}

function mult(operandA, operandB) {
  return operandA * operandB;
}

function showResult (operands, action, result) {
  const formula = operands.join(`${action}`);
  alert(`${formula} = ${result}`);
}








