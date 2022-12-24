const menuBtn = document.querySelector('#btn');
const menuList = document.querySelector('#list');

menuBtn.addEventListener('click',function(){
    menuBtn.classList.toggle('active');
    menuList.classList.toggle('active');
});