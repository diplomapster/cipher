$(document).ready(function() {
  var sentence = prompt("Please enter a sentence");
  alert (sentence)

  var firstLetter = sentence.charAt(0);
  var lastLetter = sentence.charAt(sentence.length-1);

  var bothLetters = (firstLetter + lastLetter)

  var bothLettersCapital = bothLetters.toUpperCase();

  alert (bothLettersCapital)
});
