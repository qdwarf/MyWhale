

let emitters = [];

function mousePressed() {
  emitters.push(new Emitter(width/2, height/2));
}

function setup() {
  createCanvas(800, 500);

}

function draw() {
  background(115,188,252);
  noStroke();
  fill(88,112,228);
  ellipse(width/2,600,700);
  fill(255);
  ellipse(500,800,750);
  // fill(255);
  // ellipse(200,395,7);
  fill(88,112,228);
  ellipse(820,450,200);
  fill(255,188,192);
  ellipse(260,430,40,18);

  if(mouseIsPressed) {
  noFill();
  strokeWeight(8);
  stroke(0);
  arc(200, 400, 40, 40, PI + QUARTER_PI, TWO_PI); 
    } else {
  fill(0);
  ellipse(200,380,30,40);
  fill(255);
  ellipse(200,395,7);
  }
  for (let emitter of emitters) {
    emitter.emit(1);
    emitter.show();
    emitter.update();
  }
}
