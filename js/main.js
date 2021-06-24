$(document).ready(function () {
  // jQuery methods go here...

  // hide navigation links
  $(".nav-links").hide();
  $("#menu").click(function () {
    $(".nav-links").slideToggle();
  });

  // scroll back to top
  $('#up').click(function() {      // When arrow is clicked
    $('body,html').animate({
        scrollTop : 0                       // Scroll to top of body
    }, 500);
});
});
