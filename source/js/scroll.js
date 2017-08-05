
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

  // backlight menu with scroll
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
  ///smooth scroll menu
  $(function () {
    $(document).on("scroll", onScroll);
    $("a[href^=#js]").click(function(e){
      e.preventDefault();

      var hash = $(this).attr("href");
      var target = $(hash);

      $("html, body").stop(true, true).animate({
        scrollTop: target.offset().top - navHeight + 1
      }, 500, function(){
        $(document).on("scroll", onScroll);
      });

    });
  });
}());