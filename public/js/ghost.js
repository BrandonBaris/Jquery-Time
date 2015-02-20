$(function(){

window.onload = function() {
  ghost_chat("Ooooo very spooky.")
}
function ghost_chat(msg){
  document.getElementById("ghost_talk").innerHTML =  msg;
  $( "#ghost_talk" ).show("slow").fadeOut( 6000 );
}

$( ".show_it" ).click(function() {
  $( "#ghost_dude" ).show( "slow" ); 
  // animation runs slow (600ms)
  ghost_chat("Wow, using a .show() to show an example of itself. So meta.");
});

$( ".hide_it" ).click(function() {
  $( "#ghost_dude" ).hide( "fast" ); 
  // animation runs fast (200ms)
  ghost_chat("I'm gone oooooo");
});

$( ".toggle_it" ).click(function() {
  $( "#ghost_dude" ).toggle( 3000 ); 
  // animations runs at a custom slow speed of 3secs
  ghost_chat("OOOooOoOooO");
});

$( ".fade_in" ).click(function() {
  $( "#ghost_dude" ).fadeIn( 1000 );
  ghost_chat("I'm here! BOO!");
});

$( ".fade_out" ).click(function() {
  $( "#ghost_dude" ).fadeOut( "slow" );
  ghost_chat("I'll be back...");
});

$( ".fade_toggle" ).click(function() {
  $( "#ghost_dude" ).fadeToggle( "slow" );
  ghost_chat("Doing what ghosts do best...");
});

$( ".fade_low" ).click(function() {
  $( "#ghost_dude" ).fadeTo( "slow" , 0.25);
  ghost_chat("3spooky5me");
});

$( ".fade_high" ).click(function() {
  $( "#ghost_dude" ).fadeTo( "slow" , 1);
  ghost_chat("Boo...p programming?");
});

$( ".slide_down" ).click(function() {
  $( "#ghost_dude" ).slideDown( "slow" );
  ghost_chat("Time to do the JS Booooogaloo! Get it?!");
});

$( ".slide_up" ).click(function() {
  $( "#ghost_dude" ).slideUp( "slow" );
  ghost_chat("This isn't my final form...");
});

$( ".slide_toggle" ).click(function() {
  $( "#ghost_dude" ).slideToggle( "slow" );
  ghost_chat("EY BAE BOO");
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
  $( "#ghost_dude" ).fadeIn( 1000 );
  ghost_chat("Just me and you boo.");
});

$( ".back_2_code" ).click(function() {
  $( "p" ).fadeIn( 1000 );
  $( "ul" ).fadeIn( 1000 );
  $( "header" ).fadeIn( 1000 );
  $( ".button_col").fadeOut( 1000 );
  $( "#ghost_dude" ).fadeOut( 1000)
  ghost_chat("I see how it is.");
});

}); // end closure