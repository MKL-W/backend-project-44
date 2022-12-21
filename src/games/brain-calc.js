import readlineSync from 'readline-sync';
import { hello, areUserAnswerTry } from '../index.js';

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; // Максимум и минимум включаются
}

const brainCalc = () => {
  hello();

  for (let counter = 0; counter < 3; counter += 1) {
    //const randomNum1 = Math.round(Math.random() * 100);
    //const randomNum2 = Math.round(Math.random() * 100);
    const randomNum = Math.round(Math.random() * 100);
    const operators = ['+', '-', '*'];
    const randomOp = operators[getRandomIntInclusive(0, 2)];

    const taskForUser = () => `${randomNum} ${randomOp} ${randomNum}`;

    const trueAnswer = () => {
      switch (randomOp) {
        case '+':
          return randomNum1 + randomNum2;
        case '-':
          return randomNum1 - randomNum2;
        default:
          return randomNum1 * randomNum2;
      }
    };

    const userAnswer = readlineSync.question(`Question: ${taskForUser()}\nYour answer: `);
    if (Number(userAnswer) === trueAnswer()) {
      console.log('Correct!');
    } else {
      return console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${trueAnswer()}.\nLet's try again`);
    }
  }
  console.log('Congratulations, MKL!');
};

brainCalc();

/* const areUserAnswerTry = (taskForUser) => {
  const userAnswer = readlineSync.question(`Question: ${taskForUser}\nYour answer: `);
  if (Number(userAnswer) === trueAnswer()) {
    return console.log('Correct!');
  }
  console.log('unCorrect!');
}; */

/* hello();

console.log('What is the result of the expression?');

userAnswer(taskForUser()); */
