import startEngine from '../index.js';
import getRandomIntInclusive from '../randomNumGenerator.js';

const rules = 'Find the greatest common divisor of given numbers.';

const gcd = (num1, num2) => {
  if (num2 === 0) {
    return num1;
  }
  return gcd(num2, num1 % num2);
};

const giveTaskAndTrueAnswer = () => {
  const randomNum1 = getRandomIntInclusive();
  const randomNum2 = getRandomIntInclusive();

  return [(`${randomNum1} ${randomNum2}`), String(gcd(randomNum1, randomNum2))];
};

export default () => startEngine(rules, giveTaskAndTrueAnswer);
