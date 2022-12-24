const username =document.querySelector('#username');
const major =document.querySelector('#major');


const btn = document.querySelector('form > button');

btn.addEventListener('click', function(e){
    e.preventDefault(); //입력했던 값 유지
    let tbody = document.querySelector("#attendant > tbody");
    let newTr = document.createElement("tr");

    //첫번째 셀에 값넣기
    let nameTd = document.createElement("td");
    nameTd.innerText = username.value;
    username.value = "";

    //두번째 셀에 값 넣기
    let majorTd = document.createElement("td");  
    majorTd.innerText = major.value;  
    major.value = "";

    //셀들은 줄에 추가
    newTr.appendChild(nameTd);
    newTr.appendChild(majorTd);

    //tbody에 연결
    tbody.appendChild(newTr);
});