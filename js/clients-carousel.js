$(document).ready(function(){
  // блок со слайдами
  const owl = $("#clients-slider");
  // запускаем карусель
  owl.owlCarousel({ 
  items: 1, 
  loop: true
});
  // клик по кнопке вперед
  $('#arrowNext').click(function() {
    owl.trigger('next.owl.carousel');
  })
  // клик по кнопке назад
  $('#arrowPrev').click(function() {
    owl.trigger('prev.owl.carousel');
  })
});



