//import engaine from '../index.js';

export const rules = 'What number is missing in the progression?';

export const giveTaskAndTrueAnswer = () => {
  function getRandomIntInclusive(min, max) {
    // eslint-disable-next-line no-param-reassign
    min = Math.ceil(min);
    // eslint-disable-next-line no-param-reassign
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; // Максимум и минимум включаются
  }

  const randomNum1 = Math.round(Math.random() * 100);
  const randomNum2 = Math.round(Math.random() * 100);
  const progressionLength = getRandomIntInclusive(5, 10);
  const randomEl = getRandomIntInclusive(0, progressionLength);

  const result = [];

  const task = () => {
    const progression = [];
    for (let i = 0; i < progressionLength; i += 1) {
      progression.push(randomNum1 + randomNum2 * i);
    }
    progression[randomEl] = '..';
    return progression;
  };

  const trueAnswer = () => {
    if (randomEl === 0) {
      return task()[1] - (task()[2] - task()[1]);
    } if (randomEl === 1) {
      return task()[0] + (task()[3] - task()[2]);
    }
    return task()[randomEl - 1] + (task()[1] - task()[0]);
  };

  result.push(task(), trueAnswer());
  return result;
};

//console.log(giveTaskAndTrueAnswer());
//engaine(rules, giveTaskAndTrueAnswer);
