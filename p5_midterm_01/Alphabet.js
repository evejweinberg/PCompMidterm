//------A-----------
function LetterA() {

  this.randomCol = floor(random(0, 7));
  this.topEdge = random(0, width);

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
    //line to edges
    noFill();
    stroke(palettebluepink[this.randomCol]);
    strokeWeight(letterstrokeB);
    line(letterwidth / 2, 0, this.topEdge, -y);
    pop();
  }
  this.update = function() {
    //center the alphabet here? redraw the line conenctions here?
  }
}

//-----B-------
function LetterB() {
  this.topEdge = random(0, width);
  this.sideEdge = random(0, height);
  this.randomCol = floor(random(0, 7));

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
    rect(0, letterxheight, letterwidth, letterheight - letterxheight, 0, letterrounding, letterrounding, 0); //bottom round
    stroke(palettebluepink[this.randomCol]);
    strokeWeight(letterstrokeB);
    line(0, 0, this.topEdge, -y); //reverse translate the y
    pop();
  }

  this.update = function() {

  }


}
//-----C---------
function LetterC() { //define arguments and then use them inside the function to be updated in draw
 
  this.topEdge = random(0, width);
  this.sideEdge = random(0, height);
  this.randomCol = floor(random(0, 7));

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
    // stroke(240, 90);
    angleMode(DEGREES);
    arc(letterwidth / 2, letterheight / 3, letterwidth / 1.7, letterwidth / 1.7, 180, 360); //G
    stroke(palettebluepink[this.randomCol]);
    strokeWeight(letterstrokeB);
     
    pop();
  }
  this.update = function() {

  }
}

//---------D--------
function LetterD() {
  this.topEdge = random(0, width);
  this.sideEdge = random(0, height);
  this.randomCol = floor(random(0, 7));

  this.display = function(x, y) {
    push();
    translate(x, y);
    noFill();
    strokeWeight(letterstroke);
    stroke(palettebluepink[5]);
    rect(0, 0, letterwidth, letterheight, 0, letterrounding, letterrounding, 0);
    stroke(palettebluepink[this.randomCol]);
    strokeWeight(letterstrokeB);
    line(0, 0, this.topEdge, -y); //reverse translate the y
    line(0, letterheight, -x, this.sideEdge); //reverse translate the y
    pop();
  }
  this.update = function() {

  }

}


//-----E-------
function LetterE() {
  this.topEdge = random(0, width);
  this.sideEdge = random(0, height);
  this.randomCol = floor(random(0, 7));

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
    stroke(palettebluepink[this.randomCol]);
    strokeWeight(letterstrokeB);
    line(0, 0, this.topEdge, -y); //reverse translate the y
    line(0, letterheight, -x, this.sideEdge); //reverse translate the y
    line(letterwidth, 0,this.topEdge, -y); //reverse translate the y
    line(0, letterheight, -x, this.sideEdge); //reverse translate the y
    pop();
  }
  this.update = function() {

  }
}

//-----F-------
function LetterF(xPos, yPos) {
  this.topEdge = random(0, width);
  this.sideEdge = random(0, height);
  this.randomCol = floor(random(0, 7));

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
    stroke(palettebluepink[this.randomCol]);
    strokeWeight(letterstrokeB);
    pop();
  }
  this.update = function() {

  }
}

//-----G---------
function LetterG() {

  this.topEdge = random(0, width);
  this.sideEdge = random(0, height);
  this.randomCol = floor(random(0, 7));
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
    stroke(palettebluepink[this.randomCol]);
    strokeWeight(letterstrokeB);
    pop();
  }
  this.update = function() {

  }
}

//-----H-------
function LetterH() {
  this.topEdge = random(0, width);
  this.sideEdge = random(0, height);
  this.randomCol = floor(random(0, 7));

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
    stroke(palettebluepink[this.randomCol]);
    strokeWeight(letterstrokeB);
    pop();
  }
  this.update = function() {

  }
}

//-----I-------
function LetterI() {
  this.topEdge = random(0, width);
  this.sideEdge = random(0, height);
  this.randomCol = floor(random(0, 7));

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
    stroke(palettebluepink[this.randomCol]);
    strokeWeight(letterstrokeB);
    pop();
  }
  this.update = function() {

  }
}

//-----J-------
function LetterJ() {
  this.topEdge = random(0, width);
  this.sideEdge = random(0, height);
  this.randomCol = floor(random(0, 7));

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
    stroke(palettebluepink[this.randomCol]);
    strokeWeight(letterstrokeB);
    pop();
  }
  this.update = function() {

  }
}

//-----K-------
function LetterK() {
  this.topEdge = random(0, width);
  this.sideEdge = random(0, height);
  this.randomCol = floor(random(0, 7));
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
    stroke(palettebluepink[this.randomCol]);
    strokeWeight(letterstrokeB);
    pop();
  }
  this.update = function() {

  }
}

//-----L-------
function LetterL() {
  this.topEdge = random(0, width);
  this.sideEdge = random(0, height);
  this.randomCol = floor(random(0, 7));

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
    stroke(palettebluepink[this.randomCol]);
    strokeWeight(letterstrokeB);
    pop();
  }
  this.update = function() {

  }
}

//------M-----
function LetterM() {
  this.topEdge = random(0, width);
  this.sideEdge = random(0, height);
  this.randomCol = floor(random(0, 7));

  this.display = function(x, y) {
    push();
    translate(x, y);

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
    stroke(palettebluepink[this.randomCol]);
    strokeWeight(letterstrokeB);
    pop();
  }
  this.update = function() {

  }
}

//------N-----
function LetterN() {
  this.topEdge = random(0, width);
  this.sideEdge = random(0, height);
  this.randomCol = floor(random(0, 7));

  this.display = function(x, y) {
    push();
    translate(x, y);

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
    stroke(palettebluepink[this.randomCol]);
    strokeWeight(letterstrokeB);
    pop();
  }
  this.update = function() {

  }
}


//------O------
function LetterO() {
  this.topEdge = random(0, width);
  this.sideEdge = random(0, height);
  this.randomCol = floor(random(0, 7));

  this.display = function(x, y) {
    push();
    translate(x, y);
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
    stroke(palettebluepink[this.randomCol]);
    strokeWeight(letterstrokeB);
    pop();
  }
  this.update = function() {

  }
}


//-----P-------
function LetterP(xPos, yPos) {
  this.topEdge = random(0, width);
  this.sideEdge = random(0, height);
  this.randomCol = floor(random(0, 7));

  this.display = function(x, y) {
    push();
    translate(x, y);
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
    stroke(palettebluepink[this.randomCol]);
    strokeWeight(letterstrokeB);
    pop();
  }
  this.update = function() {

  }
}


//------Q------
function LetterQ() {
  this.topEdge = random(0, width);
  this.sideEdge = random(0, height);
  this.randomCol = floor(random(0, 7));

  this.display = function(x, y) {
    push();
    translate(x, y);
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
    stroke(palettebluepink[this.randomCol]);
    strokeWeight(letterstrokeB);
    pop();
  }
  this.update = function() {

  }
}

//-----R-------
function LetterR() {
  this.topEdge = random(0, width);
  this.sideEdge = random(0, height);
  this.randomCol = floor(random(0, 7));

  this.display = function(x, y) {
    push();
    translate(x, y);
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
    stroke(palettebluepink[this.randomCol]);
    strokeWeight(letterstrokeB);
    pop();
  }
  this.update = function() {

  }
}


//-----S-------
function LetterS() {
  this.topEdge = random(0, width);
  this.sideEdge = random(0, height);
  this.randomCol = floor(random(0, 7));

  this.display = function(x, y) {
    push();
    translate(x, y);
    noFill();
    strokeWeight(letterstroke);
    stroke(palettebluepink[2]);
    bezier(letterwidth, 0, 0, 0, letterwidth, letterheight, 0, letterheight); //temporary
    stroke(palettebluepink[this.randomCol]);
    strokeWeight(letterstrokeB);
    pop();
  }
  this.update = function() {

  }
}

//-----T-------
function LetterT() {
  this.topEdge = random(0, width);
  this.sideEdge = random(0, height);
  this.randomCol = floor(random(0, 7));

  this.display = function(x, y) {
    push();
    translate(x, y);

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
    stroke(palettebluepink[this.randomCol]);
    strokeWeight(letterstrokeB);
    pop();
  }
  this.update = function() {

  }
}

//------U-----------
function LetterU() {
  this.topEdge = random(0, width);
  this.sideEdge = random(0, height);
  this.randomCol = floor(random(0, 7));


  this.display = function(x, y) {
    push();
    translate(x, y);
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
    stroke(palettebluepink[this.randomCol]);
    strokeWeight(letterstrokeB);
    pop();
  }
  this.update = function() {

  }
}

//------V-----------
function LetterV() {
  this.topEdge = random(0, width);
  this.sideEdge = random(0, height);
  this.randomCol = floor(random(0, 7));
  this.display = function(x, y) {
    push();
    translate(x, y);
    noFill();

    strokeWeight(letterstroke);
    stroke(palettebluepink[6]);
    line(letterwidth / 2, letterheight, 0, 0);
    stroke(palettebluepink[1]);
    line(letterwidth / 2, letterheight, letterwidth, 0);
    stroke(palettebluepink[this.randomCol]);
    strokeWeight(letterstrokeB);
    pop();
  }
  this.update = function() {

  }
}

//------W-----
function LetterW() {
  this.topEdge = random(0, width);
  this.sideEdge = random(0, height);
  this.randomCol = floor(random(0, 7));
  this.display = function(x, y) {
    push();
    translate(x, y);

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
    stroke(palettebluepink[this.randomCol]);
    strokeWeight(letterstrokeB);
    pop();
  }
  this.update = function() {

  }
}

//------X-----
function LetterX() {
  this.topEdge = random(0, width);
  this.sideEdge = random(0, height);
  this.randomCol = floor(random(0, 7));

  this.display = function(x, y) {
    push();
    translate(x, y);

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
    stroke(palettebluepink[this.randomCol]);
    strokeWeight(letterstrokeB);
    pop();
  }
  this.update = function() {

  }
}

//-----Y---------
function LetterY() {
  this.topEdge = random(0, width);
  this.sideEdge = random(0, height);
  this.randomCol = floor(random(0, 7));

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
    stroke(palettebluepink[this.randomCol]);
    strokeWeight(letterstrokeB);
    pop();
  }
  this.update = function() {

  }
}

//-----Z-------
function LetterZ() {
  this.topEdge = random(0, width);
  this.sideEdge = random(0, height);
  this.randomCol = floor(random(0, 7));

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

    stroke(palettebluepink[this.randomCol]);
    strokeWeight(letterstrokeB);
    pop();

  };
  this.update = function() {

  };
}