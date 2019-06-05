'user strict';

var response;
var correctAnswers = ['yes', 'yes', 'no', 'yes', 'yes'];
var userAnswers = []
var correctCounter = 0;

// Array for questions
var questions = [
  'First truth/lie: I used to be a poker dealer, Y/N?',
  'Second truth/lie: I\'m so fit I ran a marathon. Y/N?',
  'Third truth/lie: Just like the rest of the PNW, I LOVE snowboarding! Y/N?',
  'Fourth truth/lie: I have jumped out of a plan before. Y/N?',
  'Fifth truth/lie: Here\'s an easy one for you, because you\'re not so good at this game, I LOVE the outdoors. Y/N?'
]

// Begin game
var username = prompt('Let\'s play four truths and a lie! But first what\'s your name?');
if(username === 'null' || ''){
  username = 'Anonymous';
} 
alert(`Yay! Let's play ${username}, I'm pretty cool, you'll see!`);


// Gets responses from all questions
var getAnswers = function() {
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
}
getAnswers();

// Counts the number of correct answers
var counter = function() {
  for (var i = 0; i < correctAnswers.length; i++){
    if(userAnswers[i] === correctAnswers[i]){
      correctCounter++;
    } 
  }
}
counter();


var results = document.getElementById('result-message');

// Checks to see if all answers are correct and displays results
var checkForWin = function(){
  if(correctCounter === 5){
    alert('Congratulations! You got 5 out of 5 correct!')
    results.textContent = (`A little creepy how well you know me ${username}...`)
  } else {
    alert('You\'re not very good at this game...')
    results.textContent = (`${username}, I can't say I'm not disappointed, you should study-up.`);
  }
}

checkForWin();