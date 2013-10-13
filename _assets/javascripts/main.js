jQuery(document).ready( function($) {

  // Open external links in a new window
  $('a[rel="external"]').on('click', function() {
    var url = $(this).attr('href');
    window.open(url, '_blank');
    return false;
  });
});