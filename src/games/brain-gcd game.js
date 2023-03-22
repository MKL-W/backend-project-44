export const rules = 'Find the greatest common divisor of given numbers.';

export const giveTaskAndTrueAnswer = () => {
  let randomNum1 = Math.round(Math.random() * 100);
  let randomNum2 = Math.round(Math.random() * 100);
  const final = [];
  const task = () => (`${randomNum1} ${randomNum2}`);

  const trueAnswer = () => {
    if (randomNum1 < randomNum2) {
      const tmp = randomNum1;
      randomNum1 = randomNum2;
      randomNum2 = tmp;
    }
    let ostatok1 = randomNum1 % randomNum2;
    if (ostatok1 === 0) {
      return randomNum2;
    }

    let ostatok2 = randomNum2 % ostatok1;
    let result = ostatok1 % ostatok2;

    if (ostatok1 === 1 || ostatok2 === 1) {
      return 1;
    }

    while (result !== 0) {
      ostatok1 = ostatok2;
      ostatok2 = result;
      result = ostatok1 % ostatok2;
    }
    return ostatok2;
  };

  final.push(task(), String(trueAnswer()));
  return final;
};
