/* eslint-disable no-unused-vars */
'use strict';

let yourName = prompt('What is your Name');
alert(yourName + ' Welcome to my website');
let isMarried = prompt('Please answer this question by typing y/n or yes/no.\n Am I Married ?').toLowerCase();
let loveProgramming = prompt('Please answer this question by typing  y/n or yes/no.\n Do I love programming ?').toLowerCase();
let speakEnglish = prompt('Please answer this question by typing  y/n or yes/no.\n Do I speak English ?').toLowerCase();
let preferMansaf = prompt('Please answer this question by typing  y/n or yes/no.\n Do I prefer mansaf ?').toLowerCase();
let haveTawjihi = prompt('Please answer this question by typing  y/n or yes/no.\n Do I have tawjihi certificate ?').toLowerCase();
let myAge;

let correctAnswers = 0;
// let isEnteredNumber = false;




// console.log('Are you Married ?'+isMarried);

// console.log('Do you love programming ?'+loveProgramming);

// console.log('Do you speak English ?'+speakEnglish);

// console.log('Do you prefer mansaf ?'+preferMansaf);

// console.log(' Did you got tawjihi certificate ?'+haveTawjihi);


if (isMarried === 'y' || isMarried === 'n' || isMarried === 'yes' || isMarried === 'no') {
  alert('You answered \'Am I Married ?\' correctly');
  correctAnswers++;
}
else {
  alert('You answered \'Am I Married ?\' wrongly');
}

if (loveProgramming === 'y' || loveProgramming === 'n' || loveProgramming === 'yes' || loveProgramming === 'no') {
  alert('You answered \' Do I love programming  ?\' correctly');
  correctAnswers++;
}
else {
  alert('You answered \' Do I love programming  ?\' wrongly');
}

if (speakEnglish === 'y' || speakEnglish === 'n' || speakEnglish === 'yes' || speakEnglish === 'no') {
  alert('You answered \' Do I speak English ?\' correctly');
  correctAnswers++;
}
else {
  alert('You answered \'Do I speak English ?\' wrongly');
}

if (preferMansaf === 'y' || preferMansaf === 'n' || preferMansaf === 'yes' || preferMansaf === 'no') {
  alert('You answered \' Do I prefer mansaf ?\' correctly');
  correctAnswers++;
}
else {
  alert('You answered \'Do I prefer mansaf ?\' wrongly');
}

switch (haveTawjihi) {
case 'y':
  alert('You answered \' Do I have tawjihi certificate ?\' correctly');
  correctAnswers++;
  break;
case 'n':
  alert('You answered \' Do I have tawjihi certificate ?\' correctly');
  correctAnswers++;
  break;
case 'yes':
  alert('You answered \' Do I have tawjihi certificate ?\' correctly');
  correctAnswers++;
  break;
case 'no':
  alert('You answered \' Do I have tawjihi certificate ?\' correctly');
  correctAnswers++;
  break;
default:
  alert('You answered \' Do I have tawjihi certificate ?\' Wrongly');
  break;
}

alert(yourName + ' Thank you for visiting my website .');


let i = 1;
while (i <= 4) {
  myAge = parseFloat(prompt('Can you told me how old am I ?'));
  if (typeof myAge === 'number' && !isNaN(myAge)) {
    if (myAge > 34) {
      alert('you are too high');
      i++;
      continue;
    } else if (myAge < 34) {

      alert('you are too low');
      i++;
      continue;
    } else {
      alert('you are correct');
      correctAnswers++;
      break;
    }

  } else {
    i++;
  }
}


let visitedCities = ['daraa', 'damascus', 'istanbul', 'cairo', 'baghdad', 'homs'];
let expectedCity;

let j = 1;
let guessCity = false;
while (j <= 6 && !guessCity) {
  expectedCity = prompt('When I was in Syria I visited some of syrian cities .\n Can you guess which one of the following cities ? \n \'Daraa\',\'Damascus\',\'Istanbul\',\'Cairo\',\'Baghdad\',\'Homs\' ').toLowerCase();
  console.log('11111'+expectedCity);
  if(expectedCity === 'homs' || expectedCity === 'daraa' || expectedCity === 'damascus' ){
    console.log('2223'+expectedCity);
    for (let k = 0; k < visitedCities.length; k++) {
      console.log('by');
      console.log('wedwqrewr '+visitedCities[k]);
      console.log(k);
      if (visitedCities[k] === expectedCity) {
        console.log('hi');
        correctAnswers++;
        guessCity = true;
        alert('you answer '+expectedCity+' is correct and these the following cities I visited in Syria \n \'Homs\', \'Daraa\',\'Damascus\'');
        break;
      }

    }

  }

 

  if (guessCity === false) {
    alert('you answerd is wrong. you have ' + (6 - j) + ' chances good luck');
    j++;
  }
  if(j === 7){
    alert(' the following cities I visited in Syria \n \'Homs\', \'Daraa\',\'Damascus\'');
  }

}
// console.log(myAge);
// console.log(correctAnswers);

alert('you have got '+correctAnswers + 'out of 7');
