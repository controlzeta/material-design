var fbURL = "https://www.facebook.com/Mezzopane-1540279952936461/";
var twURL = "https://www.facebook.com/Mezzopane-1540279952936461/";
var insURL = "https://www.facebook.com/Mezzopane-1540279952936461/";

  //Credits Scroller Function
  function fun(){
      $('#credit-container').css('top', '100%');
      $('#credit-container').animate({top:"-100%"}, 15000, fun);
  }
  
  // Analytics Code
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','http://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-73301537-1', 'auto');
  ga('send', 'pageview');

(function($){
  $(function(){

  $('.button-collapse').sideNav();
  $('.parallax').parallax();
	$('.materialboxed').materialbox();

  // Analytics Track Outbound Links
  $( "#fbURL" ).click(function() {  trackOutboundLink(fbURL);  });
  $( "#twURL" ).click(function() {  trackOutboundLink(twURL);  });
  $( "#insURL" ).click(function() {  trackOutboundLink(insURL);  });

  //Credits Scroller Function
  $( "#credits" ).click(function() {
    $(this).hide();
  });

    $('body').progressTracker({

    // Allows for navigating between content sections
    linking: true,

    // "constant" = always visiable
    // "hover" = shows on mouse hover
    tooltip: "hover",

    // The number specified is added to the default value at which the tracker changes to the next section.
    positiveTolerance: 0,

    // The number specified is subtracted from the default value at which the tracker changes to the next section.
    negativeTolerance: 0,

    // Only displays the progress tracker when the user is between the top of the first section and the bottom of the last;
    // It is only shown when the tracker sections are in view.
    // Specify false if you want the tracker to always show.
    displayWhenActive: false,

    // Specify the value (in pixels) that you wish the progress tracker to be hidden when it is below that.
    disableBelow: 0,

    // Specifies what the plugin takes into account when deciding when to switch to the next section.
    // "tracker" or "viewport"
    tracking: "viewport"

  });

      /* Preloader */
      setTimeout(function(){
          jQuery('body').addClass('loaded');
          jQuery('h1').css('color','#222222');
      }, 3000);

      setTimeout(function(){
        jQuery('#loader-wrapper').hide();
      }, 4000); 
      
    // Credits Call
    $('body').mousedown(function(e) {
    if (e.which === 3) {
        fun();
        $('#credits').css('display','block');
        e.preventDefault();
    }
  });

  }); // end of document ready
})(jQuery); // end of jQuery name space

// Analytics Track Outbound Links
var trackOutboundLink = function(url) {
   ga('send', 'event', 'outbound', 'click', url, {
     'transport': 'beacon',
     'hitCallback': function(){
                        window.open(
                    url,
                    '_blank' // open in a new window.
                  );
     }
   });
}
