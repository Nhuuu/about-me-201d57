'use strict';

var response;
var correctAnswers = ['yes', 'yes', 'no', 'yes', 'yes', 32, ['TEXAS', 'LOUISIANA']];
var correctCounter = 0;

// Array for questions
var questions = [
  'I used to be a poker dealer. Y/N?',
  'I\'m so fit I ran a marathon. Y/N?',
  'I LOVE snowboarding! Y/N?',
  'I have jumped out of a plan before. Y/N?',
  'Here\'s an easy one for you, I LOVE the outdoors. Y/N?',
];

// Begin game
var username = prompt('Let\'s see if you know me! But first, what\'s your name?');
alert(`Yay! Let's play ${username}!`);


// Gets responses from the five questions and display their results
for (var i = 0; i < questions.length; i++){
  response = prompt(questions[i]).toLowerCase();
  console.log('before changing the response:', response);
  if(response === 'y'){
    response = 'yes';
    if(response === correctAnswers[i]){
      alert('Correct!')
      correctCounter++;
    } else {
      alert('Wrong!')
    }
  }
  if(response === 'n'){
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


// Numeric Question with 4 tries, indicate whether the guess is too high or too low
var tries = 4;
var ageQuestion;
while(tries > 0 && ageQuestion !== 32){
  ageQuestion = prompt('How old am I?');
  if(tries === 0){
    alert(`Sorry you have ${tries} left, next question!`);
  } else if(ageQuestion > 32){
    tries--;
    alert(`Rude! Too high! Guess again, you have ${tries} more tries!`);
  } else if(ageQuestion < 32){
    tries--;
    alert(`Thanks! But too low! you have ${tries} more tries!`);
  } else {
    alert('Nice! You guessed correctly!');
    correctCounter++;
    tries = 0;
  }
}



// Multiple correct answers to be picked, user gets 6 guesses, display all of the possible correct answers.
var guesses = 6;
var stateQuestion;
while (guesses > 0){
  stateQuestion = prompt('Can you guess a state that I have lived in besides WASHINGTON?').toUpperCase();
  for(var i = 0; i < correctAnswers[6].length; i++){
    if(stateQuestion === correctAnswers[6][i]){
      alert(`Whoa! You're right, I've lived in WASHINGTON, as well as these states: ${correctAnswers[6]}`);
      correctCounter++;
      guesses = 0;
      break;
    } else {
      alert(`Wrong! Try again, you have ${guesses} guesses left.`);
      guesses--;
    }
  }
}


// Checks to see how many the user got correct.
if(correctCounter === 7){
  alert(`Congratulations, ${username}! You got ${correctCounter} out of 7 correct!`)
} else {
  alert(`Womp, womp. ${username}, you only got ${correctCounter} out of 7 correct.`)
}



