var r;
var g;
var b;
function setup() {
  // put setup code here

  createCanvas(600,600);
  background(120);
}

function draw() {
  // put drawing code here
  fill(r,g,b);
  stroke(255);
  ellipse(mouseX,mouseY,100,100);

 }
 function windowResized(){
 	resizeCanvas(windowWidth,windowHeight);

 }
 function mouseIsPressed(){
i=+50
g=+10
b=+15
 }