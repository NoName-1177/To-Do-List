var add_button = document.getElementById("addButton");
var task_display = document.getElementById("task-display");
var input = document.getElementById("taskInput");

var tasks = [];

window.onload = ()=>
{
    tasks = JSON.parse(localStorage.getItem('list_retreval')) || []
    tasks.forEach(old_task_in_list => addInList(old_task_in_list)
    );
}

add_button.addEventListener("click", () => {
  var curr_task = input.value;
  tasks.push(curr_task);

  /*2.*/ localStorage.setItem("list_retreval", JSON.stringify(tasks));

  addInList(curr_task);
  input.value = "";
});

function addInList(curr_task) {
  /*1.*/ var new_Task = document.createElement("p");
  new_Task.innerText = curr_task;
  task_display.appendChild(new_Task);

  /*3.*/ new_Task.addEventListener("click", () => {
    new_Task.style.textDecoration = "line-through";
    remove_From_array(curr_task);
  });

  /*4.*/ new_Task.addEventListener("dblclick", () => {
    task_display.removeChild(curr_task);
    remove_From_array(curr_task);
  });
}

function remove_From_array(curr_task) {
  var index = tasks.indexOf(curr_task);
  if (index > -1) {
    tasks.splice(index, 1);
  }
  localStorage.setItem('list_retreval',JSON.stringify(tasks))
}
