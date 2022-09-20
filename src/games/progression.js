import getRandomNumber from '../get-random.js';
import runCommonLogic from '../index.js';

const description = 'What number is missing in the progression?';

const makeProgression = (firstNumber, step, progressionLength) => {
  const result = [];
  for (let i = 0; i <= progressionLength; i += 1) {
    result.push(firstNumber + (step * i));
  }
  return result;
};

const buildRound = () => {
  const firstNumber = getRandomNumber(1, 50);
  const progressionLength = getRandomNumber(10, 20);
  const step = getRandomNumber(1, 10);
  const progressionValues = makeProgression(firstNumber, step, progressionLength);
  const hiddenIndex = getRandomNumber(1, progressionValues.length - 1);
  const correctAnswer = String(progressionValues[hiddenIndex]);
  progressionValues[hiddenIndex] = '..';
  const question = progressionValues.join(' ');
  return [question, correctAnswer];
};

export default () => {
  runCommonLogic(description, buildRound);
};
