function beginning(){
	
	greeting= createP("Type Name, hit enter");
	createElement('br');
	nameInput= createInput("Type Name here");
	nameInput.changed(startStory)
}
function startStory(){
	greeting.hide();
	username=createElement('h1', nameInput.value());
	title= createElement('h1', "Get home before the sun sets");
	firstOption= createP("walk towards the sun");
	secondOption= createP("Go home");
	firstOption.mousePressed(toSun);
	secondOption.mousePressed(toHome);
}	
function toSun(){
walktToSun = true;
username(nameInput.value());
title.html("you walk towards the sun and it gets hotter");
firstOption('walk closer?');
secondOption('control the sun');

}

function toHome(){
	firstOption.hide();
	secondOption.hide();
	title.html("You have gone home good night");
}
function walkCloserToSun(){
	walkToSun = false;
	walkCloser = true;
	username.html(nameInpt.value());
	title.html('you are very close to the sun');
	firstOption.html('go Home');
	secondOption.html('Fly Away');
	sunSlider = createSlider(0,255,0);
	sunSlider.position(50,600);
}
function toSunAnim(){
	background(0);
	sunX= sunX+ random(-5,5);
	sunY= sunY + random( -5,5);
	ellipse(sunX,sunY,300,300);
}
function walkCloserAnim(){
	background(spaceBG);
	image(spaceBG,500,600,900,50);
	fill(sunSlider.value,0,0);
	ellipse(windowWidth/2,windowHeight/2,sunSlider.value(),sunSlider.value())
	if (sunSlider.value() > 200){
		title.html('You are too close to the sun!');
	}else {
		title.html('You are very close to the sun');
	}
}