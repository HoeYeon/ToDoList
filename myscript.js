function addData(data,id){
  if(data != 'write your works' && data != '' ){
    var mainList = document.getElementById(id);
    var elem = document.createElement("li");
    var tmp = document.createElement("div");
    tmp.className = 'check';

    elem.innerHTML=data;
    elem.ondblclick = function(){
      if(id == 'work_list')
        addData(data,"done_list");
      this.parentNode.parentNode.removeChild(this.parentNode);
    };

    tmp.appendChild(elem);
    tmp.appendChild(createNewCheckboxt('name','id'));
    mainList.appendChild(tmp);
  }
}

function createNewCheckboxt(name, id){
    var checkbox = document.createElement('input');
    checkbox.type= 'checkbox';
    checkbox.name = name;
    checkbox.id = id;
    return checkbox;
}
