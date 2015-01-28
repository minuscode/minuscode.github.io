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

// Work page
//-----------------------------
MINUS.work = (function($) {
  var categoryList = $('.categories'),
      workItem = $('.work-item');

  categoryList.delegate('a', 'click', function() {
    var catName = $(this).data('category');

    changeLinkState($(this));
    hideWorkItems(catName);
  });

  function changeLinkState(clicked) {
    categoryList.find('li a').removeClass('active');
    clicked.addClass('active');
  }

  function hideWorkItems(catName) {
    workItem.each(function(){
      category = $(this).data('category');

      if(category !== catName) {
        $(this).addClass('hidden');
      }
    });
  }

})(jQuery);