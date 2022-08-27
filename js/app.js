$(function(){
  
   let intro = $("#intro");
   let header = $("#header");
   /* вводим id из html */
   let introH = intro.innerHeight();
   let headerH = header.innerHeight();
   /* узнаем их расположение */
   
   /* затемнение шапки сайта
   =========================================== */
   
   headerScroll();

   $(window).on("scroll  resize", function() {
      headerScroll();
   });
   /* выполняем функцию headerScroll() сразу при каждом входе */
   
   function headerScroll() {
      let introH = intro.innerHeight();
      let headerH = header.innerHeight();
      /* перезаписываем переменныеб что бы всегде были актуальными */
      
      console.log(1);
      console.log(introH, headerH);
      /* выводим переменные в консоль НЕ ВЛИЯЕТ НА КОД (можно удалить) */

      let scrollTop = $(this).scrollTop();

      if( scrollTop >= (introH - headerH) ) {
         header.addClass("header--dark");
      } else {
         header.removeClass("header--dark"); 
      }
   }
   
   /* 
   
   resize - ? типа переобновления данных хз не помню
   addClass - даем элементы указанный класс
   removeClass - удаляем указанный класс
   
   */
   
   /* плавный переход к блокам
   =========================================== */
   
   $("[data-scroll]").on("click", function(event) {
      event.preventDefault();
      /* ищем элементы с data-scroll, при клике на них меняется обычное поведение */
      
      let scrollEl = $(this).data("scroll")
      /* выясняется значение атрибута (из html) */
      let scrollElPos = $(scrollEl).offset().top;
      /* узнаем позицию элемента от верха страницы offset().top */
      
      $("html, body").animate({
         scrollTop: scrollElPos - headerH
      })
      
   })
   
   /* 
   
   $ - выборка элементов
   [data-scroll] - атрибут
   on() - событие
   event - отмена стандартного поведения 
   
   let - переменная
   $(this) - обращаемся именно к указаному элементу
   
   
   */
   
});

