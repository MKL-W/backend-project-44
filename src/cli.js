import readlineSync from 'readline-sync';

export default () => {
  const name = readlineSync.question('May I have you name? ');
  return console.log(`Hello, ${name}!`);
};
