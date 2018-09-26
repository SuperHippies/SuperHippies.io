var canvas;
var bgColor;
var username;
var colorbutton;
var paragraph;
var textInput;
var x;
var y;
function setup(){
canvas = createCanvas(windowWidth,windowHeight);
canvas.mouseWheel(changeColor);
canvas.position(0,0);
canvas.style("z-index","-1");
//
bgColor = 150;
username= createElement('h1','Stevenson Durning');
//
button = createButton("howdy");
button.mouseWheel(changeColor);
button.style('changeColor');
//
paragraph = createP("HOWDEE");
paragraph.mouseOver(changeColor);
//
textInput= createInput("Type your name here");
textInput.input(updateName);
textInput.changed(updateFontColor);
//
createElement('br');
ellipseSlider= createSlider(0,600,300);
createElement('br');
}
function changeColor(){
bgColor= color(random(255),random(255),random(255));
}
function draw(){
background(bgColor);
paragraphCheck();
text(textInput.value(), 200,50);
fill(170,56,140);
//
ellipse(width/2, height/2,ellipseSlider.value(),ellipseSlider.value())
if (ellipseSlider.value() >400|| ellipseSlider.value()<200){
	username.hide();
}else{
	username.show();
	fill(16,54,84);
	username.position(ellipseSlider.value(),0);
}
}

function paragraphCheck(){
	if (textInput == "Steven"){
		createElement('h1','HELLO THERE');
	}
}
function updateName(){
	username.html(textInput.value());
}
function updateFontColor(){
	paragraph.style("color","red");
	paragraph.style("font-size",bgColor);
	username.style("color","blue");
}