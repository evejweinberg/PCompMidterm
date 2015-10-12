var offset = 0;
var letterwidth = 160;
var letterheight = 240;
var letterxheight = 130;
var letterrounding = 80;
var letterstroke = 4;
var lettergap = 20;
var letterstrokeB = letterstroke - 3;
var palettebluepink;
var abc = [];
var currentLetterIndex = 0; //asign the new letter an index
var kerning = 300;
var scalewhole = 1;
var slider, sliderLR, sliderThick;
var hEdge, vEdge;
var xposWholeArray;
// var a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z;

function setup() {
  createCanvas(windowWidth, windowHeight);
  xposWholeArray = windowWidth/2;
  slider = createSlider(50, 190, 130);
   sliderLR = createSlider(0, windowWidth, 10);
   sliderThick = createSlider(0,12,3);
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

  hEdge = random(0, width);
  vEdge = random(0, height);


  slider.position(0, 0);
  sliderLR.position(0,200);
  sliderThick.position(0,100);


}

function draw() {
  background(slider.value());


print("xPos is" +xposWholeArray)
  scalewhole = .5;
  // scalewhole = map(abc.length, 3, 12, 1, .5);
  // if (abc.length > 12) {
  //   scalewhole = .5;
  // }

letterstroke = sliderThick.value();
  push();
  scale(scalewhole, scalewhole);
  for (var i = 0; i < abc.length; i++) { //check for the entire length of the array and display them
    xposWholeArray = windowWidth/2 + ((i - (abc.length + 1) /2 )+ 3)*(letterwidth+lettergap);
    var angle = offset + i;
    // abc[i].display(xposWholeArray*1+(cos(angle)+(letterwidth + lettergap) * i), sin(angle)*20+kerning);
     abc[i].display(xposWholeArray+sliderLR.value(), sin(angle)*20+kerning);
  }
  pop();

  offset += 2;



}

function keyTyped() {
  // for (var i = 97; i < 122; i++) {
  //   abc[i - 97]()
  // }



  if (key === 'a' || key === 'A') {
    print(keyCode);
    abc[currentLetterIndex] = new LetterA();

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

  if (keyCode == 48) { //DELETE, keycode 46 is not working, but Zero does
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
  
  if (keyCode == ENTER){
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