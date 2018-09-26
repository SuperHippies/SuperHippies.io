var canvas
//the cow and its location
var cowX ;
var cowY;
//the moon and its location
var moonX;
var moonY;
//titles
var first;
var second;
var titles;
//names and stuff
var nameInput;
//Choices
//Choice 1(Cow Over the moon)
var choice1;
//Choice 2(Cow Under the moon)
var choice2;
//Choice 3 (Cow meets Evil Aliens)
var choice3;
//Choice 4 (Cow meets Nice Aliens)
var choice4;
//Choice 5 (Cow fights aliens)
var choice5;
//Choice 6(Cow meets alien King)
var choice6;
//Choice 7 (Aliens Chase the Cow)
var choice7;
//Choice 8 (Aliens like Cow)
var choice8;
//Pictures
//Choice 1+2
var cow;
//Choice 3+4
var evilAliens;
var niceAliens;
//Choice 5+6
var alienFighter;
var alienKing;
//Choice 7+8
var alienChase;
var alienHappy;
//Sound
var moo;
//image loading
function preload(){
	cow = loadImage('./images/cow.png');
	moon = loadImage('./images/moon.png');
	space= loadImage('./images/space.png');
	moo = loadSound('./audio/moo.mp3')
}
function setup(){
	cowX = windowWidth/2;
	cowY= windowHeight/2;
	canvas = createCanvas(windowWidth, windowHeight);
	canvas.position(0,0);
	canvas.style("z-index","-1");
	background(space);
	imageMode(CENTER);
	image(moon,width/2,height/2+500,800,800);
}

function draw(){
	cowMoove();
}
function cowMoove(){
	//imageMode(CENTER);
	keyPressed();
	image(cow,cowX,cowY,100,100);
}
function keyPressed(){
	if (keyCode=== UP_ARROW){
		cowY=cowY-5;
		moo.play();
	}else
	if (keyCode=== DOWN_ARROW){
		cowY=cowY+5;
		moo.play();
	}else
	if (keyCode=== LEFT_ARROW){
		cowX=cowX-5;
		moo.play();
	}else
	if (keyCode=== RIGHT_ARROW){
		cowX=cowX+5;
		moo.play();
	}
}
