let checkboxes = document.querySelectorAll('input[type="checkbox"]');

checkboxes.forEach(function(checkbox) {
    checkbox.addEventListener('change', function() {
        let text = document.getElementById(checkbox.value);
        text.style.textDecoration = checkbox.checked ? "line-through" : "none";
        /*   
        if(checkbox.checked){
            text.style.textDecoration = "line-through";
        } else {
            text.style.textDecoration = "none";
        }
        */
    });
  });



// checkboxes.addEventListener('click', cambiarEstilo);