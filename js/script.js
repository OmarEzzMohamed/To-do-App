let nInput=document.querySelector(".new_input");
let addBtn=document.querySelector(".add_btn");
let toDo=document.querySelector(".todo_list");
let compList=document.querySelector(".comp_list");
let cToDoBtn=document.querySelector(".clear_todo");
let cCompBtn=document.querySelector(".clear_comp");
let form=document.querySelector("form");

function warn () {
    nInput.style.border="2px solid red";
    nInput.setAttribute("placeholder","Please enter any task");
}

function addElement () {
    let liIt= document.createElement("li");
        toDo.appendChild(liIt);
        liIt.innerHTML = nInput.value;
        let compImg=document.createElement("img");
        compImg.setAttribute("src","image/comp.png");
        compImg.addEventListener("click",compFun);
        let delImg=document.createElement("img");
        delImg.setAttribute("src","image/recycle.png");
        delImg.addEventListener("click",delFun);
        liIt.append(delImg,compImg);
        nInput.value="";
        function compFun () {
            compList.appendChild(compImg.parentElement);
            compImg.remove();
        }
        
        function delFun () {
            delImg.parentElement.remove();
        }
}

function addItem () {
    if (nInput.value=="") {
        warn();
    }
    else {
        addElement();
    }
    
}

function cToDo () {
    toDo.innerHTML="";
}

function cComp () {
    compList.innerHTML="";
}



cToDoBtn.addEventListener("click",cToDo);
cCompBtn.addEventListener("click",cComp);
addBtn.addEventListener("click",addItem);

nInput.addEventListener("keypress",function () {
    nInput.style.border="2px solid black";
        nInput.setAttribute("placeholder","Enter Task");
});