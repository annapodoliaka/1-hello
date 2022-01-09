const RIGHT_ANSWER = 10;
const WRONG_ANSWER = 0;
const QUESTION_TYPE = {
  PROMPT : 'prompt',
  CONFIRM : 'confirm',
};
const CALLER = {
  [QUESTION_TYPE.PROMPT]: prompt,
  [QUESTION_TYPE.CONFIRM]: confirm,
};

const quiz = [
  {
    question: 'Сколько будет 2+2?',
    answer: '4',
    type: QUESTION_TYPE.PROMPT,
  },
  {
    question: 'Солнце встает на востоке?',
    answer: 'true',
    type: QUESTION_TYPE.CONFIRM,
  },
  {
    question: 'Сколько будет 5 / 0 ?',
    answer: 'Infinity',
    type: QUESTION_TYPE.PROMPT,
  },
  {
    question: 'Какого цвета небo?',
    answer: 'Голубого',
    type: QUESTION_TYPE.PROMPT,
  },
  {
    question: 'Какой правильный ответ на «Главный вопрос жизни, вселенной и всего такого»?',
    answer: '42',
    type: QUESTION_TYPE.PROMPT,
  },
]

runQuiz(quiz);

function runQuiz(quizQuestions) {
  let score = 0;

  quizQuestions.forEach((question) => {
    score += getUserAnswer(question) === question.answer ? RIGHT_ANSWER : WRONG_ANSWER 
  })

  showResult(score);
}

function getUserAnswer({ question,type }) {
  const fn = CALLER[type];

  return fn(question);
}

function showResult(score) {
  alert( `Ваш результат ${score} баллов!` );
}


