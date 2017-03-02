// ** BULLSEYE ** //

// STEP 1:  Add click handlers to update the score to be:
//          100 points - Bullseye
//           50 points - Middle Ring
//           10 points - Outer Ring
//            0 points - Miss  (done for you)

// STEP 2: Break down the updateScore method, write a paragraph or comment
//         how the function works line by line

// STEP 3:  Highlight the element that was clicked on
//          using the CSS `background-color: yellow`
// BONUS:  Implement setTimeout so the background is yellow for only two seconds

// EXPLORATION: Comment out event.stopPropagation in each function, and then click
//              the inner ring. What happens?



window.onload = function() {
  var body = document.body;
  var ring1 = document.querySelector('.ring-1');
  var ring2 = document.querySelector('.ring-2');
  var ring3 = document.querySelector('.ring-3');

  body.addEventListener('click', bullseyeGame.miss);
  ring1.addEventListener('click', bullseyeGame.outerRing);
  ring2.addEventListener('click', bullseyeGame.middleRing);
  ring3.addEventListener('click', bullseyeGame.bullsEye);

}

function bullsEyeAlert() {
  // this.background-color = "yellow";
}

var ring1 = document.querySelector('.ring-1');
var ring2 = document.querySelector('.ring-2');
var ring3 = document.querySelector('.ring-3');

var bullseyeGame = {
  score: 0,

  updateScore: function(points) {
    //stores div node with class "score" as variable "scoreElement"
    var scoreElement = document.querySelector('.score');
    //updates node attribute score with points from click event
    this.score += points;

    //updates node's innerHTML to current score
    scoreElement.innerHTML = `${this.score} points`
  },

  miss: function(event) {
    event.stopPropagation();
    alert('YOU MISSED');

    bullseyeGame.updateScore(0);

    // [ALERT:] needs to be bullseyeGame because this in clickEvents refers to the html
    // element that was clicked
  },

  bullsEye: function(event) {
    this.style.background = "yellow";
    event.stopPropagation();
    alert('bullsEye was clicked');
    bullseyeGame.updateScore(100);
    window.setTimeout(function() {
      ring3.style.background = "red";}, 3000);
  },

  middleRing: function(event) {
    this.style.background = "yellow";
    event.stopPropagation();
    alert('middleRing was clicked');
    bullseyeGame.updateScore(50);
    window.setTimeout(function() {
      ring2.style.background = "white";
    }, 3000);
  },

  outerRing: function(event) {
    event.stopPropagation();
    this.style.background = "yellow";
    alert('outerRing was clicked');
    bullseyeGame.updateScore(10);
    window.setTimeout(function() {
      ring1.style.background = "red";
    }, 3000);

  }
}


