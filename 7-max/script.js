function max(arr) {
  let max = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i]
    }
  }
  
  return max;
}

console.log(max([10]), 'one element test, must return 10');
console.log(max([3, 11, 39, 7, 19]), '5 elements test, must return 39');
console.log(max([11, 19]), '2 elements test, must return 19');
console.log(max([-5, -15]), '2 elements test, must return -5');



function max(arr) {
  if (arr.length === 1) {
    return arr[0];
  }

  const firstEl = arr.shift();
  const secondEl = max(arr);

  return firstEl > secondEl ? firstEl : secondEl;
}

console.log(max([8]), 'one element test, must return 8');
console.log(max([1, 8, 37, 5, 17]), '5 elements test, must return 37');
console.log(max([8, 17]), '2 elements test, must return 17');
console.log(max([-8, -17]), '2 elements test, must return -8');