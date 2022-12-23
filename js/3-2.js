let insertNumber = parseInt(prompt("1보다 큰 숫자를 입력하세요."));
let plus = 0;

if(insertNumber !== null && insertNumber>1){
    for(let i=1; i<=insertNumber; i++){
                
        if(i%2 == 1){
            continue;
        }
        plus += i;
        document.write(`${i} --- ${plus}<br>`);   
    }
}
