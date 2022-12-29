const quotesURL = "http://dummyjson.com/quotes";

fetch(quotesURL)
  .then(response => response.json())
  .then(json =>{
    console.log(json);
  })
  .catch(err => console.log(err));
