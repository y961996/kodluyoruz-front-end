function addItem(){
  const ulDOM = document.querySelector("#list");
  const item = document.querySelector("#task").value;
  if(item && item.trim().length){
    const liDOM = document.createElement("li");
    liDOM.innerHTML = `${item}<span class="close" onclick="removeItem()">×</span>`;
    ulDOM.append(liDOM);
  }

  const inputDOM = document.querySelector("#task");
  inputDOM.value = "";
}

function removeItem(){
  let close = document.querySelector(".close");
  console.log(close)
}

function done(){

}