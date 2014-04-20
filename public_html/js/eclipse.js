jQuery(function($) {
  $('.nojump').on('click', function(e) {
    e.preventDefault();
  });

  var descriptions = $(".description");
  descriptions.hide();
  var res_contents = $(".res_content");
  res_contents.hide();

  $(".res").toggle(
    function() {
    res_contents.show('slow');
  }, function() {
    res_contents.hide('slow');
  });
});
