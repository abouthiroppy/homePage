$(document).ready(on_resize);
$(window).resize(on_resize);

function on_resize(){
  // console.log($(window).width(), $(window).height());
  var w = $(window).width();
  var h = $(window).height();
  var i = w/10;
  if(w < 1350+i){
    var ans= w/(1350+i);
    // console.log(ans);
    $("body").css("zoom",ans);
  }
  else $("body").css("zoom","1");
};
// on_resize();
jQuery(function($) {
  $("body").effectChain({ target: "div" });
});