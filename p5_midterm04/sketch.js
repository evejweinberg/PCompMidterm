var offset = 0;
var help = false;
var needsInstructions = true;
var linenumber = 0;
var rovearound = 0;
var abc = [];
var dots = [];
var letterwidth = 80;
var letterheight = 120;
var letterxheight = 65;
var letterrounding = 80;
var letterstroke = 5;
var letterstrokeB = 1;
var lettergap = 20;
var leading = 180;
var palettebluepink, pushedheight, yExtraPush;
var centerthis = [];
var nextlineoffset = 0;

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

  var canvas = createCanvas(1280, 720);
  canvas.position(200, 50);

  abc[0] = [];
  //xposWholeArray = windowWidth / 2;
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
  createOneButton();




} /////////SETUP ENDS////////////SETUP ENDS/////////////

function draw() {
  background(0, slider.value());
  gui.display();



  // questionbutton();
  if (abc[0].length === 0) {
    Instructions();
  }


  offset += 2;
  rovearound = 12 * sin(offset);

  LRSensor = sliderLR.value(); //change this to Serial input sensor
  ScaleSensor = sliderscaleUpSensor.value();

  pushedheight = (letterheight / 2) * linenumber; //////////////add *linenumber
  yExtraPush = height / 4.6 - pushedheight;


  //i should put this in the Class
  for (var j = 0; j < abc.length; j++) { //go through whole array, assign value 1
    centerthis[j] = (width / 2) - ((letterwidth + lettergap) * (abc[j].length / 2)); //center that left and right, scoot each one to the left
    for (var i = 0; i < abc[j].length; i++) { //go through whole array, add regular abc.length value
      push();
      translate(centerthis[j], yExtraPush);
      //print("height is"+height / .5 - pushedheight)
      abc[j][i].display(); ///draw all letters here now
      pop();

    }
  }




  for (var j = 0; j < dots.length; j++) {
    dots[j].move();
    dots[j].display();
  }
  lineNearPoints();
  if (help) {
    Instructions();
  }

} /////////////DRAW ENDS ///////////////

function keyTyped() {

  if (key === 'a' || key === 'A') {
    abc[linenumber].push(new Letter("a", linenumber));
  }
  if (key === 'b' || key === 'B') {
    abc[linenumber].push(new Letter("b", linenumber));
  }
  if (key === 'c' || key === 'C') {
    abc[linenumber].push(new Letter("c", linenumber));
  }
  if (key === 'd' || key === 'D') {
    // abc[currentLetterIndex] = new LetterD();
    abc[linenumber].push(new Letter("d", linenumber));
  }
  if (key === 'e' || key === 'E') {
    // abc[currentLetterIndex] = new LetterE();
    abc[linenumber].push(new Letter("e", linenumber));
  }
  if (key === 'f' || key === 'F') {
    //abc[currentLetterIndex] = new LetterF();
    abc[linenumber].push(new Letter("f", linenumber));
  }
  if (key === 'g' || key === 'G') {
    //abc[currentLetterIndex] = new LetterG();
    abc[linenumber].push(new Letter("g", linenumber));
  }
  if (key === 'h' || key === 'H') {
    // abc[currentLetterIndex] = new LetterH();
    abc[linenumber].push(new Letter("h", linenumber));
  }
  if (key === 'i' || key === 'I') {
    // abc[currentLetterIndex] = new LetterI();
    abc[linenumber].push(new Letter("i", linenumber));
  }
  if (key === 'j' || key === 'J') {
    // abc[currentLetterIndex] = new LetterJ();
    abc[linenumber].push(new Letter("j", linenumber));
  }
  if (key === 'k' || key === 'K') {
    // abc[currentLetterIndex] = new LetterK();
    abc[linenumber].push(new Letter("k", linenumber));
  }
  if (key === 'l' || key === 'L') {
    // abc[currentLetterIndex] = new LetterL();
    abc[linenumber].push(new Letter("l", linenumber));
  }
  if (key === 'm' || key === 'M') {
    // abc[currentLetterIndex] = new LetterM();
    abc[linenumber].push(new Letter("m", linenumber));
  }
  if (key === 'n' || key === 'N') {
    // abc[currentLetterIndex] = new LetterN();
    abc[linenumber].push(new Letter("n", linenumber));
  }
  if (key === 'o' || key === 'O') {
    // abc[currentLetterIndex] = new LetterO();
    abc[linenumber].push(new Letter("o", linenumber));
  }

  if (key === 'p' || key === 'P') {
    // abc[currentLetterIndex] = new LetterP();
    abc[linenumber].push(new Letter("p", linenumber));
  }
  if (key === 'q' || key === 'Q') {
    // abc[currentLetterIndex] = new LetterQ();
    abc[linenumber].push(new Letter("q", linenumber));
  }
  if (key === 'r' || key === 'R') {
    // abc[currentLetterIndex] = new LetterR();
    abc[linenumber].push(new Letter("r", linenumber));
  }
  if (key === 's' || key === 'S') {
    // abc[currentLetterIndex] = new LetterS();
    abc[linenumber].push(new Letter("s", linenumber));
  }
  if (key === 't' || key === 'T') {
    // abc[currentLetterIndex] = new LetterT();
    abc[linenumber].push(new Letter("t", linenumber));
  }
  if (key === 'u' || key === 'U') {
    // abc[currentLetterIndex] = new LetterU();
    abc[linenumber].push(new Letter("u", linenumber));
  }
  if (key === 'v' || key === 'V') {
    // abc[currentLetterIndex] = new LetterV();
    abc[linenumber].push(new Letter("v", linenumber));
  }
  if (key === 'w' || key === 'W') {
    // abc[currentLetterIndex] = new LetterW();
    abc[linenumber].push(new Letter("w", linenumber));
  }
  if (key === 'x' || key === 'X') {
    //abc[currentLetterIndex] = new LetterX();
    abc[linenumber].push(new Letter("x", linenumber));
  }
  if (key === 'y' || key === 'Y') {

    abc[linenumber].push(new Letter("y", linenumber));
  }
  if (key === 'z' || key === 'Z') {

    abc[linenumber].push(new Letter("z", linenumber));
  }
    if (keyCode === 32) {

    abc[linenumber].push(new Letter("space", linenumber));
  }


}

function keyPressed() {
  console.log(keyCode);
  if (keyCode === 16) { //why doesn't this work
    abc[linenumber][currentLetterIndex] = new LetterSpace();
  }

  if (keyCode === ENTER) {
    //print(keyCode)
    console.log("****ive changed center this to:" + centerthis);
    // nextlineoffset = nextlineoffset- (abc[linenumber].length * (letterwidth + lettergap));
    linenumber++;
    abc[linenumber] = []; //initial array of line[linenumber]

  }

  if (keyCode == 8) { //DELETE
    //print('i am deleting the last one')
    // print(abc.length);
    abc[linenumber].splice(-1, 1); //splice last one in the current line number
    if (abc[linenumber].length <= 0) {
      linenumber--;
    }
  }

  if (keyCode == 38) {
    //print("Up");

  }
  if (keyCode == DOWN_ARROW) { //change this to a sensor button
    saveCanvas('MyArt', 'jpg');
  }
}

function pause() {
  noLoop();
}

// function drawAllLetters() {
//   for (var j = 0; j < abc.length; j++) {
//     for (var i = 0; i < abc[j].length; i++) { //check for the entire length of the array and display them
//       abc[j][i].display();
//     }
//   }
// }


function Gui() {
  var guiA = createP("More <---> Less trails");
  guiA.position(10, 10)
  guiA.addClass("instructions");
  slider = createSlider(20, 255, 20);
  slider.position(0, 50);

  var guiB = createP("distance to Cam");
  guiB.position(10, 520);
  guiB.addClass("instructions");
  sliderscaleUpSensor = createSlider(1, 10, 3);
  sliderscaleUpSensor.position(0, 550);

  var guiC = createP("Move Left/Right");
  guiC.position(10, 120)
  guiC.addClass("instructions");
  sliderLR = createSlider(-800, 800, 0);
  sliderLR.position(0, 150);

  var guiD = createP("Thickness");
  guiD.position(10, 320)
  guiD.addClass("instructions");
  sliderThick = createSlider(0, 12, 5);
  sliderThick.position(0, 350);

  var guiE = createP("Kerning");
  guiE.position(10, 420)
  guiE.addClass("instructions");
  sliderKerning = createSlider(10, 100, 20);
  sliderKerning.position(0, 450);










  this.display = function() {
      fill(255);


      letterstroke = sliderThick.value();
      // letterstrokeB = 2;
      // if (letterstrokeB < 0) {
      //   letterstrokeB = 0;
      // }
      //lettergap = sliderKerning.value();
    } //gui display ends
} //gui ends

function Instructions() {
  // rectMode(CENTER);
  fill(0, 200);
  rect(0, 0, width * 2, height * 2)
  fill(palettebluepink[0]);
  noStroke();
  textSize(25);
  textAlign(CENTER);
  text("INSTRUCTIONS:\n\nType Anything  \n\r \nPlay with the Sensors until you're happy \n with your design \n\r \nPress DOWN ARROW to print\n\r \nYou can use ENTER and BACKSPACE like real keys\n\r \nNow start tpying!", 600, 190);


}


function createOneButton() {

  var bottomrightQ = createButton('INSTRUCTIONS');
  bottomrightQ.position(10, height - 50);
  bottomrightQ.addClass("instructions")
  bottomrightQ.mousePressed(function() {
    help = !help;
  });

}