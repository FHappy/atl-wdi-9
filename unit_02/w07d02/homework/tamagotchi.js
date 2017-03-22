console.log('tamagotchi file is loaded');

//your constructor function here
var Tamagotchi = function Tamagotchi(name, creatureType) {
  this.foodInTummy = 10;
  this.restedness = 10;
  this.health = 10;
  this.cry = function() {
    this.foodInTummy--;
    console.log('food left in tum tum is ' + this.foodInTummy);
    console.log("WAHH!!!!");
  }
  this.puke = function() {
    console.log('PUKING!!! asldjflasfjl');
    this.cry();
  }
  this.name = name;
  this.creatureType = creatureType;
  this.yawn = function() {
    this.restedness--;
    console.log(this.name + ' has current restedness of ' + this.restedness);
  }
  this.start = function() {
    
  }
}

//create new Tamagotchis

var stan = new Tamagotchi('Stan', 'dumb');
var marsh = new Tamagotchi('Marsh', 'furry');
//test out your Tamagotchies below via console.logs

stan.cry();
marsh.yawn();
