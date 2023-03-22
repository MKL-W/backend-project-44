export const rules = 'What number is missing in the progression?';

export const giveTaskAndTrueAnswer = () => {
  const getRandomIntInclusive = (min, max) => {
    if ((min === undefined) || (max === undefined)) {
      return Math.round(Math.random() * 100);
    }
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const randomNum1 = getRandomIntInclusive();
  const randomNum2 = getRandomIntInclusive();
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

  result.push(task(), String(trueAnswer()));
  return result;
};
