// set date
const date = document.querySelector("#date");
options = {weekday: "long", month:"long", day:"numeric", year:"numeric"}
const today = new Date();
date.innerHTML = today.toLocaleDateString("en-US", options);

document.querySelector('#press').onclick = function(){
    //Check for empty input
    if(document.querySelector('#newtask input').value.length == 0){
        alert("Please enter a new task!")
    }
    //Add new input into task list
    else{
        document.querySelector('#taskList').innerHTML += `
            <div class="task">
                <span id="taskname">
                    ${document.querySelector('#newtask input').value}
                </span>
                <button class="checked">
                <i class="fas fa-check"></i>
                </button>
                <button class="delete">
                <i class="far fa-trash-alt"></i>
                </button>
            </div>
        `;
    //delete tasks
    var addedTasks = document.querySelectorAll(".delete");
    for(var i=0; i<addedTasks.length; i++){
        addedTasks[i].onclick = function(){
            this.parentNode.remove();
        }
    }
    //cross out tasks
    var tasks = document.querySelectorAll(".task");
    for(var i=0; i<tasks.length; i++){
        tasks[i].onclick = function(){
            this.classList.toggle("completedTask");
        }
    }
    // empty out new task input
    document.querySelector("#newtask input").value = "";
    } 

}