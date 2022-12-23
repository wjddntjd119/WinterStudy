const firstNumber = parseInt(prompt("첫번째 수를 입력하세요."));
const secondNumber = parseInt(prompt("두번째 수를 입력하세요."));
let result =0;

if(firstNumber > secondNumber){
    for(let i =1; i<=firstNumber; i++){
        if(secondNumber%i === 0 && firstNumber%i === 0){
            result = i;
        }else{
            continue;
        }
    }
    document.write(`${firstNumber}와 ${secondNumber}의 최대공약수는 ${result}입니다.`);
}else if(firstNumber < secondNumber){
    for(let i =1; i<=secondNumber; i++){
        if(secondNumber%i === 0 && firstNumber%i === 0){
            result = i;
        }else{
            continue;
        }
    }
    document.write(`${secondNumber}와 ${firstNumber}의 최대공약수는 ${result}입니다.`);
}else{
    alert("입력한 두 수가 같은 값입니다.");
}