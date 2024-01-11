const inputBox = document.getElementById("inputBox");
const taskList = document.getElementById("taskList");


function addTask(){
    if(inputBox.value===''){
        alert("Task can't be empty!");
    }
    else{
        let li=document.createElement('li');
        li.innerHTML = inputBox.value;
        taskList.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = '';
    saveTasks();
}

taskList.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveTasks();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveTasks();
    }
},false);

function saveTasks(){
    localStorage.setItem("data", taskList.innerHTML);
}

function showTasks(){
    taskList.innerHTML = localStorage.getItem("data");
}
showTasks();