
//countdown timer
$(function(){

  var time = new Date();
  var target_time = new Date(time.getFullYear(), time.getMonth(), time.getDate());
  console.log(target_time);
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

// show menu when scroll block presentation
$(function () {
   var presentationH = $('.presentation__top').height();
   $(document).on('scroll', function (e) {
     e.preventDefault();
     var documentScroll = $(this).scrollTop();
     if (documentScroll > presentationH) {
       $('.header__nav').addClass('nav__fixed');
     }
     else $('.header__nav').removeClass('nav__fixed');
   });
});
//
var menu_selector = ".header__nav";
var navHeight = $(menu_selector).outerHeight();
//
function onScroll(){
  var scrollTop = $(document).scrollTop() + navHeight;
  $(menu_selector + " a").each(function(){
    var hash = $(this).attr("href");
    var target = $(hash);
    var currentScroll = target.position().top ;
    console.log(scrollTop);
    if (currentScroll <= scrollTop && currentScroll + target.outerHeight() > scrollTop) {
      $(menu_selector + " a.active").removeClass("active");
      $(this).addClass("active");
    } else {
      $(this).removeClass("active");
    }
  });
};

$(function () {

  $(document).on("scroll", onScroll);

  $("a[href^=#js]").click(function(e){
    e.preventDefault();

    $(document).on("scroll");
    $(menu_selector + " a.active").removeClass("active");
    $(this).addClass("active");
    var hash = $(this).attr("href");
    var target = $(hash);

    $("html, body").stop(true, true).animate({
      scrollTop: target.offset().top - navHeight + 1
    }, 500, function(){
      $(document).on("scroll", onScroll);
    });

   });

});
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