const canvas = document.querySelector('canvas');

const star = canvas.getContext('2d');


star.beginPath();
star.moveTo(50, 50);
star.lineTo(350, 50);
star.lineTo(50, 250);
star.lineTo(200, 0);
star.lineTo(350, 250);
star.closePath();
star.fillStyle = '#FFFF2F'
star.fill();
star.strokeStyle = '#000000';
star.stroke();

