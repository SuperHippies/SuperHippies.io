var canvas;
//
var title;
var firstOption;
var secondOption;
//
var nameInput;
//
var sunX;
var sunY;
var sunSlider;
//
var firstScreen;
var walkToSun;
var sunAnimate;
var greeting;
var spaceBG;
var walkCloser;

//Functionz
function preload(){
	spaceBG = loadImage('./images/space.png');
}
function setup(){
sunX=windowWidth/2;
sunY= windowHeight/2;
canvas = createCanvas(windowWidth, windowHeight);
canvas.position(0,0);
canvas.style("z-index","-1");
beginning();
background(0);

}

function draw(){
if (walkToSun==true){
	toSunAnim();
}
function windowResized(){
	canvas = createCanvas(windowHeight,windowHeight);
}else if (walkCloser == true){
	walkCloserAnim();
}

