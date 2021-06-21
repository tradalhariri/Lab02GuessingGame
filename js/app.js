'use strict';

let yourName = prompt('What is your Name');
alert(yourName+' Welcome to my website');
let isMarried = prompt('Please answer this question by typing y/n or yes/no.\n Are you Married ?').toLocaleLowerCase();
let loveProgramming = prompt('Please answer this question by typing  y/n or yes/no.\n Do you love programming ?').toLocaleLowerCase();
let speakEnglish = prompt('Please answer this question by typing  y/n or yes/no.\n Do you speak English ?').toLocaleLowerCase();
let preferMansaf = prompt('Please answer this question by typing  y/n or yes/no.\n Do you prefer mansaf ?').toLocaleLowerCase();
let haveTawjihi = prompt('Please answer this question by typing  y/n or yes/no.\n Did you got tawjihi certificate ?').toLocaleLowerCase();


// console.log('Are you Married ?'+isMarried);

// console.log('Do you love programming ?'+loveProgramming);

// console.log('Do you speak English ?'+speakEnglish);

// console.log('Do you prefer mansaf ?'+preferMansaf);

// console.log(' Did you got tawjihi certificate ?'+haveTawjihi);


if (isMarried === 'y' || isMarried === 'n' || isMarried === 'yes' || isMarried === 'no') {
  alert('You answered \'Are you Married ?\' correctly');
}
else {
  alert('You answered \'Are you Married ?\' wrongly');
}

if (loveProgramming === 'y' || loveProgramming === 'n' || loveProgramming === 'yes' || loveProgramming === 'no') {
  alert('You answered \' Do you love programming  ?\' correctly');
}
else {
  alert('You answered \' Do you love programming  ?\' wrongly');
}

if (speakEnglish === 'y' || speakEnglish === 'n' || speakEnglish === 'yes' || speakEnglish === 'no') {
  alert('You answered \' Do you speak English ?\' correctly');
}
else {
  alert('You answered \'Do you speak English ?\' wrongly');
}

if (preferMansaf === 'y' || preferMansaf === 'n' || preferMansaf === 'yes' || preferMansaf === 'no') {
  alert('You answered \' Do you prefer mansaf ?\' correctly');
}
else {
  alert('You answered \'Do you prefer mansaf ?\' wrongly');
}

switch (haveTawjihi) {
case 'y':
  alert('You answered \' Did you got tawjihi certificate ?\' correctly');
  break;
case 'n':
  alert('You answered \' Did you got tawjihi certificate ?\' correctly');
  break;
case 'yes':
  alert('You answered \' Did you got tawjihi certificate ?\' correctly');
  break;
case 'no':
  alert('You answered \' Did you got tawjihi certificate ?\' correctly');
  break;
default:
  alert('You answered \' Did you got tawjihi certificate ?\' Wrongly');
  break;
}

alert(yourName+' Thank you for visiting my website .');

