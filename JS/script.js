$(document).ready(function () {
  $(".menu-toggle").click(function () {
    $(".nav-links").toggleClass("active");

    if ($(this).text() === "☰") {
      $(this).text("✕");
    } else {
      $(this).text("☰");
    }
  });

  $('#openModalBtn').click(function () {
      $('#signInModal').fadeIn();
    });

    $('#closeModalBtn').click(function () {
      $('#signInModal').fadeOut();
    });
});
