export const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export const giveTaskAndTrueAnswer = () => {
  const task = Math.round(Math.random() * 100);

  const trueAnswer = () => {
    const isPrime = () => {
      let result;
      const stopNum = Math.round(task ** 0.5);
      for (let i = 2; i <= stopNum; i += 1) {
        result = task % i;
        if (result === 0) {
          return false;
        }
      }
      return true;
    };
    const check = () => {
      const result = isPrime(task) ? 'yes' : 'no';
      return result;
    };
    return check();
  };
  const finalResult = [];
  finalResult.push(task, trueAnswer());
  return finalResult;
};
