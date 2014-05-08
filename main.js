R = 10;
width = 500;
height = 500;
barWidth = 10;
barHeight = 40;
bx = 0;
by = 100;
vx = 13;
vy = 10;
bar1X = 40;
bar1Y = 0;

bar2X = width - 40;
bar2Y = height/2;

function main() { 
  console.log("start");
  cvs = document.getElementById('cvs');
  ctx = cvs.getContext('2d');
  var x =100,y =100;
  setInterval(function(){
    draw();
  },20);
  cvs.onmousemove = function (e) {
    bar1Y = e.clientY;
  };
  

}

function draw() {
  bx += vx;
  by += vy;
  if(bx < 0 || bx > width || checkCollision())vx *= -1;
  if(by < 0 || by > height)vy *= -1;
  drawBall(bx,by);
  drawBar(bar1X,bar1Y);
  drawBar(bar2X,bar2Y);
  moveBar2Random();
  checkCollision();
}

function moveBar2Random(){
//  var dy = Math.floor(Math.random()*100-50);
//   bar2Y += dy;
   bar2Y = by;
//   if(bar2Y < 0)bar2Y = 0;
//   if(bar2Y > height) bar2Y = height;
}

function drawBall(x,y) {
  ctx.clearRect(0,0,width,height);
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
