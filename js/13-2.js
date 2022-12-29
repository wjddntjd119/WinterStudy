const quotesURL = "http://dummyjson.com/quotes";
const result = document.querySelector("#result");

fetch(quotesURL)
  .then(response => response.json()) //json 파일 객체 변환
  .then(json => {
    const random = Math.floor(Math.random() * 30);
    result.querySelector(".quote").innerHTML = json.quotes[random].quote; //인용글
    result.querySelector(".author").innerHTML = ` - ${json.quotes[random].author}`; //인용글 저자
  })
  .catch(err => console.log(err));