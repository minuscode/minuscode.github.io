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

  setInterval(function(){
    $('.line-chart span').addClass('is-active');
  }, 500);


  var animation_elements = $('.work-wrap');
  
  function check_if_in_view() {
    var window_height = $(window).height();
    var window_top_position = $(window).scrollTop();
    var window_bottom_position = (window_top_position + window_height);

    $.each(animation_elements, function() {
      var element = $(this);
      var element_height = element.outerHeight();
      var element_top_position = element.offset().top;
      var element_bottom_position = (element.offset().top + element_height);

      
      if ((element_bottom_position >= window_top_position) && (element_top_position <= window_bottom_position)) {
        element.addClass('in-view');
      }
    });
  }
  
  $(window).on('scroll resize', check_if_in_view);
  $(window).trigger('scroll');

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
