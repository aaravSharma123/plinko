var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight = 300;

var ground;
var divisions;
var particles;

function setup() {
  createCanvas(800,400);
  
  //division = new Divisions(100,400,10,40);
  ground = new Ground(700,400,100,10)
}

function draw() {
  background(0);  
 
  





  for(var k = 0; k<=width;k = k+80 ){
  divisions.push(new Divisions(k,heigth-divisionHeight/2,10, divisionHeight))
}
 
 ground.display();
 
 
 
 
 
 
  drawSprites();
}