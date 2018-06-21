  var $window = $(window).on('resize', function(){
    var width = $(this).width();
    if (width < 768) {
      $('.site-footer__column').accordion({
        "transitionSpeed": 100
      });
    }
  }).trigger('resize'); //on page load
</script>
