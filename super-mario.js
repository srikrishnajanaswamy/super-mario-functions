// Player position
let x = 100;
let y = 300;

// Jump state
let jumping = false;
let jumpFrame = 0;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(120, 190, 255); // sky

  // ground
  fill(60, 200, 90);
  rect(0, 330, width, 70);
  updateJump();

  drawPlayer();

  let xPosCircle = 350
  drawCoin(xPosCircle);
  
  drawSun();
  
  clouds(40);
  
  moveClouds(40);
}

// ==================================================
// JUMP FUNCTION
// ==================================================
function jump() {
  if (!jumping) {
    jumping = true;
    jumpFrame = 0;
  }
}

function keyPressed() {
  if (keyIsDown(32)) jump();

  if(keyIsDown(68)) moveRight();
  
  if(keyIsDown(65)) moveLeft()
}
function moveRight() {
  x += 10;
}
function moveLeft() {
  x -= 10;
}

// ==================================================
// 🧠 JUMP LOGIC
// ==================================================
function updateJump() {
  if (!jumping) return;

  jumpFrame++;

  let t = jumpFrame / 30;
  let height = sin(t * PI) * 120;
  y = 300 - height;

  if (jumpFrame >= 30) {
    jumping = false;
    y = 300;
  }
}

// ==================================================
// 🎨 DRAW PLAYER
// ==================================================
function drawPlayer() {
  fill(255, 100, 60);
  rect(x, y, 40, 40);
}
function drawCoin(x) {
  fill(255, 200, 60);
  ellipse(x, y, 60, 60);

}
function drawSun() {
  noStroke();
  fill(255, 100, 60);
  ellipse(0,0,100)
}
function clouds(xPos) {
  fill(255,255,255);
  rect(xPos, -20, 40, 80);
  rect(xPos+20, 20, 40, 80);
  rect(xPos+40, 10, 40, 80);
  xPos++;
}

function collides() {
  
}