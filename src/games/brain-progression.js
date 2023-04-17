import startEngine from '../index.js';
import getRandomIntInclusive from '../randomNumGenerator.js';

const rules = 'What number is missing in the progression?';

const progressionLength = 6;

const createProgression = (firstElment, step, indexOfHiddenElement) => {
  const progression = [];
  for (let i = 0; i < progressionLength; i += 1) {
    progression.push(firstElment + (i * step));
  }
  progression[indexOfHiddenElement] = '..';
  return progression.join(' ');
};

const giveTaskAndTrueAnswer = () => {
  const firstElment = getRandomIntInclusive();
  const step = getRandomIntInclusive();
  const indexOfHiddenElement = getRandomIntInclusive(0, progressionLength - 1);

  const trueAnswer = firstElment + (step * indexOfHiddenElement);

  return [createProgression(firstElment, step, indexOfHiddenElement), String(trueAnswer)];
};

export default () => startEngine(rules, giveTaskAndTrueAnswer);
