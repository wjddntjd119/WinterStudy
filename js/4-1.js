let insertNumber = parseInt(prompt("숫자를 입력해주세요."));
if(!isNaN(insertNumber)){
    numberjudge(insertNumber);
}

function numberjudge(number){
    if(number>0){
        alert(`${number}은 양수입니다.`);
    }else if(number<0){
        alert(`${number}은 음수입니다.`);
    }else{
        alert(`${number}은 0입니다.`);
    }
}