import readLineSync from 'readline-sync';

const greetUSer = () => {
  console.log('Welcome to the Brain Games!');
  const name = readLineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
};

export { greetUser };
