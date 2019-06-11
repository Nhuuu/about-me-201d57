'use strict';

var response;
var correctAnswers = ['yes', 'yes', 'no', 'yes', 'yes', 32, ['TEXAS', 'LOUISIANA']];
var correctCounter = 0;

// Array for questions
var questions = [
  'I used to be a poker dealer. Y/N?',
  'I have run a full marathon before. Y/N?',
  'I LOVE snowboarding! Y/N?',
  'I have jumped out of a plan before. Y/N?',
  'My favorite color is blue. Y/N?'
];

// Begin game
var username = prompt('Let\'s see if you know me! But first, what\'s your name?');
alert(`Yay! Let's play ${username}!`);

// Gets responses from the five questions and display their results
var fiveInitialQuestions = function() {
  for (var i = 0; i < questions.length; i++){
    response = prompt(questions[i]).toLowerCase();
    console.log('before changing the response:', response);
    if(response === 'y' || response ==='yes'){
      response = 'yes';
      if(response === correctAnswers[i]){
        alert('Correct!');
        correctCounter++;
      } else {
        alert('Wrong!');
      }
    }
    if(response === 'n' || response === 'no'){
      response = 'no';
      if(response === correctAnswers[i]){
        alert('Correct!');
        correctCounter++;
      } else {
        alert('Wrong!');
      }
    }
    console.log('after changing the response:', response);
  }
}

fiveInitialQuestions();

// Numeric Question with 4 tries, indicate whether the guess is too high or too low
var tries = 4;
var ageAnswer;

var ageQuestion = function() {
  while(tries > 0){
    ageAnswer = prompt('How old am I?');
    if(parseInt(ageAnswer) === 32){
      alert('Nice! You guessed correctly!');
      correctCounter++;
      tries = 0;
    } else if(parseInt(ageAnswer) > 32){
      tries--;
      alert(`Rude! Too High, you have ${tries} left.`);
    } else if(parseInt(ageAnswer) < 32){
      tries--;
      alert(`Thanks, but that's too low, you have ${tries} left.`);
    } else {
      tries--;
      alert(`Wrong! you have ${tries} left.`);
    };
  };
};

ageQuestion();

// Multiple correct answers to be picked, user gets 6 guesses, display all of the possible correct answers.
var guesses = 6;
var stateAnswer;

var stateQuestion = function() {
  while (guesses > 0){
    stateAnswer = prompt('Can you guess a state that I have lived in besides WASHINGTON?').toUpperCase();
    if(stateAnswer === correctAnswers[6][0] || stateAnswer === correctAnswers[6][1]){
      alert(`Whoa! You're right, I've lived in WASHINGTON, as well as these states: ${correctAnswers[6]}`);
      correctCounter++;
      guesses = 0;
      break;
    } else {
      guesses--;
      if(guesses === 0){
        alert('Sorry, you got this question wrong, I\'ve lived in ' + correctAnswers[6][0] + ' and ' + correctAnswers[6][1] + '.')
      } else {
        alert(`Wrong! Try again, you have ${guesses} guesses left.`);
      }
    };
  };
};

stateQuestion();

// Checks to see how many the user got correct.
var checkWinConditions = function() {
  if(correctCounter === 7){
    alert(`Congratulations, ${username}! You got ${correctCounter} out of 7 correct!`);
  } else {
    alert(`Womp, womp. ${username}, you only got ${correctCounter} out of 7 correct.`);
  }
}

checkWinConditions();
