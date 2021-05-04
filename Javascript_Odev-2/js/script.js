function addItem(){
  const ulDOM = document.querySelector("#list");
  const item = document.querySelector("#task").value;
  if(item && item.trim().length){
    const liDOM = document.createElement("li");
    liDOM.innerHTML = `${item}<span class="close">×</span>`;
    ulDOM.append(liDOM);
    $(".success").toast("show");
    removeItem();
  }else{
    $(".error").toast("show");
  }

  const inputDOM = document.querySelector("#task");
  inputDOM.value = ""; 
}

function removeItem(){
  const closeDOM = document.querySelectorAll("span.close");
  for(let i = 0; i <closeDOM.length; i++){
    closeDOM[i].onclick = function(){
      let div = this.parentElement;
      div.remove();
    }
  }
}

function done(){
  const ul_li_DOM = document.querySelectorAll("#list>li");
  for(let i = 0; i < ul_li_DOM.length; i++){
    ul_li_DOM[i].onclick = function(){
      this.classList.toggle("checked");
    }
  }
  removeItem();
}

done();
removeItem();