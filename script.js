let checkboxes = document.querySelectorAll('input[type="checkbox"]');
let buttons = document.querySelectorAll('button');

checkboxes.forEach(function(checkbox) {
    checkbox.addEventListener('change', function() {
        checkbox.parentElement.style.textDecoration = checkbox.checked ? "line-through" : "none";
        /*   
        if(checkbox.checked){
            text.style.textDecoration = "line-through";
        } else {
            text.style.textDecoration = "none";
        }
        */
    });
  });

buttons.forEach((button) => {
    button.addEventListener('click', function() {
        // por cada boton clicado
        // display none el label que con id incluido en el id del button
        button.parentElement.remove();
        console.log("remove")
    });
  });





// checkboxes.addEventListener('click', cambiarEstilo);