$(document).ready(function () {
  $(".menu-toggle").click(function () {
    $(".nav-links").toggleClass("active");

    if ($(this).text() === "☰") {
      $(this).text("✕");
    } else {
      $(this).text("☰");
    }
  });
});
