function lineNearPoints(){
  var d; //distance
  stroke(250,50);    //line color
  strokeWeight(letterstrokeB);
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
  var slidermapped = map(sliderLR.value(), -width,width,-20,20);

  this.move = function() {
    this.x += slidermapped+ random(-this.speed, this.speed);    //move direction e.x +3
    this.y += random(-this.speed, this.speed);
    if(this.x > width-50){
      this.x=width-50;
    }
     if(this.x < 50){
      this.x=50;
    }
  };

  this.display = function() {
    noStroke();
    ellipse(this.x, this.y, this.diameter, this.diameter);   //dots circle
  };
}