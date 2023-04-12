import engaine from '../index.js';
import getRandomIntInclusive from '../randomNumGenerator.js';

const rules = 'Find the greatest common divisor of given numbers.';

const getNod = (num1, num2) => {
  if (num2 === 0) {
    return num1;
  }
  return getNod(num2, num1 % num2);
};

const giveTaskAndTrueAnswer = () => {
  const randomNum1 = getRandomIntInclusive();
  const randomNum2 = getRandomIntInclusive();

  const trueAnswer = () => getNod(randomNum1, randomNum2);

  return [(`${randomNum1} ${randomNum2}`), String(trueAnswer())];
};

export default () => engaine(rules, giveTaskAndTrueAnswer);
