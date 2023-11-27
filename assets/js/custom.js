$(function() {
/* Shift window when using anchor to allow for fixed masthead and or fixed buttons */
  var shiftWindow = function() { 
// pretty url - removes the hash from the url
    window.history.replaceState("", document.title, window.location.pathname);
    scrollBy(0, -25);
  };
  if (location.hash) shiftWindow();
  window.addEventListener("hashchange", shiftWindow);

//shrink header
/*  var shrinkHeader = 35;
  $(window).scroll(function () {
    var scroll = getCurrentScroll();
    if (scroll >= shrinkHeader) {
      $('nav.navbar-lower.navbar-sticky').addClass('navbar-stuck');
      $('section#generic-header').css("margin-top", "75px");
    }
    else {
      $('nav.navbar-lower.navbar-sticky').removeClass('navbar-stuck');
      $('section#generic-header').css("margin-top", "0");
    }
  });
  function getCurrentScroll() {
    return window.pageYOffset || document.documentElement.scrollTop;
  }*/

  $('header nav .navbar-nav li.nav-item .nav-link').click( function(e) {
    $('header nav .navbar-nav li.nav-item .nav-link').removeClass('active');
    $(this).addClass('active');
    $('header nav .navbar-nav li.nav-item .dropdown-menu.collapse').collapse('hide');
  });
  $(document).on("click", function(event){
    var $trigger = $(".dropdown");
    if($trigger !== event.target && !$trigger.has(event.target).length){
      $(".dropdown-menu").collapse('hide');
      $('header nav .navbar-nav li.nav-item .nav-link').removeClass('active');
    }
  });

/* Dynamic lightbox - load page into modal-content */
  $('.lb-button').off().on('click', function(e){
    e.preventDefault();
    $('#custom-lb').modal('show').find('.modal-content').load($(this).attr('href'));
  });

  $('.lb-button-luxury').off().on('click', function(e){
    e.preventDefault();
    $('#custom-lb-luxury').modal('show');
  });
  $('.lb-button-activities').off().on('click', function(e){
    e.preventDefault();
    $('#custom-lb-activities').modal('show');
  });
  $('.lb-button-amenities').off().on('click', function(e){
    e.preventDefault();
    $('#custom-lb-amenities').modal('show');
  });
  $('.lb-button-sunday').off().on('click', function(e){
    e.preventDefault();
    $('#custom-lb-sunday').modal('show');
  });
  $('.lb-button-oceanside').off().on('click', function(e){
    e.preventDefault();
    $('#custom-lb-oceanside').modal('show');
  });

});
