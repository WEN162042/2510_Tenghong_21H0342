//[Main Javascript]

;(function ($) {
  "use strict"

  // Preloader
  $(window).on("load", function () {
    function removePreloader() {
      var preLoader = $("#preloader")
      preLoader.fadeOut()
    }
    setTimeout(removePreloader, 1000)
  })

  // fixed-nav
  $(document).on("scroll", function () {
    var scroll = $(this).scrollTop()
    var topDist = $("header").position()
    if (scroll > topDist.top) {
      $("header").addClass("fixed-nav animated fadeInDown")
    } else {
      $("header").removeClass("fixed-nav animated fadeInDown")
    }
  })
})(jQuery) // End of use strict
