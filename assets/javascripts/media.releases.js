$(function() {
  $.ajax({
    type: 'GET',
    url: 'press.php',
    dataType: 'json',
    success: function(ret_data, status) {
      if(ret_data.constructor === Array) {
        for(var i = 0; i < ret_data.length; i++) {
          var title = ret_data[i].title;
          var description = ret_data[i].description;
          var date_of_release = ret_data[i].date_of_release;
          $('<div class="col-xs-12 col-sm-6"><div class="panel panel-default"> <div class="panel-heading"> <h3 class="panel-title">' + title + ' - ' + date_of_release + '</h3> </div> <div class="panel-body">' + description + '</div> </div> </div>').appendTo('.media-releases');
        }
      }
    },
    error: function(jqxhr, status, error) {
      $('<div class="col-xs-12"><div class="panel panel-default"> <div class="panel-heading"> <h3 class="panel-title">Oops!</h3> </div> <div class="panel-body">We\'ve experienced a problem loading our Media releases.</div> </div> </div>').appendTo('.media-releases');
    }
  });
});
