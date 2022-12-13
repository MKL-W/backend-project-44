#!/usr/bin/env node

import readlineSync from 'readline-sync';

console.log('Welcome to Brain Games!'); // приветствие
const name = readlineSync.question('May I have you name? ');
console.log(`Hello, ${name}!\nAnswer "yes" if the number is even, otherwise answer "no".`);

const evenGame = () => {
  for (let counter = 0; counter < 3; counter += 1) { // игра
    const randomDigit = Math.round(Math.random() * 100);
    const userAnswer = readlineSync.question(`Question: ${randomDigit}\nYour answer: `);
    const rightAnswer = (userAnswer === 'yes') ? 'no' : 'yes'; // правильный ответ в случае неверного ответа от пользователя
    if ((randomDigit % 2 === 0 && userAnswer === 'yes') || (randomDigit % 2 !== 0 && userAnswer === 'no')) { // условие правильного ответа
      console.log('Correct!');
    } else {
      return console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${rightAnswer}.\nLet's try again, ${name}`); // неверный ответ
    }
  }
  return console.log(`Congratulations, ${name}!`); // поздравлямба
};

evenGame();
