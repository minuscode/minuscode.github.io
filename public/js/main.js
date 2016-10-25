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

  function init() {
    categoryList.delegate('a', 'click', function(e) {
      e.preventDefault();
      var catName = $(this).data('category');

      changeLinkState($(this));
      hideWorkItems(catName);
    });

    window.onhashchange = showAllProjects();
  }

  function changeLinkState(clicked) {
    categoryList.find('li a').removeClass('active');
    clicked.addClass('active');
  }

  function hideWorkItems(catName) {

    if(catName === 'all') {
      workItem.fadeIn(function(){
        $(this).removeClass('hide');
      });
    } else {
      workItem.each(function(){
        category = $(this).data('category');

        if(category !== catName) {
          $(this).fadeOut(function(){
            $(this).addClass('hide');
          });
        } else {
          $(this).fadeIn(function(){
            $(this).removeClass('hide');
          });
        }
      });
    }
  }

  function showAllProjects() {
    if(location.search === '?showall') {
      $('.hidden').css('display', 'inline');
    }
  }

  return {
    init: init
  };

})(jQuery);


// About Us page
//-----------------------------
MINUS.about_us = (function($) {


  function shuffle() {
    var shuffle_parent = $(".shuffle");
    var shuffle_child = $(".member");
    while (shuffle_child.length) {
        shuffle_parent.append(shuffle_child.splice(Math.floor(Math.random() * shuffle_child.length), 1)[0]);
    }
  }

  shuffle();


})(jQuery);


// Init all the work things
//-----------------------------
(function($) {

  MINUS.work.init();

})(jQuery);
