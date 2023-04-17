import startEngine from '../index.js';
import getRandomIntInclusive from '../randomNumGenerator.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  let result;
  const stopNum = num ** 0.5;
  for (let i = 2; i <= stopNum; i += 1) {
    result = num % i;
    if (result === 0) {
      return false;
    }
  }
  return true;
};

const giveTaskAndTrueAnswer = () => {
  const task = getRandomIntInclusive();
  const answer = isPrime(task) ? 'yes' : 'no';

  return [task, answer];
};

export default () => startEngine(rules, giveTaskAndTrueAnswer);
