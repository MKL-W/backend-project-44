//import engaine from '../index.js';

export const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export const giveTaskAndTrueAnswer = () => {
  const task = Math.round(Math.random() * 100);

  const trueAnswer = () => {
    const stopNumb = Math.round(task ** 0.5);
    //console.log(stopNumb);
    let result;
    for (let i = 2; i <= stopNumb; i += 1) {
      result = task % i;
      if (result === 0) {
        return 'no';
      }
    }
    return 'yes';
  };

  const finalResult = [];
  finalResult.push(task, trueAnswer());
  return finalResult;
};

//console.log(giveTaskAndTrueAnswer());
//engaine(rules, giveTaskAndTrueAnswer);
