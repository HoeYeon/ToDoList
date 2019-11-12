function addData(data,id){
  if(data != 'write your works' && data != '' ){
    var mainList = document.getElementById(id);
    var elem = document.createElement("li");
    elem.innerHTML=data;
    elem.ondblclick = function(){
      if(id == 'work_list')
        addData(data,"done_list");
      this.parentNode.removeChild(this);
    };
    mainList.appendChild(elem);
  }
}
