$(function() {
  $('.intro-image').css('background-image', "url('assets/images/random/" + (Math.floor(Math.random() * 10) + 1) + ".jpg')");

  var first_item = 0;

  for(var i = 1; i < 35; i++) {
    if (first_item == 0) {
      $("<div class='item active'><img src='assets/images/gallery/" + i + ".jpg'></div>").appendTo("#gallery .carousel-inner");
    }
    else {
      $("<div class='item'><img src='assets/images/gallery/" + i + ".jpg'></div>").appendTo("#gallery .carousel-inner");
    }

    first_item = 1;
  }
});

