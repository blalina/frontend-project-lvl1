import gameLogic from '../index.js';

function generateRandomOpponentMove() {
  const availableMoves = ['+', '-', '*'];
  const randomNumber = Math.floor(Math.random() * availableMoves.length);
  const opponentMove = availableMoves[randomNumber];

  return opponentMove;
}

// eslint-disable-next-line consistent-return
function resultOfTheExpression(number1, number2, signs) {
  // eslint-disable-next-line default-case
  switch (signs) {
    case '+': {
      return number1 + number2;
    }
    case '-': {
      return number1 - number2;
    }
    case '*': {
      return number1 * number2;
    }
  }
}

const getRandomNumber = () => Math.floor(Math.random() * 100);

const gameRules = 'What is the result of the expression?';

const gameCheck = () => {
  const numberOne = getRandomNumber();
  const numberTwo = getRandomNumber();
  const operations = generateRandomOpponentMove();
  const question = `${numberOne} ${operations} ${numberTwo}`;
  const correctAnswer = resultOfTheExpression(numberOne, numberTwo, operations);
  return [question, String(correctAnswer)];
};

const calculatorGame = () => gameLogic(gameRules, gameCheck);

export default calculatorGame;
