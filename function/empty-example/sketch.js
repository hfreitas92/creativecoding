function setup() {
  createCanvas(windowWidth, windowHeight);
  background( 127, 0, 0)
}

function draw() {
  if (mouseIsPressed) {
    	noFill();
    	ellipse(mouseX, mouseY, 100, 100);
  } else {
    	noFill(0);
    	stroke(255, 102, 0);
		stroke(0, 0, 0);
  }

	rect(mouseX, mouseY, 20, 20); 
  	
}

