var wind1x = 250;
var wind2x = 288;
var wind3x = 362;
var wind4x = 383;
var wind5x = 456;
var wind6x = 474;
var manx = 128;
var carx = 0;
var cars = -2;

function setup() {
  createCanvas(500, 500);
  r = random(255)
  g = random(255)
  b = random(255)
}

function draw() {
  //sky
  background(5, 187, 214);
  
  noStroke();
  
  //ground
  fill(175,127,44);
  rect(0, 250, 500, 250);
  
  //road
  fill(43, 43, 43);
  rect(0, 331, 500, 38);
  
  //booth
  fill(114, 115, 115);
  rect(56, 100, 154, 210);
  
  //boothwindow
  fill(94, 95, 95);
  rect(78, 120, 110, 115)
  
  //manbody
  fill(238, 38, 46);
  rect(manx, 200, 30, 35);
  
  //manhead
  fill(239, 219, 163);
  circle(manx+15, 185, 15);
  
  //wheels
  stroke(255);
  strokeWeight(3);
  fill(0);
  circle(carx + 217, 338, 18.75)
  circle(carx + 455, 338, 18.75) 
  
  //carbody
  stroke(0);
  strokeWeight(2);
  fill(r, g, b);
  
  
  beginShape();
  vertex(carx + 158, 298);
  vertex(carx + 230, 298);
  vertex(carx + 285, 235);
  vertex(carx + 468, 235);
  //back
  vertex(carx + 493, 285);
  vertex(carx + 493, 335);
  vertex(carx + 158, 335);
  endShape(CLOSE);
  
  noStroke();
  //front window
  fill(0);
  beginShape();
  vertex(carx + 250, 292);
  vertex(carx + 288, 245);
  vertex(carx + 362, 245);
  vertex(carx + 362, 292);
  endShape(CLOSE);
  
  //back window
  beginShape();
  vertex(carx + 383, 292);
  vertex(carx + 383, 245);
  vertex(carx + 456, 245);
  vertex(carx + 474, 292);
  endShape(CLOSE);
  
carx = carx - cars;
  
  if(carx <= -500){
  carx = 350
  r = random(255)
  g = random(255)
  b = random(255)
  }
    
  manx =  manx - mans
  if(manx <= 78 || manx >= 158){
    mans = -mans;
  }
}