const userNumber = document.querySelector("#user-number");
const button = document.querySelector("button");
const result = document.querySelector("#result");

button.addEventListener("click", () => {
  let n = userNumber.value;
  try {
    if (n === "" || isNaN(n)) {
      throw "숫자를 입력하세요.";
    }
    n = Number(n);
    if (n < 10) {
      result.innerText = n;
    }
    else if (n >= 10) {
      throw "10보다 작은 수를 입력하세요.";
    }    
  } catch (error) {
    alert(error);
  } finally {
    userNumber.value = "";
  }
});