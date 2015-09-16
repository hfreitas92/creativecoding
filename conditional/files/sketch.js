function setup() {
	createCanvas(windowWidth, windowHeight);
	rectMode(CENTER);
	background(255);
}

function draw() {

	var eX = (mouseX - x) * easing;
	var eY = (mouseY - y) * easing;

	x = x + eX;
	y = y + eY;
	ellipse(x, y, 20, 20);	

}

function keyPressed() {
	
	if (key == 'A'){
		ellipse(600, 200, 250, 250);
 		fill(50);
  		ellipse(660, 175, 20, 30);
  		ellipse(640, 175, 20, 30);
 
 		stroke(0, 0, 0);
  		noFill();
  		triangle(1000, 200, 175, 300, 225, 100);
	
	}
	else if(key == 'B') {
		triangle(200, 50, 175, 100, 225, 100);
 
 
  triangle(175, 100, 150, 150, 200, 150);
  triangle(225, 100, 200, 150, 250, 150);
 

  triangle(150, 150, 125, 200, 175, 200);
  triangle(200, 150, 175, 200, 225, 200);
  triangle(250, 150, 225, 200, 275, 200);
 
  triangle(125, 200, 100, 250, 150, 250);
  triangle(175, 200, 150, 250, 200, 250);
  triangle(225, 200, 200, 250, 250, 250);
  triangle(275, 200, 250, 250, 300, 250);

	
	}
	else {
		rect(600, 350, 50, 50);
	}

}