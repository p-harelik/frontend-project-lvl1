import getRandomNumber from '../get-random.js';
import runCommonLogic from '../index.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(number); i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const buildRound = () => {
  const questionNumber = getRandomNumber(1, 100);
  const correctAnswer = isPrime(questionNumber) ? 'yes' : 'no';
  return [questionNumber, correctAnswer];
};

export default () => {
  runCommonLogic(description, buildRound);
};
