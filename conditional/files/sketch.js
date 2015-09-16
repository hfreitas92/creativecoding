var x;
var y;
var easing;

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(255);
	easing = .025;
	x = width/2;
	y = height/2;
}

function draw() {
	background(255);
	var eX = (mouseX - x) * easing;
	var eY = (mouseY - y) * easing;

	x = x + eX;
	y = y + eY;

	if (dist (x,y,mouseX, mouseY) <= 30) {
		ellipse(200, 200, 250, 250);
 	fill(50);
  	ellipse(160, 175, 20, 30);
  	ellipse(240, 175, 20, 30);
 
  
  	stroke(50, 0, 0);
  	noFill();
  	arc(200, 200, 175, 175, 0, radians(180));


	}

	else {
	ellipse(200, 200, 250, 250);
 	fill(50);
  	ellipse(160, 175, 20, 30);
  	ellipse(240, 175, 20, 30);
 
  
  	stroke(50, 0, 0);
  	fill(51);
  	arc(200, 200, 175, 175, 0, radians(180));

	}



}