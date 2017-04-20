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

  $('.contact-form form').validator().on('submit', function (e) {
    if (e.isDefaultPrevented()) {
      // handle the invalid form...
    } else {
      e.preventDefault();
      submitContactForm();
      // everything looks good!
    }
  });
});

function submitContactForm(){
  var form = $('.contact-form form');
  var form_data = form.serialize();

  $.ajax({
    type: 'POST',
    url: '../scripts/form-u13283.php',
    dataType: 'json',
    data: form_data,
    success: function(ret_data, status) {
      if(ret_data && ret_data.FormResponse && ret_data.FormResponse.success == true) {
        swal("Thanks!", "We'll be in touch shortly.", 'success');
      }
      else {
        swal("Oops!", "The server encountered an error.", 'error');
      }
    }
  });
}

