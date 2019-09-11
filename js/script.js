$(function () {
  $("a[href^='#']").click(function () {
  
    var _href = $(this).attr("href");
    
    $("html, body").animate({ scrollTop: $(_href).offset().top + "px" });
    
    return false;
  
  })

  var nav = $("#main_menu").offset().top;

  $(window).scroll(function () {

    if ($(this).scrollTop() > nav) {

    $("#main_menu").addClass('fixed');

    } else {

    $("#main_menu").removeClass('fixed');

    }
  });

  // Перепиши на Jquery блеать!
  var btn = document.getElementsByClassName("btn");

btn = btn[2];

console.log(btn);

  var a = 2;

  function giveMeAdvice(a) {

    if (a == 1) {
    
    alert("Идем в магаз")
    
    } else if(a == 2) {
    
    alert("Идем домой");
    
    } else {
    
    alert("Ну и ладно!");
    
    }
    
    }
    
    
    
    btn.onclick = function (event) {
    
      event.preventDefault();
    
      giveMeAdvice(a);
    
    }

    $(".owl-carousel").owlCarousel({
      items: 1,
      loop: 1,
    });

    $('.counter').countUp({
      'time': 1000,
      'delay': 10
    });
      

});
