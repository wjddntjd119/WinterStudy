const buttonCalcu = document.querySelector('#form > button');

const year = document.querySelector('#year'); //생년
const month = document.querySelector('#month'); //월
const date = document.querySelector('#date'); //일

const today = new Date(); //현재 시간

const current = document.querySelector('#current');
const resultDays = document.querySelector('#days');
const resultHours = document.querySelector('#hours');

current.innerText = `현재시간: ${today.getFullYear()}년 ${today.getMonth()+1}월 ${today.getDate()}일
                    ${today.getHours()}시 ${today.getMinutes()}분`;

buttonCalcu.addEventListener('click',function(){
    const Birthday = new Date(year.value, month.value-1, date.value);
    let passTime = today.getTime()- Birthday.getTime();
    let passDay = Math.floor(passTime/(1000*60*60*24)); //일수
    let passHour = Math.floor(passTime/(1000*60*60)); //시간

    resultDays.innerText = `날짜로는 ${passDay} 일이 흐르고,`;
    resultHours.innerText = `시간으로는 ${passHour} 시간이 흘렀습니다.`;

    year.innerText = "";
    month.innerText = "";
    date.innerText = "";
});

