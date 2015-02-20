$(function(){

// window.onload = function() {
//   console.log('awdwa');
//   $( "ul pre button" ).addClass( "hideme" );
// }

$( ".show_it" ).click(function() {
  $( "#ghost_dude" ).show( "slow" ); 
  // animation runs slow (600ms)
});

$( ".hide_it" ).click(function() {
  $( "#ghost_dude" ).hide( "fast" ); 
  // animation runs fast (200ms)
});

$( ".toggle_it" ).click(function() {
  $( "#ghost_dude" ).toggle( 3000 ); 
  // animations runs at a custom slow speed of 3secs
});

$( ".fade_in" ).click(function() {
  $( "#ghost_dude" ).fadeIn( "slow" );
});

$( ".fade_out" ).click(function() {
  $( "#ghost_dude" ).fadeOut( "slow" );
});

$( ".fade_toggle" ).click(function() {
  $( "#ghost_dude" ).fadeToggle( "slow" );
});

$( ".fade_low" ).click(function() {
  $( "#ghost_dude" ).fadeTo( "slow" , 0.25);
});

$( ".fade_high" ).click(function() {
  $( "#ghost_dude" ).fadeTo( "slow" , 1);
});

$( ".slide_down" ).click(function() {
  $( "#ghost_dude" ).slideDown( "slow" );
});

$( ".slide_up" ).click(function() {
  $( "#ghost_dude" ).slideUp( "slow" );
});

$( ".slide_toggle" ).click(function() {
  $( "#ghost_dude" ).slideToggle( "slow" );
});

$( "li button:nth-child(3)" ).click(function() {
  $( this ).next().slideToggle( 1000 ); 
  // $( "pre button" ).toggleClass( "hideme" );
});

$( "#tog_para" ).click(function() {
  $( "p" ).toggle( "fast" );
});

$( "#close_all" ).click(function() {
  $( "pre" ).hide( "fast" );
});

$( "#open_all" ).click(function() {
  $( "pre" ).show( "fast" );
});

$( "#hide_noneffects" ).click(function() {
  $( "p" ).hide( "fast" );
  $( "ul" ).hide( "fast" );
  $( "header" ).hide( "fast" );
  $( ".button_col").show( "fast" );
});

$( ".no_ghost_bro" ).click(function() {
  $( "p" ).fadeIn( "slow" );
  $( "ul" ).fadeIn( "slow" );
  $( "header" ).fadeIn( "slow" );
  $( ".button_col").fadeOut( "slow" );
});

}); // end closure