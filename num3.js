var canvas;
var moveSlider;
var gr1;
var gr2;
var sButton;
var toPond;
var toStreet;
//Pictures
var house;
var pond;
var lArrow;
var rArrow;
var frog;
var frog
function preload(){
	house= loadImage('./images/house.png');
	pond= loadImage('./images/pondie.png');
	lArrow= loadImage('./images/lArrow.png');
	rArrow= loadImage('./images/rArrow.png');
	frog = loadImage('./images/frog.png');
	car= loadImage('./images/car.png');
	street= loadImage('./images/street.png')
}
function setup(){
canvas = createCanvas(windowWidth, windowHeight);
canvas.position(0,0);
canvas.style("z-index","-1");
moveSlider= createSlider(0,windowWidth,windowWidth/2);
moveSlider.position(0,0);
background(0);
}
function starter(){
	gr1 = createElement('h1',"Youre Going For a Walk!");
	createElement('br');
	gr2= createElement('h1',"Press the Start Button To Begin!");
	sButton = createButton("Start");
	sButton.position(windowWidth/2,windowHeight/2);
	sButton.mousePressed(walkStart);
}
function walkStart(){
	gr1.hide();
	gr2.hide();
	sButton.hide();
	//
	background(house);
	pondArrow=image(lArrow,100, windowHeight/2,200,200);
	pondArrow.mousePressed(walkPond);
	streetArrow=image(rArrow,windowWidth-100, windowHeight,200,200);
	streetArrow.mousePressed(walkStreet);
	toPond=createElement("To the pond");
	toPond.position(width-200,100);
	toStreet=createElement("To the street");
	toStreet.position(200,100);
}
function walkStreet(){
	background(street);
	createElement('h1', "You are walking down the Street and you see a car!")
	createElement('br');
	createElement('h1', "Watch out!");
	carSlider= createSlider(0,windowHeight,windowHeight/2);
	carSlider.position(windowWidth/2,50);
	image(car, windowWidth+100,carSlider.value(),100,100);
	if (carSlider.value()= windowHeight){
		walkStreetBad();
	}else if(carSlider.value()=0){
		walkStreetGood();
	}
}
function walkStreetBad(){
	background(0);
	createElement('h1', "Oh no you got hit by a car!");
	createElement('br')

	gameOver.style("font-size", 200);
	gameOver.style("color","green");
	gameOver=createElement('Game Over, Bummer');
}
function walkStreetGood(){
	background(0);
	s1=createElement('h1',"Congrats you didnt get hit by a car!");
	createElement('br')
	nButton=createButton("Next");
	nButton.mousePressed(s1.hide());

}
function walkPond(){
	q2=createElement('h1',"You are walking near a pond and you then find a frog!")
	q1= createElement('h1',"Find the frog!");

	frog1=image(frog,600,800,50,50);
	frog1.mouesPressed(frogName);
}
function frogName(){
	q1.hide();
	q2.hide();
	image(frog,windowWidth/2,windowHeight/2,500,500);
		frogInput= createInput("Name your Frog!");
		nameinput.changed(walkEnd);
}
function walkPondEnd(){
	frogInput.hide();
	background();
	image(frog,windowWidth/2,windowHeight/2,500,500);
	createElenet('h1,"You and '+nameinput+" decide to go back home");
}