function Letter(l, lineNum) {

  this.letter = l; //temporary letter value
  this.randomCol = floor(random(0, 7));
  this.topEdge = random(0, width);
  this.sideEdge = random(0, height);
  this.lineNum = lineNum;
  this.xoffset = 0; //offset from the start
  this.xtrans = ((letterwidth + lettergap) * abc[lineNum].length) + this.xoffset;



  this.display = function() {


      this.xtransReverse = this.xtrans + LRSensor;
      this.yGettotop = -this.ytrans - (pushedheight + 100);
      this.scaleup = map(ScaleSensor, 1, 10, .5, 3);
      this.ytrans = this.lineNum * leading + rovearound; //put it on the next line, this works
      //letterheight = map(ScaleSensor, .5, 3, 70, 200);

      if (this.letter == 'a') {
        print("a")
        push();
        translate(this.xtransReverse, this.ytrans);
        scale(this.scaleup, this.scaleup);
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
        line(letterwidth / 2, 0, this.topEdge - this.xtransReverse, this.yGettotop); //but what happens outside of this instantiation?

        pop();

      } else if (this.letter == 'b') {

        push();
        translate(this.xtransReverse, this.ytrans); //this updates with the sensor/slider
        scale(this.scaleup, this.scaleup);
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
        line(0, letterheight, this.topEdge - this.xtransReverse, height - pushedheight);
        line(0, 0, this.topEdge - this.xtransReverse, this.yGettotop); //topleft

        pop();
      } else if (this.letter == 'c') {

        push();
        translate(this.xtransReverse, this.ytrans);
        scale(this.scaleup, this.scaleup);
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

      } else if (this.letter == 'd') {
        push();
        translate(this.xtransReverse, this.ytrans);
        scale(this.scaleup, this.scaleup);
        noFill();
        strokeWeight(letterstroke);
        stroke(palettebluepink[5]);
        rect(0, 0, letterwidth, letterheight, 0, letterrounding, letterrounding, 0);
        stroke(palettebluepink[this.randomCol]);
        strokeWeight(letterstrokeB);
        line(0, 0, this.topEdge - this.xtransReverse, this.yGettotop); //top left
        line(0, letterheight, this.xtransReverse, height - pushedheight); //bottom left
        pop();

      } else if (this.letter == 'e') {
        push();
        translate(this.xtransReverse, this.ytrans);
        scale(this.scaleup, this.scaleup);

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
        line(0, 0, this.topEdge - this.xtransReverse, this.yGettotop); //top left
        line(letterwidth, 0, this.topEdge - this.xtransReverse, this.yGettotop); //top right
        line(0, letterheight, this.xtransReverse, height - pushedheight); //bottom left
        line(letterwidth, letterheight, this.xtransReverse, height - pushedheight); //bottom right
        pop();

      } else if (this.letter == 'f') {
        push();
        translate(this.xtransReverse, this.ytrans);
        scale(this.scaleup, this.scaleup);

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
        line(0, 0, this.topEdge - this.xtransReverse, this.yGettotop); //top left
        stroke(palettebluepink[0]);
        line(letterwidth, 0, this.topEdge - this.xtransReverse, this.yGettotop); //top right
        line(0, letterheight, this.xtransReverse, height - pushedheight); //bottom left



        pop();

      } else if (this.letter == 'g') {
        push();
        translate(this.xtransReverse, this.ytrans);
        scale(this.scaleup, this.scaleup);
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

      } else if (this.letter == 'h') {
        push();
        translate(this.xtransReverse, this.ytrans);
        scale(this.scaleup, this.scaleup);
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
        line(0, 0, this.topEdge - this.xtransReverse, this.yGettotop); //top left
        line(letterwidth, 0, this.topEdge - this.xtransReverse, this.yGettotop); //top right
        line(0, letterheight, this.xtransReverse, height - pushedheight); //bottom left
        line(letterwidth, letterheight, this.xtransReverse, height - pushedheight); //bottom right

        pop();

      } else if (this.letter == 'i') {

        push();
        translate(this.xtransReverse, this.ytrans);
        scale(this.scaleup, this.scaleup);
        noFill();
        strokeWeight(letterstroke);
        stroke(palettebluepink[6]);
        line(0, 0, letterwidth, 0); //top
        line(0, letterheight, letterwidth, letterheight); //bottom
        stroke(palettebluepink[3]);
        line(letterwidth / 2, 0, letterwidth / 2, letterheight); //long
        stroke(palettebluepink[2]);

        stroke(palettebluepink[this.randomCol]);
        strokeWeight(letterstrokeB);
        line(0, 0, this.topEdge - this.xtransReverse, this.yGettotop); //topleft
        line(letterwidth, letterheight, this.xtransReverse, height - pushedheight); //bottom right

        pop();


      } else if (this.letter == 'j') {

        push();
        translate(this.xtransReverse, this.ytrans);
        scale(this.scaleup, this.scaleup);
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
        line(0, 0, this.topEdge - this.xtransReverse, this.yGettotop); //topleft
        pop();

      } else if (this.letter == 'k') {
        push();
        translate(this.xtransReverse, this.ytrans);
        scale(this.scaleup, this.scaleup);
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
        line(0, 0, this.topEdge - this.xtransReverse, this.yGettotop); //topleft
        line(letterwidth, letterheight, this.xtransReverse, height - pushedheight); //bottom right

        pop();
      } else if (this.letter == 'l') {
        push();
        translate(this.xtransReverse, this.ytrans);
        scale(this.scaleup, this.scaleup);
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
        line(0, 0, this.topEdge - this.xtransReverse, this.yGettotop); //topleft
        line(letterwidth, letterheight, this.xtransReverse, height - pushedheight); //bottom right


        pop();
      } else if (this.letter == 'm') {
        push();
        translate(this.xtransReverse, this.ytrans);
        scale(this.scaleup, this.scaleup);
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
        line(0, 0, this.topEdge - this.xtransReverse, this.yGettotop); //topleft
        line(letterwidth, letterheight, this.xtransReverse, height - pushedheight); //bottom right

        pop();
      } else if (this.letter == 'n') {
        push();
        translate(this.xtransReverse, this.ytrans);
        scale(this.scaleup, this.scaleup);
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
        line(0, 0, this.topEdge - this.xtransReverse, this.yGettotop); //topleft
        line(letterwidth, letterheight, this.xtransReverse, height - pushedheight); //bottom right

        pop();
      } else if (this.letter == 'o') {
        push();
        translate(this.xtransReverse, this.ytrans);
        scale(this.scaleup, this.scaleup);
        rectMode(CORNER);
        ellipseMode(CENTER);
        noFill();
        strokeWeight(letterstroke);
        stroke(palettebluepink[4]);
        rect(0, 0, letterwidth, letterheight, letterrounding, letterrounding, letterrounding, letterrounding);
        strokeWeight(letterstrokeB);
        stroke(240, 90);
        angleMode(DEGREES);
        arc(letterwidth / 2, letterheight / 3, letterwidth / 1.7, letterwidth / 1.7, 180, 360); //O
        stroke(palettebluepink[this.randomCol]);
        strokeWeight(letterstrokeB);
        line(0, 0, this.topEdge - this.xtransReverse, this.yGettotop); //topleft

        pop();
      } else if (this.letter == 'p') {
        push();
        translate(this.xtransReverse, this.ytrans);
        scale(this.scaleup, this.scaleup);
        noFill();
        strokeWeight(letterstroke);
        stroke(palettebluepink[2]);
        line(0, 0, 0, letterheight); //left
        stroke(palettebluepink[0]);
        rect(0, 0, letterwidth, letterxheight, 0, letterrounding, letterrounding, 0);

        stroke(palettebluepink[this.randomCol]);
        strokeWeight(letterstrokeB);
        line(0, 0, this.topEdge - this.xtransReverse, this.yGettotop); //topleft

        pop();
      } else if (this.letter == 'q') {
        push();
        translate(this.xtransReverse, this.ytrans);
        scale(this.scaleup, this.scaleup);
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
        line(0, 0, this.topEdge - this.xtransReverse, this.yGettotop); //topleft
        line(letterwidth, letterheight, this.xtransReverse, height - pushedheight); //bottom right

        pop();
      } else if (this.letter == 'r') {
        push();
        translate(this.xtransReverse, this.ytrans);
        scale(this.scaleup, this.scaleup);
        noFill();
        strokeWeight(letterstroke);
        stroke(palettebluepink[6]);
        line(0, 0, 0, letterheight); //left
        stroke(palettebluepink[7]);
        rect(0, 0, letterwidth, letterxheight, 0, letterrounding, letterrounding, 0); //rounded
        stroke(palettebluepink[0]);
        line(letterwidth * .7, letterxheight, letterwidth, letterheight);

        stroke(palettebluepink[this.randomCol]);
        strokeWeight(letterstrokeB);
        line(0, 0, this.topEdge - this.xtransReverse, this.yGettotop); //topleft
        line(letterwidth, letterheight, this.xtransReverse, height - pushedheight); //bottom right

        pop();
      } else if (this.letter == 's') {
        push();
        translate(this.xtransReverse, this.ytrans);
        scale(this.scaleup, this.scaleup);
        noFill();
        strokeWeight(letterstroke);
        stroke(palettebluepink[2]);
        bezier(letterwidth, 0, 0, 0, letterwidth, letterheight, 0, letterheight); //temporary
        stroke(palettebluepink[this.randomCol]);
        strokeWeight(letterstrokeB);

        pop();
      } else if (this.letter == 't') {
        push();
        translate(this.xtransReverse, this.ytrans);
        scale(this.scaleup, this.scaleup);
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
        line(0, 0, this.topEdge - this.xtransReverse, this.yGettotop); //topleft

        pop();
      } else if (this.letter == 'u') {
        push();
        translate(this.xtransReverse, this.ytrans);
        scale(this.scaleup, this.scaleup);
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
        line(0, 0, this.topEdge - this.xtransReverse, this.yGettotop); //topleft

        pop();
      } else if (this.letter == 'v') {
        push();
        translate(this.xtransReverse, this.ytrans);
        scale(this.scaleup, this.scaleup);
        noFill();

        strokeWeight(letterstroke);
        stroke(palettebluepink[6]);
        line(letterwidth / 2, letterheight, 0, 0);
        stroke(palettebluepink[1]);
        line(letterwidth / 2, letterheight, letterwidth, 0);
        stroke(palettebluepink[this.randomCol]);
        strokeWeight(letterstrokeB);
        line(0, 0, this.topEdge - this.xtransReverse, this.yGettotop); //topleft

        pop();
      } else if (this.letter == 'w') {
        push();
        translate(this.xtransReverse, this.ytrans);
        scale(this.scaleup, this.scaleup);
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
        line(0, 0, this.topEdge - this.xtransReverse, this.yGettotop); //topleft
        line(letterwidth, letterheight, this.xtransReverse, height - pushedheight); //bottom right

        pop();
      } else if (this.letter == 'x') {
        push();
        translate(this.xtransReverse, this.ytrans);
        scale(this.scaleup, this.scaleup);
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
        line(0, 0, this.topEdge - this.xtransReverse, this.yGettotop); //topleft
        line(letterwidth, letterheight, this.xtransReverse, height - pushedheight); //bottom right

        pop();
      } else if (this.letter == 'y') {
        push();
        translate(this.xtransReverse, this.ytrans);
        scale(this.scaleup, this.scaleup);
        noFill();
        strokeWeight(letterstroke);
        stroke(palettebluepink[0]);
        angleMode(DEGREES);

        arc(letterwidth / 2, 0, letterwidth, letterheight * .8, 360, 180);
        stroke(palettebluepink[1]);
        line(letterwidth / 2, letterheight, letterwidth / 2, letterheight * .4); //left straight line
        stroke(palettebluepink[this.randomCol]);
        strokeWeight(letterstrokeB);
        line(0, 0, this.topEdge - this.xtransReverse, this.yGettotop); //topleft

        pop();
      } else if (this.letter == 'z') {
        push();
        translate(this.xtransReverse, this.ytrans);
        scale(this.scaleup, this.scaleup);
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
        line(0, 0, this.topEdge - this.xtransReverse, this.yGettotop); //topleft
        line(letterwidth, letterheight, this.xtransReverse, height - pushedheight); //bottom right

        pop();
      } //Z ends/////
    } //display function ends
} //object/class ends





//-----space-------
function LetterSpace() {
  // this.topEdge = random(-width, width);
  // this.sideEdge = random(0, height);
  // this.randomCol = floor(random(0, 7));

  this.display = function(x, y) {


  };
  this.update = function() {

  };
}