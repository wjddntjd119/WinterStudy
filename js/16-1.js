const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function Figure(x, y, width, height, color){
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;

    //도형 그리는 함수
    this.draw = function(){
        ctx.beginPath();
        ctx.fillStyle = color;
        ctx.fillRect(x, y, width, height);
    }
}

const box1 = new Figure(10, 10, 100, 100, "red");
const box2 = new Figure(50, 50, 100, 100, "green");
box1.draw();
box2.draw();