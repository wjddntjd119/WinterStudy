const canvas = document.querySelector('canvas');
const ellipse = canvas.getContext("2d");

let cat = new Image();
cat.src = "images/cat.jpg";
cat.onload = function() {
    ellipse.drawImage(cat, 0, 0, canvas.width, canvas.height);
}

ellipse.beginPath();
ellipse.ellipse(250, 225, 160, 175, 0, 0, 2 * Math.PI);
ellipse.clip();