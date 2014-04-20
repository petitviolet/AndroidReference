jQuery(function($) {
  $('.nojump').on('click', function(e) {
    e.preventDefault();
  });
  $('.name').on('click', function() {
    $(this).siblings('.description').toggle('fast');
  });

  var descriptions = $(".description");
  descriptions.hide();
  var res_contents = $(".res_content");
  res_contents.hide();
  $('.res').on('click', function() {
    res_contents.toggle('fast');
  });

});
