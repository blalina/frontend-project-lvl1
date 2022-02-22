import gameLogic from '../index.js';

const getRandomNumber = () => Math.floor(Math.random() * 100);

const isPrime = (number) => {
  if (number < 2) {
    return 'no';
  }

  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) {
      return 'no';
    }
  }

  return 'yes';
};

const gameRules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const gameCheck = () => {
  const number = getRandomNumber();
  const question = `${number}`;
  const correctAnswer = isPrime(number);
  return [question, String(correctAnswer)];
};

const numberIsPrime = () => gameLogic(gameRules, gameCheck);

export default numberIsPrime;
