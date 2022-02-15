import readlineSync from 'readline-sync';

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

export const calculatorGameRules = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('What is the result of the expression?');

  for (let i = 0; i <= 2; i += 1) {
    const numberOne = getRandomNumber();
    const numberTwo = getRandomNumber();
    const operations = generateRandomOpponentMove();

    console.log(`Question: ${numberOne} ${operations} ${numberTwo}`);
    const correctAnswer = resultOfTheExpression(numberOne, numberTwo, operations);
    const userResponse = readlineSync.question('Your answer: ');
    if (correctAnswer === Number(userResponse)) {
      console.log('Correct!');
    } else {
      console.log(`${userResponse} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
