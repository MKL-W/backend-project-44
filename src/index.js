import readlineSync from 'readline-sync';

export const hello = () => {
  console.log('Welcome to Brain Games!'); // приветствие
  const name = readlineSync.question('May I have you name? ');
  return console.log(`Hello, ${name}!`);
};

export const areUserAnswerTry = (taskForUser, trueAnswer) => {
  for (let counter = 0; counter < 3; counter += 1) {
    taskForUser();
    const userAnswer = readlineSync.question(`Question: ${taskForUser}\nYour answer: `);
    if (Number(userAnswer) === trueAnswer) {
      console.log('Correct!');
    } else {
      return console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${trueAnswer}.\nLet's try again`);
    }
  }
};

/* export const getUserAnswer = (taskForUser) => {
  const userAnswer = readlineSync.question(`Question: ${taskForUser}\nYour answer: `);
  return userAnswer;
};

const areUserAnswerTry = (getUserAnswer(), trueAnswer) => {
    const result = (Number(getUserAnswer()) === trueAnswer) ? 'correct' : 'unCorrect';
    return result;
}; */
