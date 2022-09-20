import getRandomNumber from '../get-random.js';
import runCommonLogic from '../index.js';

const rulesOfTheGame = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 !== 0;

const buildRound = () => {
  const number = getRandomNumber(1, 100);
  const questionNumber = `${number}`;
  const correctAnswer = isEven(number) ? 'yes' : 'no';
  return [questionNumber, correctAnswer];
};
export default () => {
  runCommonLogic(rulesOfTheGame, buildRound);
};
