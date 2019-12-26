

var yourScore = document.getElementById('yourScore');
//var yourScore = getElementById(red, blue, yellow, green.onclick(math.sum));
yourScore.innerHTML = 0; //
var targetScore = document.getElementById('targetScore');
targetScore.innerHTML = getRandomValue(10, 4);

function addToScore(val) {
  var numberToAdd = parseInt(val);
  var currentScore = parseInt(yourScore.innerHTML);
  yourScore.innerHTML = numberToAdd + currentScore;
}

var orange = document.getElementById("orange");
//orange.setAttribute("value", "5");
console.log(orange.value);

var blue = document.getElementById("blue");
console.log(blue.value);

var purple = document.getElementById("purple");
console.log(purple.value);

var green = document.getElementById("green");
console.log(green.value);

// add an event listener to elements
orange.addEventListener('click', function() {
  //this refers to orange
  addToScore(this.value);
  checkPlayerScore();
});

//parseInt(42.01) => 42
//alert(parseInt('james')); // NaN (not a number)
// Cafe Del Mar ChillWave 2 :)
// .innerHTML returns a string, NaN

blue.addEventListener('click', function() {
  // this refers to blue
  addToScore(this.value);
  checkPlayerScore();
});

purple.addEventListener('click', function() {
  // this refers to purple
  addToScore(this.value);
  checkPlayerScore();
});

green.addEventListener('click', function() {
  // this refers to green
  addToScore(this.value);
  checkPlayerScore();
});
//var sum = parseInt(orange.value) + parseInt(blue.value) + parseInt(yelow.value) + parseInt(green.value);

// console.log (sum);
function getRandomValue (a, b){
  return Math.floor((Math.random() * a) + b);
}

function checkPlayerScore() {
  //yourScore, targetScore (parseFloat() is for decimals)
  var playerInt = parseInt(yourScore.innerHTML);
  var targetInt = parseInt(targetScore.innerHTML);
  if (playerInt === targetInt) {
      alert('You win!');
  } else if (playerInt > targetInt) {
    alert('You lose!');
  } 
}

console.log(getRandomValue(10, 4));
