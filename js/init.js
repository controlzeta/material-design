var fbURL = "https://www.facebook.com/Mezzopane-1540279952936461/";
var twURL = "https://www.facebook.com/Mezzopane-1540279952936461/";
var insURL = "https://www.facebook.com/Mezzopane-1540279952936461/";

// $("head").first().append('<script type="application/ld+json">' +
// 	'{ '+
// 	  '"@context" : "http://schema.org",' +
// 	  '"@type" : "LocalBusiness",' +
// 	  '"name" : "mezzopane",' +
// 	  '"image" : "http://40.118.247.246/mezzopane/img/mezzopane.png",' +
// 	  '"telephone" : "23154654654",' +
// 	  '"address" : {' +
// 	    '"@type" : "PostalAddress",' +
// 	    '"streetAddress" : "Filadelfia 128 Col. Nápoles",' +
// 	    '"addressLocality" : "Ciudad de México"' +
// 	  '}' +
// 	'}' +
// 	'</script>');

  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-73301537-1', 'auto');
  ga('send', 'pageview');

(function($){
  $(function(){

  $('.button-collapse').sideNav();
  $('.parallax').parallax();
	$('.materialboxed').materialbox();
	$('#fbURL').attr('href', fbURL);
	$('#twURL').attr('href', twURL);
	$('#insURL').attr('href', insURL);

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
      }, 5000); 

  }); // end of document ready
})(jQuery); // end of jQuery name space
