import getRandomNumber from '../get-random.js';
import runCommonLogic from '../index.js';

const description = 'What is the result of the expression?';

const calculate = (number1, number2, operator) => {
  switch (operator) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    case '*':
      return number1 * number2;
    default:
      throw new Error(`Unknown operator: ${operator}`);
  }
};

const buildRound = () => {
  const operators = ['+', '-', '*'];
  const number1 = getRandomNumber(1, 100);
  const number2 = getRandomNumber(1, 100);
  const operator = operators[getRandomNumber(0, operators.length - 1)];
  const question = `${number1}${operator}${number2}`;
  const correctAnswer = String(calculate(number1, number2, operator));
  return [question, correctAnswer];
};

export default () => {
  runCommonLogic(description, buildRound);
};
