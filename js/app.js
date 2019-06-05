'use strict';

var response;
var correctAnswers = ['yes', 'yes', 'no', 'yes', 'yes', 32, ['Texas', 'Louisiana']];
var userAnswers = []
var correctCounter = 0;

// Array for questions
var questions = [
  'I used to be a poker dealer. Y/N?',
  'I\'m so fit I ran a marathon. Y/N?',
  'I LOVE snowboarding! Y/N?',
  'I have jumped out of a plan before. Y/N?',
  'Here\'s an easy one for you, I LOVE the outdoors. Y/N?',
]

// Begin game
var username = prompt('Let\'s see if you know me! But first what\'s your name?');
if(username === 'null' || ''){
  username = 'Anonymous';
} 
alert(`Yay! Let's play ${username}!`);


// Gets responses from all questions
for (var i = 0; i < questions.length; i++){
  response = prompt(questions[i]).toLowerCase();
  console.log('before changing the response:', response)
  if(response === 'y'){
    response = 'yes'
  }
  if(response === 'n'){
    response = 'no'
  }
  console.log('after changing the response:', response)
  userAnswers.push(response);
}

// TODO: indicate whether the guess is too high or too low, 4 guesses
var numericQuestion = prompt('How old am I?') 
// TODO: multiple correct answers to be picked, user gets 6 tries, displays all of the possible correct answers.
var multiChoiceQuestion = prompt('Can you guess a state that I have lived in besides Washington?')




// Counts the number of correct answers

for (var i = 0; i < correctAnswers.length; i++){
  if(userAnswers[i] === correctAnswers[i]){
    correctCounter++;
  } 
}


var results = document.getElementById('result-message');

// Checks to see if all answers are correct and displays results
if(correctCounter === 5){
  alert('Congratulations! You got 5 out of 5 correct!')
  results.textContent = (`A little creepy how well you know me ${username}...`)
} else {
  alert('You\'re not very good at this game...')
  results.textContent = (`${username}, I can't say I'm not disappointed, you should study-up.`);
}



