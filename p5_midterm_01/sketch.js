var t = ' ';
var temp = ' ';
x = 0;
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
var kerning = 100;
var scalewhole = 1;

var a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z;

function setup() {
  createCanvas(windowWidth, windowHeight);
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



}

function draw() {
  background(255);
 
    // scalewhole = abc.length;

  
  push();
  scale(scalewhole,scalewhole);
  for (var i = 0; i < abc.length; i++) { //check for the entire length of the array and display them

    abc[i].display((letterwidth + lettergap) * i, kerning);
  }
  pop();



  // textAlign(CENTER);
  // text(t, 500, 500);
  // ellipse(x, 50, 10, 10);
  // x++;

}

function keyTyped() {
  // for (var i = 97; i < 122; i++) {
  //   abc[i - 97]()
  // }



  if (key === 'a') {
    print(keyCode);
    abc[currentLetterIndex] = new LetterA();

    //say 'letterA = true' instead ?
  }
  if (key === 'b') {
    print(keyCode);
    abc[currentLetterIndex] = new LetterB();
  }

  if (key === 'c') {
    print(keyCode);
    abc[currentLetterIndex] = new LetterC();
  }
  if (key === 'd') {
    abc[currentLetterIndex] = new LetterD();
  }
  if (key === 'e') {
    abc[currentLetterIndex] = new LetterE();
  }
  if (key === 'f') {
    abc[currentLetterIndex] = new LetterF();
  }
  if (key === 'g') {
    abc[currentLetterIndex] = new LetterG();
  }
  if (key === 'h') {
    abc[currentLetterIndex] = new LetterH();
  }
  if (key === 'i') {
    abc[currentLetterIndex] = new LetterI();
  }
  if (key === 'j') {
    abc[currentLetterIndex] = new LetterJ();
  }
  if (key === 'k') {
    abc[currentLetterIndex] = new LetterK();
  }
  if (key === 'l') {
    abc[currentLetterIndex] = new LetterL();
  }
  if (key === 'm') {
    abc[currentLetterIndex] = new LetterM();
  }
  if (key === 'n') {
    abc[currentLetterIndex] = new LetterN();
  }
  if (key === 'o') {
    abc[currentLetterIndex] = new LetterO();
  }
 
    if (key === 'p') {
    abc[currentLetterIndex] = new LetterP();
  }
    if (key === 'q') {
    abc[currentLetterIndex] = new LetterQ();
  }
    if (key === 'r') {
    abc[currentLetterIndex] = new LetterR();
  }
    if (key === 's') {
    abc[currentLetterIndex] = new LetterS();
    }
       if (key === 't') {
    abc[currentLetterIndex] = new LetterT();
  }
    if (key === 'u') {
    abc[currentLetterIndex] = new LetterU();
  }
    if (key === 'v') {
    abc[currentLetterIndex] = new LetterV();
  }
    if (key === 'w') {
    abc[currentLetterIndex] = new LetterW();
  }
    if (key === 'x') {
    abc[currentLetterIndex] = new LetterX();
  }
    if (key === 'y') {
    abc[currentLetterIndex] = new LetterY();
  }
    if (key === 'z') {
    abc[currentLetterIndex] = new LetterZ();
  }

  currentLetterIndex++;
}

function keyPressed() {
  if (keyCode == UP_ARROW) {
    print("Up");
    //clear the array

  }
  if (keyCode == DOWN_ARROW) {
    saveCanvas('MyArt', 'jpg');
    // window.print();

    pause() == !pause();

  }


}

function pause() {
  noLoop();

}

function mousePressed() {
  loop();
  location.reload();
  t = ' ';
}