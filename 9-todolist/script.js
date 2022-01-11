function onBtnClick() {
  const li = document.createElement('li');
  const inputValue = document.getElementById('myInput').value;
  const text = document.createTextNode(inputValue);

  li.append(text);
  if(inputValue == "") {
    alert("Enter item!");
  } else {
    document.querySelector('#list').append(li);
  }

  document.getElementById('myInput').value = "";
}
