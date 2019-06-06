'use strict';

var response;
var correctAnswers = ['yes', 'yes', 'no', 'yes', 'yes', 32, ['Texas', 'Louisiana']];
var userAnswers = [];
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
// for (var i = 0; i < questions.length; i++){
//   response = prompt(questions[i]).toLowerCase();
//   console.log('before changing the response:', response);
//   if(response === 'y'){
//     response = 'yes';
//     if(response === correctAnswers[i]){
//       alert('Correct!')
//     } else {
//       alert('Wrong!')
//     }
//   }
//   if(response === 'n'){
//     response = 'no';
//     if(response === correctAnswers[i]){
//       alert('Correct!');
//     } else {
//       alert('Wrong!');
//     }
//   }
//   console.log('after changing the response:', response);
//   userAnswers.push(response);
// }


// Numeric Question with 4 tries, indicate whether the guess is too high or too low
var tries = 4;
var ageQuestion;
while(tries > 0 && ageQuestion !== 32){
  ageQuestion = prompt('How old am I?');
  if(tries === 0){
    alert(`Sorry you have ${tries} left, next question!`);
    userAnswers.push(ageQuestion);
    console.log(userAnswers);
  } else if(ageQuestion > 32){
    tries--;
    alert(`Rude! Too high! Guess again, you have ${tries} more tries!`);
  } else if(ageQuestion < 32){
    tries--;
    alert(`Thanks! But too low! you have ${tries} more tries!`);
  } else {
    alert('Nice! You guessed correctly!');
    userAnswers.push(ageQuestion);
    console.log(userAnswers);
    tries = 0;
  }
}





// TODO: multiple correct answers to be picked, user gets 6 tries, displays all of the possible correct answers. Just have to guess one of the multiple choices available.
// var guesses = 6;
// var stateQuestion = prompt('Can you guess a state that I have lived in besides Washington?')
// while (guesses <= 6 ){
//   if(stateQuestion === 'Texas'){
//     alert(`Whoa! You're right, I've lived in ${stateQuestion} as well as Washington and ${correctAnswers[7][1]}`);
//     guesses--
//   } else if (stateQuestion === 'Louisiana'){
//     alert(`Whoa! You're right, I've lived in ${stateQuestion} as well as Washington and ${correctAnswers[7][0]}`);
//     guesses--
//   } else {
//     alert(`Wrong! Try again, you have ${guesses} guesses left`);
//   }
// }



// TODO: Fix this, bc the last question. Counts the number of correct answers
for (var i = 0; i < correctAnswers.length; i++){
  if(userAnswers[i] === correctAnswers[i]){
    correctCounter++;
  } 
}


// Checks to see how many the user got correct.
if(correctCounter === 7){
  alert(`Congratulations! You got ${correctCounter} out of 7 correct!`)
} else {
  alert(`You're not very good at this game...you only got ${correctCounter} out of 7 correct.`)
}



