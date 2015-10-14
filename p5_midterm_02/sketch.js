var offset = 0;
var linenumber = 0;
var dots = [];
var letterwidth = 160;
var letterheight = 240;
var letterxheight = 130;
var letterrounding = 80;
var letterstroke = 5;
var lettergap = 20;
var letterstrokeB;
var palettebluepink;
var abc = [];
var abcLn2 = [];
var currentLetterIndex = 0; //asign the new letter an index
var kerning;
var scalewhole = 1;
var slider, sliderLR, sliderThick, sliderscaleUpSensor, title;
var hEdge, vEdge;
var xposWholeArray;
var scaleUpSensor;

function setup() {
  createCanvas(windowWidth, windowHeight);
  xposWholeArray = windowWidth / 2;
  title = createP("type something // \n\r press down arrow to print");
  slider = createSlider(50, 190, 130);
  sliderLR = createSlider(-windowWidth, windowWidth, 10);
  sliderThick = createSlider(0, 12, 5);
  sliderscaleUpSensor = createSlider(1, 10, 5);
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
  kerning = height / 2 - letterheight / 2;


  hEdge = random(0, width);
  vEdge = random(0, height);


  slider.position(0, 0);
  sliderLR.position(0, 200);
  sliderThick.position(0, 100);
  sliderscaleUpSensor.position(0, 70);



}/////////SETUP ENDS////////////SETUP ENDS/////////////

function draw() {
  background(slider.value());
  title.addClass("title");
  title.position(width / 2, 10);
  text("scale up FSR", 10, 65);
  text("LeftRight", 10, 195);
  text("Thickness", 10, 95);
  scaleUpSensor = sliderscaleUpSensor.value(); //to be replaced with FSR
  var scaleValue = scaleUpSensor / 10;


  letterstroke = sliderThick.value();
  letterstrokeB = letterstroke - 3;
  push();
  translate(0, 0);
  scale(scaleValue, scaleValue);
  // if (abc.length >6){

  // }
  for (var i = 0; i < abc.length; i++) { //check for the entire length of the array and display them
    xposWholeArray = windowWidth / 2 + ((i - (abc.length + 1) / 2) + 3) * (letterwidth + lettergap);
    var angle = offset + i;
    // abc[i].display(xposWholeArray*1+(cos(angle)+(letterwidth + lettergap) * i), sin(angle)*20+kerning);
    abc[i].display(xposWholeArray+ sliderLR.value() , sin(angle) * 20 + kerning);
    abc[i].display(xposWholeArray +sliderLR.value(), sin(angle) * 20 + (kerning * 2));
  }

  // for (var j = 0; j < abcLn2.length; j++) { //check for the entire length of the array and display them
  //   xposWholeArray = windowWidth / 2 + ((j - (abcLn2.length + 1) / 2) + 3) * (letterwidth + lettergap);
  //   var angle = offset + j;
  //   // abc[i].display(xposWholeArray*1+(cos(angle)+(letterwidth + lettergap) * i), sin(angle)*20+kerning);
  //   abcLn2[j].display(xposWholeArray + sliderLR.value(), sin(angle) * 20 + (kerning*2));
  // }
  pop();

  offset += 2;

  for (var j = 0; j < dots.length; j++) {
    dots[j].move();
    dots[j].display();
  }
  lineNearPoints();

} /////////////DRAW ENDS ///////////////

function keyTyped() {
  // for (var i = 97; i < 122; i++) {
  //   abc[i - 97]()
  // }


  if (key === 'a' || key === 'A') {
    print(keyCode);
    //abc[currentLetterIndex] = new LetterA();
    abc.push(new LetterA(linenumber));
    abc.push(new Letter("a", linenumber));

    //say 'letterA = true' instead ?
  }
  if (key === 'b' || key === 'B') {
    print(keyCode);
    abc[currentLetterIndex] = new LetterB();
  }

  if (key === 'c' || key === 'C') {
    print(keyCode);
    abc[currentLetterIndex] = new LetterC();
  }
  if (key === 'd' || key === 'D') {
    abc[currentLetterIndex] = new LetterD();
  }
  if (key === 'e' || key === 'E') {
    abc[currentLetterIndex] = new LetterE();
  }
  if (key === 'f' || key === 'F') {
    abc[currentLetterIndex] = new LetterF();
  }
  if (key === 'g' || key === 'G') {
    abc[currentLetterIndex] = new LetterG();
  }
  if (key === 'h' || key === 'H') {
    abc[currentLetterIndex] = new LetterH();
  }
  if (key === 'i' || key === 'I') {
    abc[currentLetterIndex] = new LetterI();
  }
  if (key === 'j' || key === 'J') {
    abc[currentLetterIndex] = new LetterJ();
  }
  if (key === 'k' || key === 'K') {
    abc[currentLetterIndex] = new LetterK();
  }
  if (key === 'l' || key === 'L') {
    abc[currentLetterIndex] = new LetterL();
  }
  if (key === 'm' || key === 'M') {
    abc[currentLetterIndex] = new LetterM();
  }
  if (key === 'n' || key === 'N') {
    abc[currentLetterIndex] = new LetterN();
  }
  if (key === 'o' || key === 'O') {
    abc[currentLetterIndex] = new LetterO();
  }

  if (key === 'p' || key === 'P') {
    abc[currentLetterIndex] = new LetterP();
  }
  if (key === 'q' || key === 'Q') {
    abc[currentLetterIndex] = new LetterQ();
  }
  if (key === 'r' || key === 'R') {
    abc[currentLetterIndex] = new LetterR();
  }
  if (key === 's' || key === 'S') {
    abc[currentLetterIndex] = new LetterS();
  }
  if (key === 't' || key === 'T') {
    abc[currentLetterIndex] = new LetterT();
  }
  if (key === 'u' || key === 'U') {
    abc[currentLetterIndex] = new LetterU();
  }
  if (key === 'v' || key === 'V') {
    abc[currentLetterIndex] = new LetterV();
  }
  if (key === 'w' || key === 'W') {
    abc[currentLetterIndex] = new LetterW();
  }
  if (key === 'x' || key === 'X') {
    abc[currentLetterIndex] = new LetterX();
  }
  if (key === 'y' || key === 'Y') {
    abc[currentLetterIndex] = new LetterY();
  }
  if (key === 'z' || key === 'Z') {
    abc[currentLetterIndex] = new LetterZ();
  }


  currentLetterIndex++;
}

function keyPressed() {
  console.log(keyCode);
  if (keyCode === 16) { //why doesn't this work
    abc[currentLetterIndex] = new LetterSpace();
  }
  
  if (keyCode === ENTER){
    linenumber++;
  }

  if (keyCode == 8) { //DELETE, keycode 46 is not working, but Zero does
    print('i am deleting the last one')
    print(abc.length);
    abc.splice(abc.length - 1, 1);
  }
  if (keyCode == 38) {
    print("Up");

    //clear the array

  }
  if (keyCode == DOWN_ARROW) {
    saveCanvas('MyArt', 'jpg');
    // window.print();

    pause() == !pause();

  }

  if (keyCode == ENTER) {
    kerning = 400;
  }


}

function pause() {
  noLoop();

}

// function mousePressed() {
//   loop();
//   location.reload();
//   t = ' ';
// }