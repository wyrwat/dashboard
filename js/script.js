

function toggleMenu(visible) {
   var elements = document.querySelectorAll('.menu-disabled');
   for (var i = 0; i < elements.length; i++) {
       elements[i].classList.toggle('show', visible);
   }
   

  }

  document.querySelector('.hamburger').addEventListener('click', function(e) {
    e.preventDefault();
    toggleMenu()
  });