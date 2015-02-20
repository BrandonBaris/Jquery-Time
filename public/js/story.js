$(function(){

$( ".show_it" ).click(function() {
  $( ".ghost_dude" ).show( "slow" );
});

$( ".hide_it" ).click(function() {
  $( ".ghost_dude" ).hide( "fast" );
});

$( ".toggle_it" ).click(function() {
  $( ".ghost_dude" ).toggle( 3000 );
});

$( ".fade_in" ).click(function() {
  $( ".ghost_dude" ).fadeIn( "slow" );
});

$( ".fade_out" ).click(function() {
  $( ".ghost_dude" ).fadeOut( "slow" );
});

$( ".fade_low" ).click(function() {
  $( ".ghost_dude" ).fadeTo( "slow" , 0.25);
});

$( ".fade_high" ).click(function() {
  $( ".ghost_dude" ).fadeTo( "slow" , 1);
});

$( ".fade_toggle" ).click(function() {
  $( ".ghost_dude" ).fadeToggle( "slow" );
});

$( ".slide_down" ).click(function() {
  $( ".ghost_dude" ).slideDown( "slow" );
});

$( ".slide_up" ).click(function() {
  $( ".ghost_dude" ).slideUp( "slow" );
});

$( ".slide_toggle" ).click(function() {
  $( ".ghost_dude" ).slideToggle( "slow" );
});


}); // end closure