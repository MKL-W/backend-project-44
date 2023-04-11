import engaine from '../index.js';
import getRandomIntInclusive from '../randomNumGenerator.js';

const rules = 'What is the result of the expression?';

const mathLogic = (randomOp, randomNum1, randomNum2) => {
  switch (randomOp) {
    case '+':
      return randomNum1 + randomNum2;
    case '-':
      return randomNum1 - randomNum2;
    default:
      return randomNum1 * randomNum2;
  }
};

const giveTaskAndTrueAnswer = () => {
  const randomNum1 = getRandomIntInclusive();
  const randomNum2 = getRandomIntInclusive();
  const operators = ['+', '-', '*'];
  const randomOp = operators[getRandomIntInclusive(0, 2)];

  const trueAnswer = mathLogic(randomOp, randomNum1, randomNum2);

  return [(`${randomNum1} ${randomOp} ${randomNum2}`), String(trueAnswer)];
};

export default () => engaine(rules, giveTaskAndTrueAnswer);
