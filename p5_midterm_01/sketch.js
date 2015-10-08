var t = ' ';
var temp = ' ';
x = 0;
var letterwidth = 160;
var letterheight = 240;
var letterxheight = 130;
var letterrounding = 80;
var letterstroke = 4;
var letterstrokeB = letterstroke - 3;
var palettebluepink;
// var globalcounter=0;


function setup() {
  createCanvas(1000, 1000);
  palettebluepink = [
    color(248, 73, 41), //red
    color(69, 97, 220), //blue
    color(59, 50, 89), //drk blue
    color(251, 151, 162), //pink
    color(201, 208, 234), //light blue
    color(240, 206, 181), //tan
    color(81, 216, 236),
    color(61, 77, 191) //drk blue
  ]


}

function draw() {
  background(255);
  LetterA(0, 0);
  LetterB(0, 0);
  textAlign(CENTER);
  text(t, 500, 500);
  ellipse(x, 50, 10, 10);
  x++;

}

function keyTyped() {
  t = t + key;
  temp = key;
  if (key === 'a') {
    print('A')
    LetterA(200,200);
  }


}

function keyPressed() {
  if (keyCode == UP_ARROW) {
    print("Up");
    t = ' ';
  }
  if (keyCode == DOWN_ARROW) {
    saveCanvas('MyArt', 'jpg');
    // redraw();
    pause() = !pause();
    // clear();
  }
  

}

function pause() {
  noLoop();
  // loop();
}

function mousePressed() {
  loop();
  location.reload();
  t = ' ';
}