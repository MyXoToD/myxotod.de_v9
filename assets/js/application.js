var Phrases = new Array(
  "I go by the<br />name <a href='/about/'>Max</a>.",
  "I go to work<br />at <a href='http://www.opoloo.com' target='_blank'>Opoloo</a>.",
  "I push to master<br />on <a href='http://www.github.com/MyXoToD' target='_blank'>Github</a>.",
  "I code stuff<br />on <a href='http://www.codepen.io/MyXoToD' target='_blank'>CodePen</a>.",
  "I post tweets<br />on <a href='http://www.twitter.com/MyXoToD' target='_blank'>Twitter</a>.",
  "I write stories<br />on <a href='https://medium.com/@MyXoToD' target='_blank'>Medium</a>.",
  "I listen to music<br />on <a href='http://open.spotify.com/user/1145610126' target='_blank'>Spotify</a>."
);

var CurrentPhrase = 0;
var MaxPhrases = Phrases.length - 1;
var PhrasesInterval = "";
var direction = "up";

$(document).ready(function() {
  // Switch phrases
  $('header .phrases h1').html(Phrases[0]);
  PhrasesInterval = setInterval("switchPhrases()", 6000);

  // Stop switching phrases on mouseover
  $('header .phrases').mouseenter(function() {
    clearInterval(PhrasesInterval);
  });

  // Start switch phrases on mouseleave
  $('header .phrases').mouseleave(function() {
    PhrasesInterval = setInterval("switchPhrases()", 6000);
  });
});

function switchPhrases() {
  if (direction == "up") {
    var a = "+";
    var b = "-";
    direction = "down";
  } else {
    var a = "-";
    var b = "+";
    direction = "up";
  }
  CurrentPhrase++;
  if (CurrentPhrase > MaxPhrases) {
    CurrentPhrase = 0;
  }
  $('header .phrases').append("<h1 style='top: "+a+"150px;'>"+Phrases[CurrentPhrase]+"</h1>");
  $('header .phrases h1:first-child').animate({
    top: b+"=163px"
  }, 300, function() {
    $(this).animate({
      top: a+"=26px"
    }, 200, function() {
      $(this).animate({
        top: b+"=13px"
      }, 200, function() {
        $('header .phrases h1:first-child').remove();
      });
    });
  });
  $('header .phrases h1:last-child').animate({
    top: b+"=163px"
  }, 300, function() {
    $(this).animate({
      top: a+"=26px"
    }, 200, function() {
      $(this).animate({
        top: b+"=13px"
      }, 200);
    });
  });
}