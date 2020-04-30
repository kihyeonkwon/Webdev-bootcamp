// $(document).keypress(function (event) {
//   $("h1").text(event.key);
// });

// $("h1").on("click", function () {
//   $("h1").css("color", "purple");
// });

// $("h1").before("<button>before</button>");
// $("h1").after("<button>after</button>");
// $("h1").prepend("<button>prepend</button>");
// $("h1").append("<button>append</button>");

// $("button").on("click", function () {
//   $("h1").slideToggle();
// });

// $("button").on("click", function () {
//   $("h1").animate({ opacity: 0.5 });
// });

$("button").on("click", function () {
  $("h1").slideUp().slideDown().animate({ opacity: 0.5 });
});
