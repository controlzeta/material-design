var fbURL = "https://www.facebook.com/Mezzopane-1540279952936461/";
var twURL = "https://twitter.com/mezzopanefood";
var insURL = "https://www.instagram.com/mezzopane/";

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

$("#form1").submit(function(event) {
     var ajaxRequest;

    /* Stop form from submitting normally */
    event.preventDefault();

    /* Clear result div*/
    $("#result").html('');

    if($('#comments').val() == "" || $('#subject').val() == ""  || $('#first_name').val() == ""  || $('#email').val() == "" )
    {
        $("#result").html('Completa los datos que faltan para enviar el correo');
        return false;
    }

    /* Get from elements values */
    var values = { //Fetch form data
            'comments'     : $('#comments').val(),
            'subject'     : $('#subject').val(),
            'first_name'     : $('#first_name').val(),
            'last_name'     : $('#last_name').val(),
            'email'     : $('#email').val(),
        };

    /* Send the data using post and put the results in a div */
    /* I am not aborting previous request because It's an asynchronous request, meaning 
       Once it's sent it's out there. but in case you want to abort it  you can do it by  
       abort(). jQuery Ajax methods return an XMLHttpRequest object, so you can just use abort(). */
       ajaxRequest= $.ajax({
            url: "sendMail.php",
            type: "POST",
            data: values
        });

      /*  request cab be abort by ajaxRequest.abort() */

     ajaxRequest.done(function (response, textStatus, jqXHR){
          // show successfully for submit message
          $("#result").html('Gracias por contactarnos');
     });

     /* On failure of request this function will be called  */
     ajaxRequest.fail(function (){

       // show error
       $("#result").html('Ha ocurrido un error por favor inténtalo más tarde');
     });
   });
