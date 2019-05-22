

function toggleMenu(visible) {
   var elements = document.querySelectorAll('.menu-disabled');
   for (var i = 0; i < elements.length; i++) {
       elements[i].classList.toggle('show', visible);
   }
  }

  function resize(visible) {
    var elements = document.querySelectorAll('.your-manager-photo');
    for (var i = 0; i < elements.length; i++) {
        elements[i].classList.toggle('your-manager-photo-2', visible);
    }
   }

   function resize2(visible) {
    var elements = document.querySelectorAll('.online-photo');
    for (var i = 0; i < elements.length; i++) {
        elements[i].classList.toggle('online-photo-2', visible);
    }
   }

  document.querySelector('.hamburger').addEventListener('click', function(e) {
    e.preventDefault();
    toggleMenu();
    resize();
    resize2()
  });