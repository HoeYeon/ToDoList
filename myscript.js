
let toDos = [];
let countID = 1;
const TODO_LS = "toDOs";
function saveToDo(){
  localStorage.setItem(TODO_LS,JSON.stringify(toDos));
}
function loadToDo(){
  const loadedToDo = localStorage.getItem(TODO_LS);
  if (loadedToDo !== null){
    const parsedToDo = JSON.parse(loadedToDo);
    parsedToDo.forEach(function(todo){
      addData(todo.text,todo.loc);
    })
  }
}
function addData(data,id){
  if(data != 'write your works' && data != '' ){
    let mainList = document.querySelector("#"+id);
    let elem = document.createElement("li");
    let tmp = document.createElement("div");
    let check = createNewCheckbox();
    tmp.className = 'check';

    elem.innerHTML=data;
    elem.id = countID;
    check.onclick = ()=>deleteNode(elem,data,id);
    
    elem.appendChild(check);
    tmp.appendChild(elem);
    mainList.appendChild(tmp);

    const toDosObj = {
      text:data,
      ids: countID,
      loc: id
    }
    toDos.push(toDosObj);
    countID++;
    saveToDo();
  }
}
function createNewCheckbox(){
    let checkbox = document.createElement('input');
    checkbox.type= 'checkbox';
    checkbox.className = 'checkbox';
    // checkbox.id = id;
    return checkbox;
}

function deleteNode(elem,data,id){
  if(id == 'work_list'){
    addData(data,'done_list');
  }
  elem.parentNode.parentNode.removeChild(elem.parentNode);
  const li = event.target.parentNode;
  const cleanToDos = toDos.filter(toDo =>
    toDo.ids !== parseInt(li.id)
  );
  toDos = cleanToDos;
  saveToDo();
}

function listenEnter(){
    const detectEnter = document.querySelector('#work');
    detectEnter.addEventListener('keypress', event => {
    if (event.key === "Enter") {
      document.getElementById("myBtn").click();
    }
});
}
loadToDo();