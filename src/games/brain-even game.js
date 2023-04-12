import engaine from '../index.js';
import getRandomIntInclusive from '../randomNumGenerator.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => (num % 2 === 0);

const giveTaskAndTrueAnswer = () => {
  const task = getRandomIntInclusive();
  const trueAnswer = () => (isEven(task) ? 'yes' : 'no');
  return [task, trueAnswer()];
};

export default () => engaine(rules, giveTaskAndTrueAnswer);
