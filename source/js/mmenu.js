$(function() {
  var $menu = $(".nav-mobile").mmenu({
    "navbar":{
      "add" : false
    },
    "pageScroll": {
      "scroll" : true
    },
    "offCanvas": {
      "position": "right"
    }
  });
  var $icon = $(".hamburger");
  var API = $menu.data( "mmenu" );

  $icon.on( "click", function() {
    API.open();
  });

  API.bind( "open:finish", function() {
    setTimeout(function() {
      $icon.addClass( "is-active" );
    }, 100);
  });
  API.bind( "close:finish", function() {
    setTimeout(function() {
      $icon.removeClass( "is-active" );
    }, 100);
  });
});
$(function () {
  wow = new WOW(
      {
        boxClass:     'wow',
        animateClass: 'animated',
        offset:       100,
        mobile:       true,
        live:         true
      }
  )
  wow.init();
});