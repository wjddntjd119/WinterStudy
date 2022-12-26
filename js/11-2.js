const button = document.querySelector('#container > button');

const luckyNumber = {
    digitCount: 6, // 뽑을 숫자 6개
    maxNumber: 45, // 45까지 뽑음
};
  
button.addEventListener("click", () => {
    let { digitCount, maxNumber } = luckyNumber;
    let myNumber = new Set(); // 랜덤숫자를 받는 배열생성
    for (let i = 1; i <= digitCount; i++) {
      myNumber.add(Math.floor(Math.random() * maxNumber) + 1); 
      //+1을 하는 이유 maxNumber까지이면 44.9999까지 나오므로 +1을해서 45도 나올 수 있게 만듬
    }
    result.innerText = `${[...myNumber]}`;  // 배열을 텍스트로 넣음
});