var MINUS = MINUS || {}

// Modules
//-----------------------------

MINUS = (function($) {

  function init() {
    if ($('#contact').length) {

      $(this).submit(function(e) {
          e.preventDefault(); // don't submit multiple times
          this.submit(); // use the native submit method of the form element
          //alert("SUBMITTED");
          $(this).html("bongo bongo! thanks");
      });
    }

  }

  return {
    init: init
  };

})(jQuery);

// Init all the things
//-----------------------------
(function($) {

  MINUS.init();

})(jQuery);

