//------A-----------
function LetterA() {

  this.display = function(x, y) {
    push();
    translate(x, y);
    noFill();
    strokeWeight(letterstroke);
    stroke(palettebluepink[1]);
    line(letterwidth / 2, 0, 0, letterheight);
    stroke(palettebluepink[6]);
    line(letterwidth / 2, 0, letterwidth, letterheight);
    stroke(palettebluepink[5]);
    line(letterwidth * .26, letterxheight, letterwidth * .66, letterxheight); //crossbar
    pop();
  }
  this.update = function() {
    //center the alphabet here? redraw the line conenctions here?
  }
}

//-----B-------
function LetterB() {

  this.update = function() {

  }

  this.display = function(x, y) {

    push();
    translate(x, y);
    noFill();
    strokeWeight(letterstroke);
    stroke(palettebluepink[2]);
    line(0, 0, 0, letterheight); //left
    stroke(palettebluepink[0]);
    rect(0, 0, letterwidth, letterxheight, 0, letterrounding, letterrounding, 0); //top round
    stroke(palettebluepink[4]);
    rect(0, letterxheight, letterwidth, letterxheight, 0, letterrounding, letterrounding, 0); //bottom round
    pop();
  }


}
//-----C---------
function LetterC() { //define arguments and then use them inside the function to be updated in draw
  // this.xPos = xPos;
  // this.yPos = yPos;

  this.display = function(x, y) {
    push();
    translate(x, y);
    ellipseMode(CENTER);
    noFill();
    strokeWeight(letterstroke);
    angleMode(DEGREES);
    stroke(palettebluepink[6]);
    arc(letterwidth / 2, letterheight / 2.5, letterwidth, letterheight * .8, 180, 350);
    stroke(palettebluepink[0]);
    arc(letterwidth / 2, letterheight - letterheight / 2.5, letterwidth, letterheight * .8, 360, 180);
    stroke(palettebluepink[2]);
    line(0, letterheight * .4, 0, letterheight * .6); //left straight line
    strokeWeight(letterstrokeB);
    stroke(240, 90);
    angleMode(DEGREES);
    arc(letterwidth / 2, letterheight / 3, letterwidth / 1.7, letterwidth / 1.7, 180, 360); //G
    pop();
  }
  this.update = function() {

  }
}

//---------D--------
function LetterD() {
  // this.xPos = xPos;
  // this.yPos = yPos;
  
  this.display = function(x, y) {
    push();
  translate(x,y);
  noFill();
  strokeWeight(letterstroke);
  stroke(palettebluepink[5]);
  rect(0, 0, letterwidth, letterheight, 0, letterrounding, letterrounding, 0);
  pop();
  }
  this.update = function() {

  }

}


//-----E-------
function LetterE() {
  // this.xPos = xPos;
  // this.yPos = yPos;
  
  this.display = function(x, y) {
    push();
  translate(x, y);

  noFill();
  strokeWeight(letterstroke);
  stroke(palettebluepink[5]);
  line(0, 0, 0, letterheight);
  stroke(palettebluepink[6]);
  line(0, letterheight, letterwidth, letterheight); //bottom
  stroke(palettebluepink[3]);
  line(0, 0, letterwidth, 0); //top
  stroke(palettebluepink[2]);
  line(0, letterxheight, letterwidth, letterxheight); //center
  strokeWeight(letterstrokeB);
  stroke(240, 90);
  line(letterwidth / 5, 0 + letterheight / 3, letterwidth / 5, letterheight * .8); //N
  pop();
  }
  this.update = function() {

  }
}

//-----F-------
function LetterF(xPos, yPos) {

  
  this.display = function(x, y) {
    push();
  translate(x, y);

  noFill();
  strokeWeight(letterstroke);
  stroke(palettebluepink[1]);

  line(0, 0, 0, letterheight);
  stroke(palettebluepink[0]);
  line(0, 0, letterwidth, 0); //top bar
  stroke(palettebluepink[3]);
  line(0, letterxheight, letterwidth, letterxheight); //bottombar
  pop();
  }
  this.update = function() {

  }
}

//-----G---------
function LetterG() {
  
  
  this.display = function(x, y) {
    push();
  translate(x, y);

  noFill();
  strokeWeight(letterstroke);
  stroke(palettebluepink[1]);
  angleMode(DEGREES);
  arc(letterwidth / 2, letterheight / 2.5, letterwidth, letterheight * .8, 180, 350);
  stroke(palettebluepink[2]);
  arc(letterwidth / 2, letterheight - letterheight / 2.5, letterwidth, letterheight * .8, 360, 180);
  stroke(palettebluepink[7]);
  line(letterwidth / 2, letterxheight, letterwidth, letterxheight); //cross line
  stroke(palettebluepink[4]);
  line(0, letterheight * .45, 0, letterheight * .55); //left straight line
  pop();
  }
  this.update = function() {

  }
}

//-----H-------
function LetterH() {
  // this.xPos = xPos;
  // this.yPos = yPos;
  
  this.display = function(x, y) {
    push();
  translate(x, y);

  noFill();
  strokeWeight(letterstroke);
  stroke(palettebluepink[5]);
  line(0, 0, 0, letterheight); //left
  stroke(palettebluepink[6]);
  line(0, letterxheight, letterwidth, letterxheight); //top bar
  stroke(palettebluepink[1]);
  line(letterwidth, 0, letterwidth, letterheight); //right
  strokeWeight(letterstrokeB);
  stroke(240, 90);
  // line(letterwidth / 5, 0 + letterheight / 3, letterwidth / 5, letterheight * .8); //N
  pop();
  }
  this.update = function() {

  }
}

//-----I-------
function LetterI() {
  // this.xPos = xPos;
  // this.yPos = yPos;
  
  this.display = function(x, y) {
    push();
  translate(x, y);

  noFill();
  strokeWeight(letterstroke);
  stroke(palettebluepink[6]);
  line(0, 0, letterwidth, 0); //top
  line(0, letterheight, letterwidth, letterheight); //bottom
  stroke(palettebluepink[3]);
  line(letterwidth / 2, 0, letterwidth / 2, letterheight); //long
  stroke(palettebluepink[2]);
  // line(0, letterxheight, letterwidth, letterxheight); //center
  // strokeWeight(letterstrokeB);
  // stroke(240, 90);
  // line(letterwidth / 5, 0 + letterheight / 3, letterwidth / 5, letterheight * .8); //N
  pop();
  }
  this.update = function() {

  }
}

//-----J-------
function LetterJ() {
  // this.xPos = xPos;
  // this.yPos = yPos;
  
  this.display = function(x, y) {
    push();
  translate(x, y);

  noFill();
  strokeWeight(letterstroke);
  stroke(palettebluepink[6]);
  line(0, 0, letterwidth, 0); //top
  stroke(palettebluepink[4]);
  // arc(0, letterxheight, letterwidth, letterxheight, PI + (QUARTER_PI / 3), OPEN);
  angleMode(DEGREES);
  arc(letterwidth / 2, letterheight - letterheight / 2.5, letterwidth, letterheight * .8, 360, 180);
  stroke(palettebluepink[3]);
  line(letterwidth, 0, letterwidth, letterxheight); //long
  stroke(palettebluepink[2]);
  pop();
  }
  this.update = function() {

  }
}

//-----K-------
function LetterK() {
  // this.xPos = xPos;
  // this.yPos = yPos;
 
  this.display = function(x, y) {
     push();
  translate(x, y);
  noFill();
  strokeWeight(letterstroke);
  stroke(palettebluepink[6]);
  line(0, 0, 0, letterheight); //left
  stroke(palettebluepink[7]);
  line(0, letterxheight, letterwidth, 0); //towards top
  stroke(palettebluepink[0]);
  line(letterwidth * .5, letterheight * .4, letterwidth, letterheight); //bottom
  pop();
  }
  this.update = function() {

  }
}

//-----L-------
function LetterL() {
  // this.xPos = xPos;
  // this.yPos = yPos;
  
  this.display = function(x, y) {
    push();
  translate(x, y);

  noFill();
  strokeWeight(letterstroke);
  stroke(palettebluepink[5]);
  line(0, 0, 0, letterheight);
  stroke(palettebluepink[6]);
  line(0, letterheight, letterwidth, letterheight); //top bar
  strokeWeight(letterstrokeB);
  stroke(240, 90);
  line(letterwidth / 5, 0 + letterheight / 3, letterwidth / 5, letterheight * .8); //N
  pop();
  }
  this.update = function() {

  }
}

//------M-----
function LetterM() {
  // this.xPos = xPos;
  // this.yPos = yPos;
  
  this.display = function(x, y) {
    push();
  translate(x,y);

  noFill();
  strokeWeight(letterstroke);
  stroke(palettebluepink[0]);
  line(0, 0, 0, letterheight); //left
  stroke(palettebluepink[2]);
  line(0, 0, letterwidth * .6, letterxheight); //across bottom left
  stroke(palettebluepink[5]);
  line(letterwidth, 0, letterwidth, letterheight); //right
  stroke(palettebluepink[3]);
  line(letterwidth, 0, letterwidth * .4, letterxheight); //across bottom left
  // strokeWeight(letterstrokeB);
  // stroke(240, 90);
  // line(letterwidth / 5, 0 + letterheight / 3, letterwidth / 5, letterheight); //N
  pop();
  }
  this.update = function() {

  }
}

//------N-----
function LetterN() {
  // this.xPos = xPos;
  // this.yPos = yPos;
  
  this.display = function(x, y) {
    push();
  translate(x,y);

  noFill();
  strokeWeight(letterstroke);
  stroke(palettebluepink[5]);
  line(0, 0, 0, letterheight);
  stroke(palettebluepink[0]);
  line(0, 0, letterwidth, letterheight);
  stroke(palettebluepink[2]);
  line(letterwidth, 0, letterwidth, letterheight);
  strokeWeight(letterstrokeB);
  stroke(240, 90);
  line(letterwidth / 5, 0 + letterheight / 3, letterwidth / 5, letterheight); //N
  pop();
  }
  this.update = function() {

  }
}


//------O------
function LetterO() {
  // this.xPos = xPos;
  // this.yPos = yPos;
  
  this.display = function(x, y) {
    push();
  translate(x,y);
  rectMode(CORNER);
  ellipseMode(CENTER);
  noFill();
  strokeWeight(letterstroke);
  stroke(palettebluepink[5]);
  rect(0, 0, letterwidth, letterheight, letterrounding, letterrounding, letterrounding, letterrounding);
  strokeWeight(letterstrokeB);
  stroke(240, 90);
  angleMode(DEGREES);
  arc(letterwidth / 2, letterheight / 3, letterwidth / 1.7, letterwidth / 1.7, 180, 360); //O
  pop();
  }
  this.update = function() {

  }
}


//-----P-------
function LetterP(xPos, yPos) {
  // this.xPos = xPos;
  // this.yPos = yPos;
  
  this.display = function(x, y) {
    push();
  translate(x,y);
  noFill();
  strokeWeight(letterstroke);
  stroke(palettebluepink[2]);
  line(0, 0, 0, letterheight); //left
  stroke(palettebluepink[0]);
  rect(0, 0, letterwidth, letterxheight, 0, letterrounding, letterrounding, 0);
  // line(0, letterxheight, letterwidth, letterxheight); //top bar
  // line(letterwidth, 0, letterwidth, letterheight); //right
  // strokeWeight(letterstrokeB);
  // stroke(240, 90);
  // line(letterwidth / 5, 0 + letterheight / 3, letterwidth / 5, letterheight * .8); //N
  pop();
  }
  this.update = function() {

  }
}


//------Q------
function LetterQ() {
  // this.xPos = xPos;
  // this.yPos = yPos;

  this.display = function(x, y) {
      push();
  translate(x,y);
  rectMode(CORNER);
  ellipseMode(CENTER);
  noFill();
  strokeWeight(letterstroke);
  stroke(palettebluepink[5]);
  rect(0, 0, letterwidth, letterheight, letterrounding, letterrounding, letterrounding, letterrounding);
  stroke(palettebluepink[0]);
  line(letterwidth / 2, letterxheight, letterwidth, letterheight);
  strokeWeight(letterstrokeB);
  stroke(240, 90);
  angleMode(DEGREES);
  arc(letterwidth / 2, letterheight / 3, letterwidth / 1.7, letterwidth / 1.7, 180, 360); //O
  pop();
  }
  this.update = function() {

  }
}

//-----R-------
function LetterR() {
  // this.xPos = xPos;
  // this.yPos = yPos;

  this.display = function(x, y) {
      push();
  translate(x,y);
  noFill();
  strokeWeight(letterstroke);
  stroke(palettebluepink[6]);
  line(0, 0, 0, letterheight); //left
  stroke(palettebluepink[7]);
  rect(0, 0, letterwidth, letterxheight, 0, letterrounding, letterrounding, 0); //rounded
  stroke(palettebluepink[0]);
  line(letterwidth * .7, letterxheight, letterwidth, letterheight);
  // line(0, letterxheight, letterwidth, letterxheight); //top bar
  // line(letterwidth, 0, letterwidth, letterheight); //right
  // strokeWeight(letterstrokeB);
  // stroke(240, 90);
  // line(letterwidth / 5, 0 + letterheight / 3, letterwidth / 5, letterheight * .8); //N
  pop();
  }
  this.update = function() {

  }
}


//-----S-------
function LetterS() {
  // this.xPos = xPos;
  // this.yPos = yPos;
  
  this.display = function(x, y) {
    push();
  translate(this.xPos, this.yPos);
  noFill();
  strokeWeight(letterstroke);
  stroke(palettebluepink[2]);
  bezier(letterwidth, 0, 0, 0, letterwidth, letterheight, 0, letterheight); //temporary
  pop();
  }
  this.update = function() {

  }
}

//-----T-------
function LetterT() {
  // this.xPos = xPos;
  // this.yPos = yPos;
  
  this.display = function(x, y) {
    push();
  translate(x,y);

  noFill();
  strokeWeight(letterstroke);
  stroke(palettebluepink[6]);
  line(0, 0, letterwidth, 0); //top
  stroke(palettebluepink[6]);
  // line(0, letterheight, letterwidth, letterheight); //bottom
  stroke(palettebluepink[3]);
  line(letterwidth / 2, 0, letterwidth / 2, letterheight); //long
  stroke(palettebluepink[2]);
  // line(0, letterxheight, letterwidth, letterxheight); //center
  // strokeWeight(letterstrokeB);
  // stroke(240, 90);
  // line(letterwidth / 5, 0 + letterheight / 3, letterwidth / 5, letterheight * .8); //N
  pop();
  }
  this.update = function() {

  }
}

//------U-----------
function LetterU() {
  // this.xPos = xPos;
  // this.yPos = yPos;
  
  this.display = function(x, y) {
    push();
  translate(x,y);
  noFill();

  strokeWeight(letterstroke);
  stroke(palettebluepink[6]);
  line(0, 0, 0, letterxheight);
  stroke(palettebluepink[1]);
  line(letterwidth, 0, letterwidth, letterxheight);
  stroke(palettebluepink[0]);
  angleMode(DEGREES);
  stroke(palettebluepink[4]);
  arc(letterwidth / 2, letterheight - letterheight / 2.5, letterwidth, letterheight * .8, 360, 180);

  pop();
  }
  this.update = function() {

  }
}

//------V-----------
function LetterV() {
  // this.xPos = xPos;
  // this.yPos = yPos;
  
  this.display = function(x, y) {
    push();
  translate(x,y);
  noFill();

  strokeWeight(letterstroke);
  stroke(palettebluepink[6]);
  line(letterwidth / 2, letterheight, 0, 0);
  stroke(palettebluepink[1]);
  line(letterwidth / 2, letterheight, letterwidth, 0);

  pop();
  }
  this.update = function() {

  }
}

//------W-----
function LetterW() {
  // this.xPos = xPos;
  // this.yPos = yPos;
  
  this.display = function(x, y) {
    push();
  translate(x,y);

  noFill();
  strokeWeight(letterstroke);
  stroke(palettebluepink[0]);
  line(0, 0, 0, letterheight); //left
  stroke(palettebluepink[2]);
  line(0, letterheight, letterwidth * .6, letterxheight); //across bottom left
  stroke(palettebluepink[5]);
  line(letterwidth, 0, letterwidth, letterheight); //right
  stroke(palettebluepink[3]);
  line(letterwidth, letterheight, letterwidth * .4, letterxheight); //across bottom left
  // strokeWeight(letterstrokeB);
  // stroke(240, 90);
  // line(letterwidth / 5, 0 + letterheight / 3, letterwidth / 5, letterheight); //N
  pop();
  }
  this.update = function() {

  }
}

//------X-----
function LetterX() {
  // this.xPos = xPos;
  // this.yPos = yPos;
  
  this.display = function(x, y) {
    push();
  translate(x,y);

  noFill();
  strokeWeight(letterstroke);
  stroke(palettebluepink[5]);
  line(letterwidth, 0, 0, letterheight);
  stroke(palettebluepink[0]);
  line(0, 0, letterwidth, letterheight);
  stroke(palettebluepink[2]);
  strokeWeight(letterstrokeB);
  stroke(240, 90);
  line(letterwidth / 5, 0 + letterheight / 3, letterwidth / 5, letterheight); //N
  pop();
  }
  this.update = function() {

  }
}

//-----Y---------
function LetterY() {
  // this.xPos = xPos;
  // this.yPos = yPos;

  this.display = function(x, y) {
    push();
    translate(x, y);

    noFill();
    strokeWeight(letterstroke);
    stroke(palettebluepink[0]);
    angleMode(DEGREES);

    arc(letterwidth / 2, 0, letterwidth, letterheight * .8, 360, 180);
    stroke(palettebluepink[1]);
    line(letterwidth / 2, letterheight, letterwidth / 2, letterheight * .4); //left straight line
    pop();
  }
  this.update = function() {

  }
}

//-----Z-------
function LetterZ() {
  // this.xPos = xPos;
  // this.yPos = yPos;

  this.display = function(x, y) {
    push();
    translate(x, y);

    noFill();
    strokeWeight(letterstroke);
    stroke(palettebluepink[6]);
    line(0, 0, letterwidth, 0); //top
    stroke(palettebluepink[2]);
    line(0, letterheight, letterwidth, letterheight); //bottom
    stroke(palettebluepink[3]);
    line(letterwidth, 0, 0, letterheight); //across


    pop();

  }
  this.update = function() {

  }
}