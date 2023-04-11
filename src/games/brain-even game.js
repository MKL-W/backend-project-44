import engaine from '../index.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const giveTaskAndTrueAnswer = () => {
  const task = Math.round(Math.random() * 100);

  const isEven = () => (task % 2 === 0);
  const check = () => {
    const result = isEven(task) ? 'yes' : 'no';
    return result;
  };

  const trueAnswer = check();
  return [task, trueAnswer];
};

export default () => engaine(rules, giveTaskAndTrueAnswer);
