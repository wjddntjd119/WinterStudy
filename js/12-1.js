const fileJSON = "https://reqres.in/api/products/10"
const result = document.querySelector('#result');

let xhr = new XMLHttpRequest();
xhr.open('GET', fileJSON, true);
xhr.send();

xhr.onreadystatechange = function(){
    if(xhr.readyState === 4 && xhr.status === 200){
        let response = JSON.parse(xhr.responseText);

        result.innerHTML = `<p>상품명 : ${response.data.name}</p>
                            <p>생산연도 : ${response.data.year}</p>`;
    }
}