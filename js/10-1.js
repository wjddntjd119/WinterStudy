const origin = document.querySelector("#origin");
const result = document.querySelector("#result");

let array = [2, 4, 6, 8, 10];
showArray(origin, array);

let sum = 0;
for(let i = 0; i < array.length; i++) {
  sum += array[i];
}
array.push(sum);
showArray(result, array);

function showArray(area, arr) {
  let str;
  str = "<table><tr>";
  for (let i = 0; i < arr.length; i++) {
    str +=  "<td>" + arr[i] + "</td>";
  }
  str += "</tr></table>";
  area.innerHTML = str;
}