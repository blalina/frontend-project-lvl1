import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');

export const checkForParity = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i <= 2; i += 1) {
    const getRandomNumber = () => Math.floor(Math.random() * 100);
    const number = getRandomNumber();
    console.log(`Question: ${number}`);
    const userResponse = readlineSync.question('Your answer: ');
    if (number % 2 === 0) {
      if (userResponse === 'yes') {
        console.log('Correct!');
      } else {
        console.log(`${userResponse} is wrong answer ;(. Correct answer was 'yes'.`);
        console.log(`Let's try again, ${userName}!`);
        return;
      }
    }
    if (number % 2 !== 0) {
      if (userResponse === 'no') {
        console.log('Correct!');
      } else {
        console.log(`${userResponse} is wrong answer ;(. Correct answer was 'no'.`);
        console.log(`Let's try again, ${userName}!`);
        return;
      }
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
