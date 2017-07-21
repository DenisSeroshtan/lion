
//countdown timer
$(function(){

  var time = new Date();
  var target_time = new Date(time.getFullYear(), time.getMonth(), time.getDate());
  var note = $('#note'),
      note2 = $('#note2'),
      note3 = $('#note3'),
      note4 = $('#note4'),
      note5 = $('#note5'),
      note6 = $('#note6'),
      ts = new Date(2017, 5, 14),
      newYear = true;

  if((new Date()) > ts){
    ts = target_time.valueOf()+1000*60*60*24;
    newYear = false;
  }

  $('.countdown').countdown({
    timestamp	: ts,
    callback	: function(days, hours, minutes, seconds){

      var message = "";

      message += days + " дней" + ( days==1 ? '':'' ) + ", ";
      message += hours + " часов" + ( hours==1 ? '':'' ) + ", ";
      message += minutes + " минут" + ( minutes==1 ? '':'' ) + " и ";
      message += seconds + " секунд" + ( seconds==1 ? '':'' ) + " <br />";

      if(newYear){
        message += "";
      }
      else {
        message += "";
      }

      note.html(message);
      note2.html(message);
      note3.html(message);
      note4.html(message);
      note5.html(message);
      note6.html(message);
    }
  });

  $('.countdown2').countdown({timestamp: ts});
  $('.countdown3').countdown({timestamp: ts});
  $('.countdown4').countdown({timestamp: ts});
  $('.countdown5').countdown({timestamp: ts});
  $('.countdown6').countdown({timestamp: ts});

});

(function () {

  var menuSelector = ".header__nav";
  var activeClass = "active";
  var navHeight = $(menuSelector).outerHeight();

// show menu when scroll block presentation
  $(function () {
     var presentationH = $('.presentation__top').height();
     $(document).on('scroll', function (e) {
       e.preventDefault();
       var documentScroll = $(this).scrollTop();
       if (documentScroll > presentationH) {
         $(menuSelector).addClass('nav__fixed');
       }
       else $(menuSelector).removeClass('nav__fixed');
     });
  });

  
  function onScroll(){
    var scrollTop = $(document).scrollTop() + navHeight;
    $(menuSelector + " a").each(function(){
      var hash = $(this).attr("href");
      var target = $(hash);
      var currentScroll = target.position().top ;
      if (currentScroll <= scrollTop && currentScroll + target.outerHeight() > scrollTop) {
        $(menuSelector + " a." + activeClass).removeClass(activeClass);
        $(this).addClass(activeClass);
      } else {
        $(this).removeClass(activeClass);
      }
    });
  };

  $(function () {

    $(document).on("scroll", onScroll);

    $("a[href^=#js]").click(function(e){
      e.preventDefault();

      $(document).on("scroll");
      $(menuSelector + " a." + activeClass).removeClass(activeClass);
      $(this).addClass(activeClass);
      var hash = $(this).attr("href");
      var target = $(hash);

      $("html, body").stop(true, true).animate({
        scrollTop: target.offset().top - navHeight + 1
      }, 500, function(){
        $(document).on("scroll", onScroll);
      });

    });
  });
})();
//
// $(function() {
//   var $menu = $("#my-menu").mmenu({
//     //   options
//     "navbar":{
//       "add" : false
//     }
//   });
//   var $icon = $("#my-icon");
//   var API = $menu.data( "mmenu" );
//
//   $icon.on( "click", function() {
//     API.open();
//   });
//
//   API.bind( "open:finish", function() {
//     setTimeout(function() {
//       $icon.addClass( "is-active" );
//     }, 100);
//   });
//   API.bind( "close:finish", function() {
//     setTimeout(function() {
//       $icon.removeClass( "is-active" );
//     }, 100);
//   });
// });