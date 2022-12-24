const btn = document.querySelector('#btn');
const notiBox = document.querySelector('#noti-box');

btn.addEventListener('click',function(){
    let newDiv = document.createElement("div");
    newDiv.classList.add('noti');
    newDiv.innerText = "알림 내용이 표시됩니다.";
    notiBox.appendChild(newDiv);
    
    setTimeout(() => {
        newDiv.remove();
    }, 3000);
});
