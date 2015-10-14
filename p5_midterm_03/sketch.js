var offset = 0;
var needsInstructions = true;
var rovearound = 0;
var linenumber = 0;
var dots = [];
var letterwidth = 80;
var letterheight = 120;
var letterxheight = 65;
var letterrounding = 80;
var letterstroke = 5;
var lettergap = 20;
var leading = 130;
var letterstrokeB, palettebluepink, pushedheight;
var abc = [];
var abcLn2 = [];
var LRSensor; //replace this in Draw with new parameters from serial
var ScaleSensor; //replace this in Draw with serial communication

var currentLetterIndex = 0; //asign the new letter an index

var scalewhole = 1;
var slider, sliderLR, sliderThick, sliderscaleUpSensor, sliderKerning, title;
var gui, title;
var xposWholeArray;
var scaleUpSensor;


function setup() {

  createCanvas(windowWidth, windowHeight);

  xposWholeArray = windowWidth / 2;
  palettebluepink = [
    color(248, 73, 41), //red
    color(69, 97, 220), //blue
    color(59, 50, 89), //drk blue
    color(251, 151, 162), //pink
    color(201, 208, 234), //light blue
    color(240, 206, 181), //tan
    color(81, 216, 236),
    color(61, 77, 191) //drk blue
  ];

  angleMode(DEGREES);
  gui = new Gui();




} /////////SETUP ENDS////////////SETUP ENDS/////////////

function draw() {
  background(0, slider.value());
  gui.display();

  questionbutton();
  if (abc.length === 0) {
    Instructions();
    // print("no more instructions");
  }


  offset += 2;
  rovearound = 12 * sin(offset);

  LRSensor = sliderLR.value(); //change this to Serial input sensor
  ScaleSensor = sliderscaleUpSensor.value();

  pushedheight = (height / 2) - (letterheight / 2);
  var centerthis = (width / 2) - ((letterwidth + lettergap) * (abc.length / 2));



  //i should put this in the Class
  if (linenumber === 0) {
    push();
    translate(centerthis, height / 2)
    drawAllLetters();
    pop();
  } else if (linenumber === 1) { //this does not work
    push();
    translate(centerthis, pushedheight + rovearound);
    drawAllLetters();
    pop();
  }




  for (var j = 0; j < dots.length; j++) {
    dots[j].move();
    dots[j].display();
  }
  lineNearPoints();

} /////////////DRAW ENDS ///////////////

function keyTyped() {

  if (key === 'a' || key === 'A') {
    abc.push(new Letter("a", linenumber));
  }
  if (key === 'b' || key === 'B') {
    abc.push(new Letter("b", linenumber));
  }
  if (key === 'c' || key === 'C') {
    abc.push(new Letter("c", linenumber));
  }
  if (key === 'd' || key === 'D') {
    // abc[currentLetterIndex] = new LetterD();
    abc.push(new Letter("d", linenumber));
  }
  if (key === 'e' || key === 'E') {
    // abc[currentLetterIndex] = new LetterE();
    abc.push(new Letter("e", linenumber));
  }
  if (key === 'f' || key === 'F') {
    //abc[currentLetterIndex] = new LetterF();
    abc.push(new Letter("f", linenumber));
  }
  if (key === 'g' || key === 'G') {
    //abc[currentLetterIndex] = new LetterG();
    abc.push(new Letter("g", linenumber));
  }
  if (key === 'h' || key === 'H') {
    // abc[currentLetterIndex] = new LetterH();
    abc.push(new Letter("h", linenumber));
  }
  if (key === 'i' || key === 'I') {
    // abc[currentLetterIndex] = new LetterI();
    abc.push(new Letter("i", linenumber));
  }
  if (key === 'j' || key === 'J') {
    // abc[currentLetterIndex] = new LetterJ();
    abc.push(new Letter("j", linenumber));
  }
  if (key === 'k' || key === 'K') {
    // abc[currentLetterIndex] = new LetterK();
    abc.push(new Letter("k", linenumber));
  }
  if (key === 'l' || key === 'L') {
    // abc[currentLetterIndex] = new LetterL();
    abc.push(new Letter("l", linenumber));
  }
  if (key === 'm' || key === 'M') {
    // abc[currentLetterIndex] = new LetterM();
    abc.push(new Letter("m", linenumber));
  }
  if (key === 'n' || key === 'N') {
    // abc[currentLetterIndex] = new LetterN();
    abc.push(new Letter("n", linenumber));
  }
  if (key === 'o' || key === 'O') {
    // abc[currentLetterIndex] = new LetterO();
    abc.push(new Letter("o", linenumber));
  }

  if (key === 'p' || key === 'P') {
    // abc[currentLetterIndex] = new LetterP();
    abc.push(new Letter("p", linenumber));
  }
  if (key === 'q' || key === 'Q') {
    // abc[currentLetterIndex] = new LetterQ();
    abc.push(new Letter("q", linenumber));
  }
  if (key === 'r' || key === 'R') {
    // abc[currentLetterIndex] = new LetterR();
    abc.push(new Letter("r", linenumber));
  }
  if (key === 's' || key === 'S') {
    // abc[currentLetterIndex] = new LetterS();
    abc.push(new Letter("s", linenumber));
  }
  if (key === 't' || key === 'T') {
    // abc[currentLetterIndex] = new LetterT();
    abc.push(new Letter("t", linenumber));
  }
  if (key === 'u' || key === 'U') {
    // abc[currentLetterIndex] = new LetterU();
    abc.push(new Letter("u", linenumber));
  }
  if (key === 'v' || key === 'V') {
    // abc[currentLetterIndex] = new LetterV();
    abc.push(new Letter("v", linenumber));
  }
  if (key === 'w' || key === 'W') {
    // abc[currentLetterIndex] = new LetterW();
    abc.push(new Letter("w", linenumber));
  }
  if (key === 'x' || key === 'X') {
    //abc[currentLetterIndex] = new LetterX();
    abc.push(new Letter("x", linenumber));
  }
  if (key === 'y' || key === 'Y') {
    //abc[currentLetterIndex] = new LetterY();
    abc.push(new Letter("y", linenumber));
  }
  if (key === 'z' || key === 'Z') {
    //abc[currentLetterIndex] = new LetterZ();
    abc.push(new Letter("z", linenumber));
  }


  // currentLetterIndex++;
}

function keyPressed() {
  console.log(keyCode);
  if (keyCode === 16) { //why doesn't this work
    abc[currentLetterIndex] = new LetterSpace();
  }

  if (keyCode === ENTER) {
    linenumber++;
    //new 'center this = centerthis + current abc.length*(letterwidth+lettergap), but only for line 1
  }

  if (keyCode == 8) { //DELETE, keycode 46 is not working, but Zero does
    print('i am deleting the last one')
    print(abc.length);
    abc.splice(abc.length - 1, 1);
  }
  if (keyCode == 38) {
    print("Up");

  }
  if (keyCode == DOWN_ARROW) {
    saveCanvas('MyArt', 'jpg');



  }

}

function pause() {
  noLoop();

}

function drawAllLetters() {
  for (var i = 0; i < abc.length; i++) { //check for the entire length of the array and display them
    abc[i].display();
  }
}


function Gui() {
  slider = createSlider(20, 255, 20);
  sliderKerning = createSlider(10, 100, 20);
  sliderLR = createSlider(-800, 800, 0);
  sliderThick = createSlider(0, 12, 5);
  sliderscaleUpSensor = createSlider(1, 10, 3);
  slider.position(0, 20);
  sliderKerning.position(0, 150);
  sliderLR.position(0, 200);
  sliderThick.position(0, 100);
  sliderscaleUpSensor.position(0, 70);

  this.display = function() {
      fill(255);
      textSize(10);
      text("less trails", 0, 10)
      text("scale up FSR", 10, 65);
      text("LeftRight", 10, 195);
      text("Thickness", 10, 95);
      text("Kerning", 10, 145);
      letterstroke = sliderThick.value();
      letterstrokeB = letterstroke - 3;
    } //gui display ends
} //gui ends

function Instructions() {

  needsInstructions = !needsInstructions;

  fill(palettebluepink[0]);
  textSize(35);
  textAlign(CENTER);
  text("INSTRUCTIONS:\n\nType Anything  \n\r \nPlay with the Sensors until you're happy \n with your design \n\r \nthen press down arrow to print", width / 2, height - 700);

  // title = createP("type something // \n\r press down arrow to print");
  // title.addClass("title");
  // title.position(width / 2, 10);

}


function questionbutton() {
  var bottomrightQ = createButton('?');
  bottomrightQ.position(50, height - 50);
  bottomrightQ.mousePressed(Instructions);
  // bottomrightQ.addCLass();
}