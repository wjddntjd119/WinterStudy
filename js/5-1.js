const viewElement = document.querySelector('#view');
const detailElement = document.querySelector("#detail");

viewElement.onclick = () =>{
    detailElement.classList.toggle("hidden");
}