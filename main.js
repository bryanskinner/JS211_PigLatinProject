'use strict';

// brings in the assert module for unit testing
const assert = require('assert');
// brings in the readline module to access the command line
const readline = require('readline');
// use the readline module to print out to the command line
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


const pigLatin = (word) => {

  word = word.trim().toLowerCase();

  //* finding index of first vowel in string
  const firstVowelIndex = word.search(/[a,e,i,o,u]/g);

  //* grabbing the letters from the beggining of the word to the first vowel
  const trimLetters = word.slice(0, firstVowelIndex);

  //? console.log(trimLetters)
  
  //* grabbing the letter from the first vowels to the end of the word
  const trimmedWord = word.slice(firstVowelIndex);
  console.log(trimmedWord)
  
  //* if the index of the first vowel of the string is 0 we add yay to the end 
  if (firstVowelIndex === 0) {
    return `${trimmedWord}${trimLetters}yay`

    //* if the index of the first vowel is not 0 we add ay
  } else {
    return `${trimmedWord}${trimLetters}ay`
  }
  


  // let pigLatinWord = '';
  // let firstLetter = word[0];
  

  // if (['a', 'e', 'i', 'o', 'u'].includes(firstLetter)) {
  //   pigLatinWord = word + 'yay';
  // } else {
  //   let restOfWord = word.slice(1);
  //   pigLatinWord = restOfWord + firstLetter + 'ay';
  // }
  
  // return pigLatinWord;

}


// the first function called in the program to get an input from the user
// to run the function use the command: node main.js
// to close it ctrl + C
const getPrompt = () => {
  rl.question('word ', (answer) => {
    console.log( pigLatin(answer) );
    getPrompt();
  });
}

// Unit Tests
// to use them run the command: npm test main.js
// to close them ctrl + C
if (typeof describe === 'function') {

  describe('#pigLatin()', () => {
    it('should translate a simple word', () => {
      assert.equal(pigLatin('car'), 'arcay');
      assert.equal(pigLatin('dog'), 'ogday');
    });
    it('should translate a complex word', () => {
      assert.equal(pigLatin('create'), 'eatecray');
      assert.equal(pigLatin('valley'), 'alleyvay');
    });
    it('should attach "yay" if word begins with vowel', () => {
      assert.equal(pigLatin('egg'), 'eggyay');
      assert.equal(pigLatin('emission'), 'emissionyay');
    });
    it('should lowercase and trim word before translation', () => {
      assert.equal(pigLatin('HeLlO '), 'ellohay');
      assert.equal(pigLatin(' RoCkEt'), 'ocketray');
    });
  });
} else {

  getPrompt();

}






// **********
//   HINTS
// **********

// break your code into pieces and focus on one piece at a time...
// 1. if word begins with a vowel send to one function: adds "yay"
// 2. if word begins with a consonant send to another function: splices off beginning, returns word with new ending.
// 3. if multiple words, create array of words, loop over them, sending them to different functions and creating a new array with the new words.
