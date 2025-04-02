function setup() {
  createCanvas(400, 400);
}

let xJogador1 = 0;
let xJogador2 = 0;
let xJogador3 = 0;
let xJogador4= 0;

function draw() {
  ativaJogo();
  desenhaJogadores();
  desenhaLinhaDeChegada();
  verificaVencedor();
}

function ativaJogo() {
  if (focused == true) {
    background("#FF5722");
  } else {
    background("#8D0AA3");
  }
}

function desenhaJogadores() {
  textSize(40);
  text("👩🏼‍🦲", xJogador1, 90);
  text("🙅🏼‍♀️", xJogador2, 170);
  text("👩🏻‍🎤", xJogador3, 250);
  text("🍊", xJogador4, 330);
}

function desenhaLinhaDeChegada() {
  rect(350, 0, 10, 400);
}

function verificaVencedor() {
  if (xJogador1 > 350) {
    text("fudencio venceu!", 50, 200);
    noLoop();
  }
  if (xJogador2 > 350) {
    text("zé maria venceu!", 50, 200);
    noLoop();
  }
  if (xJogador3 > 350) {
    text("funeria venceu!", 50, 200);
    noLoop();
}
  if (xJogador4 > 350) {
    text("conrrado venceu!", 50, 200);
    noLoop();
  }
}
function keyReleased() {
  if (key == "a") {
    xJogador1 += random(20);
  }
  if (key == "s") {
    xJogador2 += random(20);
  }
     if (key == "j") {
    xJogador3 += random(20);
}
   if (key == "k") {
    xJogador4 += random(20);
   }
}
