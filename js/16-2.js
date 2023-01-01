const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function Figure(x, y, width, height, color) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;

    //x,y축 변경값이 랜덤으로 부여
    this.dx = Math.floor(Math.random() * 10) + 1;
    this.dy = Math.floor(Math.random() * 10) + 1;

    this.draw = function() {
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);    
    }

    this.animate = function() {
    //x,y축 변경값
    this.x += this.dx;
    this.y += this.dy;

    //x좌표와 너비의 합이 캔버스보다 크거나 x좌표값이 0보자 작을때
    if (this.x + this.width > canvas.width || this.x < 0) {
        this.dx = -this.dx;
    } 
    if (this.y + this.height > canvas.height || this.y < 0) {
        this.dy = -this.dy;
    }

    this.draw();
  }
}

function move() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    box1.animate();
    box2.animate();
    //move 함수 반복
    requestAnimationFrame(move);
}

const box1 = new Figure(10, 10, 50, 50, "red");
const box2 = new Figure(20, 20, 100, 100, "green");
box1.draw();
box2.draw();
move();