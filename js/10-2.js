const origin = document.querySelector("#origin");
const result = document.querySelector("#result");

let array = [2, 4, 6, 8, 10];


function tail(arr) {
   if (arr.length > 1 ) {
     return arr.slice(1);
   } else {
     return arr;
   }
}

origin.innerText = array;
result.innerText = tail(array);

