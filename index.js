const CollatzArray = [];
//User has to input a number.
console.log('Input a number greater than 1.')
let userInput = prompt('What number do you want to find the Collatz Conjecture of?');
const startingNum = (userInput) => {
  if (userInput >= 1) {
    do {
      CollatzArray.push(userInput);
      //If the number is even, divide it by two.
      if (userInput % 2 === 0) {
        userInput /= 2;

        //If the number is odd, triple it and add one.
      } else {
        userInput = userInput * 3 + 1;
      }
    } while (userInput !== 1)
    CollatzArray.push(1);
    return CollatzArray;
  } else {
    console.log('Your input is invalid, put in a number greater than 1.');
  }
}
//Return the CollatzArray with all the numbers.
console.log(`
The Collatz Conjecture of ${userInput} is ${startingNum(userInput)}.`);