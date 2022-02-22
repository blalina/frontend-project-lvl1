import gameLogic from '../index.js';

const getRandomNumber = () => Math.floor(Math.random() * 100);

const greatestCommonDivisor = (number1, number2) => {
  if (number2 !== 0) {
    const divisor = number1 % number2;
    return greatestCommonDivisor(number2, divisor);
  }
  return number1;
};

const gameRules = 'Find the greatest common divisor of given numbers.';

const gameCheck = () => {
  const numberOne = getRandomNumber();
  const numberTwo = getRandomNumber();
  const question = `${numberOne} ${numberTwo}`;
  const correctAnswer = greatestCommonDivisor(numberOne, numberTwo);
  return [question, String(correctAnswer)];
};

const gcdGame = () => gameLogic(gameRules, gameCheck);

export default gcdGame;
