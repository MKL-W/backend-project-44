import startEngine from '../index.js';
import getRandomIntInclusive from '../randomNumGenerator.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => (num % 2 === 0);

const giveTaskAndTrueAnswer = () => {
  const task = getRandomIntInclusive();
  const answer = isEven(task) ? 'yes' : 'no';
  return [task, answer];
};

export default () => startEngine(rules, giveTaskAndTrueAnswer);
