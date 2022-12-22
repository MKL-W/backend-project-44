import engaine from '../index.js';

const rules = 'What is the result of the expression?';

const giveTaskAndTrueAnswer = () => {
  function getRandomIntInclusive(min, max) {
    // eslint-disable-next-line no-param-reassign
    min = Math.ceil(min);
    // eslint-disable-next-line no-param-reassign
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; // Максимум и минимум включаются
  }

  const randomNum1 = Math.round(Math.random() * 100);
  const randomNum2 = Math.round(Math.random() * 100);
  const operators = ['+', '-', '*'];
  const randomOp = operators[getRandomIntInclusive(0, 2)];
  const result = [];
  const task = () => (`${randomNum1} ${randomOp} ${randomNum2}`);

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

  result.push(task(), trueAnswer());
  return result;
};

engaine(rules, giveTaskAndTrueAnswer);
