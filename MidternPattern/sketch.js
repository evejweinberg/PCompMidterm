var dots = []; // array of Jitter objects
var sliderLR;

function setup() {
  createCanvas(1200, 800);
  // Create objects
  // for (var i=0; i<50; i++) {
  //   dots.push(new Jitter());
  // }
  sliderLR = createSlider(-20,20,0);
  
}

function draw() {
  background(0, 100);
 for (var i=0; i<dots.length; i++) {
    dots[i].move();
    dots[i].display();
   }
  lineNearPoints();
  sliderLR.position(0,0);
}

function lineNearPoints(){
  var d; //distance
  stroke(250,50);    //line color
  for (var i=0; i<dots.length - 1; i++){
    for (var j=i+1; j<dots.length; j++){
      d=dist(dots[i].x,dots[i].y,dots[j].x,dots[j].y);
      if (d>120 && d<300){line(dots[i].x,dots[i].y,dots[j].x,dots[j].y);}  ///change line length here
    }
  }
  if (dots.length>40){
    dots.splice(1,1);
  }
}

function mouseDragged(){
   dots.push(new Jitter(mouseX,mouseY));
}

function Jitter(x,y) {
  this.x = x;
  this.y = y;
  this.diameter = 3;   //dots diameter
  this.speed = 8;   //movement speed

  this.move = function() {
    this.x += sliderLR.value()+ random(-this.speed, this.speed);    //move direction e.x +3
    this.y += random(-this.speed, this.speed);
  };

  this.display = function() {
    noStroke();
    ellipse(this.x, this.y, this.diameter, this.diameter);   //dots circle
  };
}