
const navIcon = document.querySelector('.nav-icon');
const nav = document.querySelector('.nav');

navIcon.addEventListener('click', function() {
  this.classList.toggle('nav-icon--active');
  nav.classList.toggle('nav--active');
});

// находим ссылки внутри моб навигации
const navLinks = document.querySelectorAll('.nav a'); 
//console.log(navLinks);

//обходим ссылки методом forEach
navLinks.forEach(function(item) {
  //для каждой ссылки добавляем прослушку по событию 'клик'
  item.addEventListener('click', function() {
    navIcon.classList.remove('nav-icon--active'); //убираем активный класс у иконки мобильной навигации
    nav.classList.remove('nav--active'); // убираем активный класс у блока моб навигации
  });
});