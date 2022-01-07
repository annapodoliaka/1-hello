// const quiz = [ 
//   { question: 'Сколько будет 2+2?', answer: 4, type: 'prompt' },
//   { question: 'Солнце встает на востоке?', answer: true, type: 'confirm' },
//   { question: 'Сколько будет 5 / 0 ?', answer: NaN, type: 'prompt' },
//   { question: 'Какого цвета небo?', answer: 8, type: 'prompt' },
//   { question: 'Какой правильный ответ на «Главный вопрос жизни, вселенной и всего такого»?', answer: 42, type: 'prompt' }  
// ];

// let points = 0;

// const receiveAnswer = question => {
// let checkType;

// if (question.type === 'prompt') {
//   checkType = prompt;
// } else if (question.type === 'confirm') {
//   checkType = confirm;
// }

// return(checkType(question.question) == question.answer);
// }

// quiz.forEach(question => {
// if (receiveAnswer(question)) {
// points += 10;
// }
// })

// if (points < 40) {
//   alert( `${points} баллов, ты можешь лучше!` );
// } else {
//   alert( `${points} баллов, так держать!` ); 
// }

let arr = [34, 300000, 529, 12826541, 89.7, 1243, 2000, 55]; 

function max (arr){
  let max = arr[1];

  for(i = 1; i < arr.length; i + 1){
    if((arr[i]) > max){
      max = arr[i]; 
    } 
  }

  return max;
}

console.log(max(arr));