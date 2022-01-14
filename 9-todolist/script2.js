const ul = document.querySelector('#list');
const input = document.querySelector('#myInput');
const button = document.querySelector('#btn');

button.addEventListener('click', onButtonClick);

function onButtonClick() {
  const message = getTodoMessage();

  if (!isMessageValid(message)) {
    showError();
    return;
  } 
  
  addTodoItem(message);
  clear();
}

function getTodoMessage() {
  return input.value;
}

function isMessageValid(message) {
  return message.trim() !== '';
}  
  
function showError() {
  alert('Enter item!');
}

function addTodoItem(message) {
  const li = document.createElement('li');
  li.textContent = message;

  ul.append(li);
}

function clear() {
  input.value = '';
}