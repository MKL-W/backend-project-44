import engaine from '../index.js';
import getRandomIntInclusive from '../randomNumGenerator.js';

const rules = 'What number is missing in the progression?';

const createProgression = (firstElment, step, indexOfHiddenElement) => {
  const progression = [];
  for (let i = 0; i < 10; i += 1) {
    progression.push(firstElment + (i * step));
  }
  progression[indexOfHiddenElement] = '..';
  return progression;
};

const giveTaskAndTrueAnswer = () => {
  const firstElment = getRandomIntInclusive();
  const step = getRandomIntInclusive();
  const indexOfHiddenElement = getRandomIntInclusive(0, 9);

  const trueAnswer = firstElment + (step * indexOfHiddenElement);

  return [createProgression(firstElment, step, indexOfHiddenElement), String(trueAnswer)];
};

export default () => engaine(rules, giveTaskAndTrueAnswer);
