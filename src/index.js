import readlineSync from 'readline-sync';

export default (rules, giveTaskAndTrueAnswer) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(rules);
  const tryCounter = 3;
  for (let counter = 0; counter < tryCounter; counter += 1) {
    const [task, trueAnswer] = giveTaskAndTrueAnswer();
    console.log(`Question: ${task}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if ((userAnswer) !== trueAnswer) {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${trueAnswer}`);
      return console.log("'Let's try again");
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}! `);
};
