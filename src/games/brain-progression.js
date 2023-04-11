import engaine from '../index.js';
import getRandomIntInclusive from '../randomNumGenerator.js';

const rules = 'What number is missing in the progression?';

const giveTaskAndTrueAnswer = () => {
  const randomNum1 = getRandomIntInclusive();
  const randomNum2 = getRandomIntInclusive();
  const progressionLength = getRandomIntInclusive(5, 10);
  const randomEl = getRandomIntInclusive(0, progressionLength);

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

  return [task(), String(trueAnswer())];
};

export default () => engaine(rules, giveTaskAndTrueAnswer);
