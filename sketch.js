var gamestate=0;
var playercount;

var database;
var form,player,game;

function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(500,500);

  game=new Game();
}

function draw(){
  background("cyan");
  game.start();
  game.getState();
}

 
