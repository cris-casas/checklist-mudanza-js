let checkboxes = document.querySelectorAll('input[type="checkbox"]');
let deleteButtons = document.querySelectorAll('button[value="delete"]');
let editButtons = document.querySelectorAll('button[value="edit"]');
let newTaskButton = document.getElementById('button-new-task');
let saveTasksButton = document.getElementById('button-save-tasks');
let formulario = document.getElementById('taskForm');

newTaskButton.addEventListener('click', () => {
    let labelNewTask = document.createElement('label');
    labelNewTask.innerHTML = `

    <input type="checkbox">
    <input type="text">
    <button value="edit">Edit</button>
    <button value="delete">Delete</button>

    `;
    formulario.appendChild(labelNewTask); 
});

checkboxes.forEach((checkbox) => {
    checkbox.addEventListener('change', () => {
        checkbox.nextElementSibling.style.textDecoration = checkbox.checked ? "line-through" : "none";
    });
  });

deleteButtons.forEach((button) => {
    button.addEventListener('click', () => {
        button.parentElement.remove();
    });
  });

editButtons.forEach((button) => {
    button.addEventListener('click', () => {
        button.previousElementSibling.focus();
});
});


function saveData(){
    localStorage.setItem("data", formulario.innerHTML);
    console.log(formulario);
}

function showData(){
    formulario.innerHTML = localStorage.getItem("data");
}

saveTasksButton.addEventListener('click', () => {
    saveData();        
});