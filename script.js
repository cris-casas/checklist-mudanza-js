let checkboxes = document.querySelectorAll('input[type="checkbox"]');
let deleteButtons = document.querySelectorAll('button[value="delete"]');
let editButtons = document.querySelectorAll('button[value="edit"]');

checkboxes.forEach(function(checkbox) {
    checkbox.addEventListener('change', function() {
        checkbox.nextElementSibling.style.textDecoration = checkbox.checked ? "line-through" : "none";
        /*   
        if(checkbox.checked){
            text.style.textDecoration = "line-through";
        } else {
            text.style.textDecoration = "none";
        }
        */
    });
  });

deleteButtons.forEach((button) => {
    button.addEventListener('click', function() {
        button.parentElement.remove();
    });
  });

  editButtons.forEach((button) => {
    button.addEventListener('click', function() {
        button.previousElementSibling.focus();
    });
});





// checkboxes.addEventListener('click', cambiarEstilo);