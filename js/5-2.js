const firstNumber = document.querySelector('#number1');
const secondNumber = document.querySelector('#number2');
const button = document.querySelector('button');
const result = document.querySelector("#result");

button.onclick = function(){
    result.innerText = getGCD(firstNumber.value, secondNumber.value);
}

function getGCD(n, m) {
  let max = n > m ? n : m;
  let GCD = 0;
  for (let i = 1; i <= max; i++) {
    if (n % i === 0 && m % i === 0) {
      GCD = i;
    }
  }
  return GCD;
}