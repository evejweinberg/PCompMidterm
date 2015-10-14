var dots = []; // array of Jitter objects

function setup() {
  createCanvas(1200, 800);
  // Create objects
  // for (var i=0; i<50; i++) {
  //   dots.push(new Jitter());
  // }
}

function draw() {
  background(0, 100);
 for (var i=0; i<dots.length; i++) {
    dots[i].move();
    dots[i].display();
   }
  lineNearPoints();
}

function lineNearPoints(){
  var d; //distance
  stroke(250,50);
  for (var i=0; i<dots.length - 1; i++){
    for (var j=i+1; j<dots.length; j++){
      d=dist(dots[i].x,dots[i].y,dots[j].x,dots[j].y);
      if (d<80){line(dots[i].x,dots[i].y,dots[j].x,dots[j].y);}
    }
  }
}

function mouseDragged(){
   dots.push(new Jitter(mouseX,mouseY));
}

function Jitter(x,y) {
  this.x = x;
  this.y = y;
  this.diameter = 3;
  this.speed = 8;

  this.move = function() {
    this.x += random(-this.speed+3, this.speed);
    this.y += random(-this.speed+3, this.speed);
  };

  this.display = function() {
    noStroke();
    ellipse(this.x, this.y, this.diameter, this.diameter);
  };
}