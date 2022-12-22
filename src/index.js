import readlineSync from 'readline-sync';

export default (rules, giveTaskAnswer) => {
  console.log('Welcome to Brain Games!');
  const name = readlineSync.question('May I have you name? ');
  console.log(`Hello, ${name}!`);
  console.log(rules);
  for (let counter = 0; counter < 3; counter += 1) {
    const [task, trueAnswer] = giveTaskAnswer();
    const userAnswer = readlineSync.question(`Question: ${task}\nYour answer: `);
    if (Number(userAnswer) === trueAnswer) {
      console.log('Correct!');
    } else {
      return console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${trueAnswer}.\nLet's try again`);
    }
  }
  return console.log(`Congradulations, ${name}! `);
};
