let inputBox = document.getElementById('inputBox');
let change = document.getElementById('change');
let addButton = document.getElementById('addButton');
let ToDoList = document.getElementById('ToDoList');
let a = '\n';

addButton.addEventListener('click', function(){
    let list = document.createElement("li");
    let text = document.createElement('span');
    let complete = document.createElement("button");
    let modify = document.createElement("button");
    let remove = document.createElement("button");
    let isOnClick = false;
    text.innerText = inputBox.value + a;

    complete.innerHTML = "완료";
    modify.innerHTML = "수정";
    remove.innerHTML = "삭제";
    
    list.className = "list";
    complete.className = "complete";
    modify.className = "modify";
    remove.className = "remove";

    ToDoList.appendChild(list);
    list.appendChild(text);
    list.appendChild(complete);
    list.appendChild(modify);
    list.appendChild(remove);
    inputBox.value = "";

    complete.addEventListener("click", function(){
        if(isOnClick) {
            isOnClick = false;
            text.className = "list";
            complete.innerText = '완료';
        } else {
            isOnClick = true;
            text.className = "clickcomplete";
            complete.innerText = '취소';
        }
    })

    modify.addEventListener("click", function(){
        var input = prompt('수정할 내용을 입력하세요');
        text.innerText = input + a;
    })

    remove.addEventListener("click", function(){
        ToDoList.removeChild(list);
    })

    cancel.addEventListener("click", function(){
        list.style.color = "black";
        list.style.textDecoration = "none";
    })
    
})