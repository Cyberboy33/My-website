var manx = 128;
var mans = 0.5;
var carx = 0;
var cars = 4;
var r = 237;
var g = 32;
var b = 36;

function setup() {
  createCanvas(windowWidth, 500);
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
  rect(0, 331, windowWidth, 38);
  
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
  
  fill(0);
  beginShape();
  vertex(carx + 250, 292);
  vertex(carx + 288, 245);
  vertex(carx + 362, 245);
  vertex(carx + 362, 292);
  endShape(CLOSE);
  
  beginShape();
  vertex(carx + 383, 292);
  vertex(carx + 383, 245);
  vertex(carx + 456, 245);
  vertex(carx + 474, 292);
  endShape(CLOSE);
  
carx = carx - cars;
  
  manx = manx - mans;
if(manx <=78 || manx >= 158){
  mans *= -1;
}
  
  if(carx <= -500){
    carx = windowWidth-150;
    r = random(255);
    g = random(255);
    b = random(255);
    cars = random(2, 4);
  }
}