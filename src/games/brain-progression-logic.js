import gameLogic from '../index.js';

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const generateProgression = (progressionStart, progressionStep, progressionLength) => {
  const massive = [];
  for (let i = 0; i <= progressionLength; i += 1) {
    const result = progressionStart + (i * progressionStep);
    massive.push(result);
  }
  return massive;
};

const gameRules = 'What number is missing in the progression?';

const gameCheck = () => {
  const firstNumber = getRandomNumber(1, 20);
  const step = getRandomNumber(2, 7);
  const randomLength = getRandomNumber(5, 9);

  const progression = generateProgression(firstNumber, step, randomLength);
  const randomIndex = getRandomNumber(0, progression.length - 1);

  const correctAnswer = `${progression[randomIndex]}`;
  progression[randomIndex] = '..';
  const question = progression.join(' ');
  return [question, correctAnswer];
};

const arithmeticProgressionGame = () => gameLogic(gameRules, gameCheck);

export default arithmeticProgressionGame;
