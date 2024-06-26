(function ($) {
  "use strict";

  //Add OnepageNav / Sidebar
  function sideNav() {
    if ($(".menu-box .sticky-menu").length) {
      $(".menu-box .sticky-menu ul").onePageNav();
    }
  }

  //Add Scroll Bar To Sidebar
  if ($("#sidebar .menu-box").length) {
    $("#sidebar .menu-box").mCustomScrollbar({
      axis: "y",
      autoExpandScrollbar: false,
    });
  }

  //animate to top on Page Refresh
  $("html, body").animate(
    {
      scrollTop: $("html, body").offset().top,
    },
    1000
  );

  $("pre.code").highlight();

  /* ==========================================================================
   When document is ready, do
   ========================================================================== */

  $(document).on("ready", function () {
    sideNav();
  });

  $(".sub-menu ul").hide();
  $(".sub-menu a").click(function () {
    $(this).parent(".sub-menu").children("ul").slideToggle("100");
    $(this).find(".right").toggleClass("fa-caret-up fa-caret-down");
  });
	
})(window.jQuery);
