export const rules = 'What is the result of the expression?';

export const giveTaskAndTrueAnswer = () => {
  const getRandomIntInclusive = (min, max) => {
    if ((min === undefined) || (max === undefined)) {
      return Math.round(Math.random() * 100);
    }
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const randomNum1 = getRandomIntInclusive();
  const randomNum2 = getRandomIntInclusive();
  const operators = ['+', '-', '*'];
  const randomOp = operators[getRandomIntInclusive(0, 2)];

  const task = () => (`${randomNum1} ${randomOp} ${randomNum2}`);

  const mathLogic = () => {
    switch (randomOp) {
      case '+':
        return randomNum1 + randomNum2;
      case '-':
        return randomNum1 - randomNum2;
      default:
        return randomNum1 * randomNum2;
    }
  };

  const result = [];
  const trueAnswer = mathLogic();

  result.push(task(), String(trueAnswer));
  return result;
};
