(function ($, Drupal) {

  Drupal.behaviors.onepage_theme = {
    attach: function(context, settings) {
      // Smooth scroll to anchor links on front page
      var $html_body = $('html, body');
      var anchor_links = $('.view-display-id-anchor_block .views-row a');
      anchor_links.click(function() {
        $html_body.animate({
          scrollTop: $($.attr(this, 'href')).offset().top - 100
        }, 500);
        return false;
      });
    }
  };

})(jQuery, Drupal);
