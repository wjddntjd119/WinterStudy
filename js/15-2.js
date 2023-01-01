const canvas = document.querySelector('canvas');
const text = canvas.getContext('2d');

text.beginPath();
//폰트설정 굵기, 글자크기, 글꼴
text.font = "bold 300px sans-serif";
//쓰고싶은 글자, 시작x좌표, 시작y좌표
text.fillText('GOOD', 100, 320);

text.beginPath();
//그래픽이 겹치는 부분만 남김
text.globalCompositeOperation = "source-in";
let img = new Image();
img.onload = function() {
    text.drawImage(img, 0, 0, canvas.width, canvas.height);
}
img.src = "images/text-bg.jpg";