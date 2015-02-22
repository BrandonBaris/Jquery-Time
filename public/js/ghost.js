$(function(){
var ghost_can_talk = true;
var randomTime = Math.floor((Math.random()*10000)+3000);
window.onload = function() {
  ghost_chat("Ooooo very spooky.");
};

$( "#stfu_ghost" ).click(function() {
  if (ghost_can_talk === true){
    $( "#ghost_talk" ).hide("fast");
    document.getElementById("stfu_ghost").innerHTML = "Talk to me!";
    ghost_can_talk = false;
    return false;
  } 
  if (ghost_can_talk === false){
    document.getElementById("stfu_ghost").innerHTML = "Be Quiet";
    ghost_can_talk = true;
    return true;    
  }
});

function ghost_chat(msg){
  if (ghost_can_talk === true){
    var randomer = Math.floor(Math.random()*ghostscript.length);
      document.getElementById("ghost_talk").innerHTML =  ghostscript[randomer];
      $( "#ghost_talk" ).show("slow").delay( 3000 ).fadeOut(2000);
  }
}

setInterval( function() {
  if (ghost_can_talk === true) {
  ghost_chat();
  }
},randomTime);

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
  $( "#ghost_dude" ).fadeIn( 1000 );
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
});

$( ".back_2_code" ).click(function() {
  $( "p" ).fadeIn( 1000 );
  $( "ul" ).fadeIn( 1000 );
  $( "header" ).fadeIn( 1000 );
  $( ".button_col").fadeOut( 1000 );
  $( "#ghost_dude" ).fadeOut( 1000);
});

$( "div#ghost_talk" ).click(function() {
  $( "div#ghost_talk" ).hide( "fast" );
});

}); // end closure