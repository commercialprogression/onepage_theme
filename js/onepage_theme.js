(function ($, Drupal) {

  Drupal.behaviors.onepage_theme = {
    attach: function(context, settings) {
      $('.view-display-id-anchor_block .link-list').ddscrollSpy({
        scrolltopoffset: -100
      });
    }
  };

})(jQuery, Drupal);
