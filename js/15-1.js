const canvas = document.querySelector('canvas');
const text = canvas.getContext('2d');

text.beginPath();
//폰트설정 굵기, 글자크기, 글꼴
text.font = "bold 300px sans-serif";
//쓰고싶은 글자, 시작x좌표, 시작y좌표
text.fillText('GOOD', 100, 320);