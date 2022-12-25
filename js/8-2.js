const btnStart = document.querySelector('#raffle');

btnStart.addEventListener('click', function(e){
    e.preventDefault(); //입력한값 남기기
    const seed = document.querySelector("#seed");
    const total = document.querySelector("#total");
    const result = document.querySelector("#result");
    let  winner = "";

  for(let i = 0; i < total.value; i++) {
    let picked = Math.floor((Math.random() * seed.value) + 1);
    winner += `${picked}번, `;      
  }  
  let winnerText = winner.slice(0,-2); //맨뒤 글자 두개 삭제
  result.innerText = `당첨자 : ${winnerText}`;
  result.classList.add("show");
});