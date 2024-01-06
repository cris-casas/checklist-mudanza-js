let checkboxes = document.querySelectorAll('input[type="checkbox"]');
let deleteButtons = document.querySelectorAll('button[value="delete"]');
let editButtons = document.querySelectorAll('button[value="edit"]');
let newTaskButton = document.getElementById('button-new-task');
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


/* newTaskButton.addEventListener('click', function() {

    console.log('click button new task');
    let labelNewTask = document.createElement('label');
    labelNewTask.innerHTML = `
    <input type="checkbox">
    <input type="text">
    <button value="edit">Edit</button>
    <button value="delete">Delete</button>
    `;
    form.appendChild(labelNewTask);

}); */
