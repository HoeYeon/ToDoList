function addData(data,id){
  if(data != 'write your works' && data != '' ){
    let mainList = document.querySelector("#"+id);
    let elem = document.createElement("li");
    let tmp = document.createElement("div");
    let check = createNewCheckbox();
    tmp.className = 'check';

    elem.innerHTML=data;
    elem.ondblclick = function(){deleteNode(elem,data,id);};
    check.onclick = function(){deleteNode(elem,data,id);};
    tmp.appendChild(elem);
    tmp.appendChild(check);
    mainList.appendChild(tmp);
  }
}
function createNewCheckbox(){
    let checkbox = document.createElement('input');
    checkbox.type= 'checkbox';
    // checkbox.name = name;
    // checkbox.id = id;
    return checkbox;
}

function deleteNode(elem,data,id){
  if(id == 'work_list')
    addData(data,"done_list");
  elem.parentNode.parentNode.removeChild(elem.parentNode);

}

