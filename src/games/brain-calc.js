import engaine from '../index.js';

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; // Максимум и минимум включаются
}

const randomNum1 = Math.round(Math.random() * 100);
const randomNum2 = Math.round(Math.random() * 100);
const operators = ['+', '-', '*'];
const randomOp = operators[getRandomIntInclusive(0, 2)];

const rules = 'What is the result of the expression?';
const taskForUser = `${randomNum1} ${randomOp} ${randomNum2}`;

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

engaine(rules, taskForUser, trueAnswer());