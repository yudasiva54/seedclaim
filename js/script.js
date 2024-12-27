$(document).ready(function () {
  // Плавная прокрутка при клике на ссылку
  $('a[href^="#"]').on("click", function (event) {
    var target = $(this.getAttribute("href"));

    if (target.length) {
      event.preventDefault();
      $("html, body").stop().animate(
        {
          scrollTop: target.offset().top,
        },
        1000
      );
    }
  });
});

$(document).ready(function () {
  $("#gfg").each(function () {
    var $this = $(this);
    var initialValue = parseInt($this.text(), 10);
    $this.text("0");
    $({ count: 0 }).animate(
      { count: initialValue },
      {
        duration: 4000, // длительность анимации в миллисекундах
        easing: "swing",
        step: function (now) {
          $this.text(Math.floor(now));
        },
      }
    );
  });
});
