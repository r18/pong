R = 10;
width = 500;
height = 500;
barWidth = 10;
barHeight = 40;
bx = width/2;
by = 100;
vx = Math.random()*8+6;
vy = Math.random()*8+6;
bar1X = 40;

width = 500;
height = 500;
bar1Y = 0;

bar2X = width - 40;
bar2Y = height/2;

point = [0,0];

gameStop = false;

function main() { 
  updateScore();
  console.log("start");
  cvs = document.getElementById('cvs');
  ctx = cvs.getContext('2d');
  cvs.width = width;
  cvs.height = height;
  var x =100,y =100;
  setInterval(function(){
    draw();
  },20);
  cvs.onmousemove = function (e) {
    bar1Y = e.clientY;
  };

}

function draw() {
  if(!gameStop){
    bx += vx;
    by += vy;
  }
  if(checkCollision())vx *= -1;
  if(by < 0 || by > height)vy *= -1;
  ctx.clearRect(0,0,width,height);
  drawBall(bx,by);
  ctx.fillStyle = "red";
  drawBar(bar1X,bar1Y);
  ctx.fillStyle = "#000fff";
  drawBar(bar2X,bar2Y);
  moveBar2Random();
  checkCollision();
  checkPoint();
  console.log(point[0],point[1]);
}

function moveBar2Random(){
  //  var dy = Math.floor(Math.random()*100-50);
  //   bar2Y += dy;
  bar2Y = by;

  //   if(bar2Y < 0)bar2Y = 0;
  //   if(bar2Y > height) bar2Y = height;
}

function updateScore(){
  var elem = document.getElementById("score");
  elem.innerHTML = point[0] + " : " + point[1];
}

function drawBall(x,y) {
  ctx.fillStyle = "#00ff00";
  ctx.beginPath(); 
  ctx.arc(x,y,R,0,Math.PI*2,false);
  ctx.closePath();
  ctx.fill();
}

function drawBar(x,y) {
  ctx.fillRect(x-barWidth/2,y-barHeight/2,barWidth,barHeight);
}

function checkCollision() {
  var dx = Math.abs(bar1X - bx);
  var dy = Math.abs(bar1Y - by);
  if( dx < 10 && dy < barHeight)return true;
  dx = Math.abs(bar2X - bx);
  dy = Math.abs(bar2Y - by);
  if( dx < 10 && dy < barHeight)return true;
  return false;
}

function checkPoint() {
  if(bx < 0){
    point[1]++;
    updateScore();
    bx = width/2;
    gameStop = true;
    drawBall(bx,by);
    setTimeout(function(){gameStop = false;},1000);
    return;
  }
  if(bx > width){
    point[0]++;
    updateScore();
    bx = width/2;
    gameStop = true;
    drawBall(bx,by);
    setTimeout(function(){gameStop = false;},1000);
    return;
  }
}
