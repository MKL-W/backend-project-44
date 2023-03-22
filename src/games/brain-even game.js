export const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

export const giveTaskAndTrueAnswer = () => {
  const task = Math.round(Math.random() * 100);

  const isEven = () => (task % 2 === 0);
  const check = () => {
    const result = isEven(task) ? 'yes' : 'no';
    return result;
  };

  const trueAnswer = check();
  const finalResult = [];
  finalResult.push(task, trueAnswer);
  return finalResult;
};
