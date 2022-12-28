// import engaine from '../index.js';

export const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

export const giveTaskAndTrueAnswer = () => {
  const task = Math.round(Math.random() * 100);

  const trueAnswer = (task % 2 === 0) ? 'yes' : 'no';

  const finalResult = [];
  finalResult.push(task, trueAnswer);
  return finalResult;
};

// console.log(giveTaskAndTrueAnswer());
// engaine(rules, giveTaskAndTrueAnswer);
