width = 500;
height = 500;

function main() {
  console.log("start");
  cvs = document.getElementById("cvs");
  ctx = cvs.getContext("2d");

  var balls = [];
  for(var i = 0;i<100; i++)balls.push(new Ball());
  setInterval(function(){

    for(var i = 0;i<100; i++){
      balls[i].update();
    }

      ctx.clearRect(0,0,500,500);
      for(var i = 0;i<100; i++){
        balls[i].draw();
      }
    },20);


  }

  function Ball() {
    this.x = Math.random()*500;
    this.y = Math.random()*500;
    this.vx = Math.random()*5;
    this.vy = Math.random()*5;
  }

  Ball.prototype = {
    r :10,
    update : function () {
      ctx.fillStyle = this.color;
      this.x += this.vx;
      this.y += this.vy;
      if(this.x <0 || this.x > width)this.vx *= -1;
      if(this.y <0 || this.y > height)this.vy *= -1;
    },
    draw : function () {
      ctx.beginPath();
      ctx.arc(this.x,this.y,this.r,0,Math.PI * 2,false);
      ctx.closePath();
      ctx.fill();
    }

  };

