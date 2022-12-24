const image = document.querySelector('img');

image.addEventListener("mouseover" ,function(){
    image.src = 'images/pic-6.jpg';
});

image.addEventListener("mouseout" ,function(){
    image.src = 'images/pic-1.jpg';
});


