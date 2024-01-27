let fondoMenu = document.querySelector('.fondo_menu');
let subMenu = document.querySelector('.sub-menu');

fondoMenu.addEventListener('click', function() {

  subMenu.style.visibility = (subMenu.style.visibility === 'hidden') ? 'visible' : 'hidden';
  subMenu.style.zIndex = '999'; 

});


