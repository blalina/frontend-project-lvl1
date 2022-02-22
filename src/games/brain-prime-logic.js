import gameLogic from '../index.js';

const getRandomNumber = () => Math.floor(Math.random() * 100);

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }

  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
};

const gameRules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const gameCheck = () => {
  const number = getRandomNumber();
  const question = `${number}`;
  const correctAnswer = isPrime(number) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const numberIsPrime = () => gameLogic(gameRules, gameCheck);

export default numberIsPrime;
