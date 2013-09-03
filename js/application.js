var Phrases = new Array(
  "I go by the<br />name <a href='#'>Max</a>.",
  "I push to master<br />on <a href='#'>Github</a>.",
  "I post tweets<br />on <a href='#'>Twitter</a>.",
  "I listen to music<br />on <a href='#'>Spotify</a>.",
  "I code stuff<br />on <a href='#'>CodePen</a>."
);

var CurrentPhrase = 0;
var MaxPhrases = Phrases.length - 1;
var PhrasesInterval = "";

$(document).ready(function() {
  // Switch phrases
  $('header h1').html(Phrases[0]);
  PhrasesInterval = setInterval("switchPhrases()", 6000);
});

function switchPhrases() {
  CurrentPhrase++;
  if (CurrentPhrase > MaxPhrases) {
    CurrentPhrase = 0;
  }
  $('header .phrases h1').after("<h1>"+Phrases[CurrentPhrase]+"</h1>");
  $('header .phrases h1:first-child').slideUp(function() {
    $('header .phrases h1:first-child').remove();
  });
}