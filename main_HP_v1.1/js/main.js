$(window).load(function() {
  $('.spinner').append("<h1 class=\"loader\"><span>L</span><span>O</span><span>A</span><span>D</span><span>I</span><span>N</span><span>G</span></h1>");
  $('.spinner').animate({
      'opacity' : 0
  }, 1000, 'easeOutCubic', function() {
      jQuery(this).css('display', 'none')
  });
});

$(document).ready(function(){
  console.log("complete");

  $('.body-container:not(body#body-id .body-container)').css({display:'block',marginLeft:$(window).width(),opacity:'0'});
  $('.body-container:not(body#body-id .body-container)').animate({marginLeft:'0px',opacity:'1'},500);

  $('body#body-id .body-container').css({display:'block',opacity:'0'});
  $('body#body-id .body-container').animate({opacity:'1'},500);

  eventFunction();
});

var eventFunction = function(){

  $('div').click(function() {
    id = $(this).attr("id");
    if(id === undefined) return;
    if($("#"+id).find('a').attr('href') === undefined) return;
    jumpLink($("#"+id).find('a').attr('href'));
  });

  $('button').click(function(){
    if($(this).find('a').attr('href') === undefined) return;
    jumpLink($(this).find('a').attr('href'));
  });

  var jumpLink = function(url){
    $('.body-container').animate({marginLeft:'-=' + $(window).width() + 'px',opacity:'0'},500,function(){
        location.href = url;
        setTimeout(function(){
          $('.body-container').css({marginLeft:'0',opacity:'1'})
        },1000);
      });
    };

  //逃走の音を入れたい
  // easeInElastic
  $("#explode-tile").click(function(){
    // 上の段
    $("#time-tile").animate({
      top:'700px',opacity:'0'},2800,"easeInElastic");
    $("#github-tile").animate({
      top:'700px',left:'700px',opacity:'0'},2800,"easeInElastic");
    $("#aoj-tile").animate({
      right:'700px',opacity:'0'},2800,"easeInElastic");
    $("#twitter-tile").animate({
      left:'700px',opacity:'0'},2800,"easeInElastic");
    $("#facebook-tile").animate({
      top:'700px',right:'700px',opacity:'0'},2800,"easeInElastic");
    $("#another-account-tile").animate({
      top:'700px',opacity:'0'},2800,"easeInElastic");
    // 真ん中の段
    $("#flash-tile").animate({
      left:'700px',opacity:'0'},3000,"easeInElastic");
    $("#windows-app-tile").animate({
      top:'700px',opacity:'0'},3000,"easeInElastic");
    $("#iphone-app-tile").animate({
      right:'700px',opacity:'0'},3000,"easeInElastic");
    $("#twitter-bot-tile").animate({
      left:'700px',opacity:'0'},3000,"easeInElastic");
    $("#web-app-tile").animate({
      top:'700px',opacity:'0'},3000,"easeInElastic");
    $("#blog-tile").animate({
      right:'700px',opacity:'0'},3000,"easeInElastic");
    //下の段
    $("#picture-tile").animate({
      top:'700px',opacity:'0'},3200,"easeInBounce");
    $("#information-tile").animate({
      right:'700px',opacity:'0'},3200,"easeInBounce");
    $("#profile-tile").animate({
      left:'700px',opacity:'0'},3000,"easeInBounce");
    $("#explode-tile").animate({
      top:'700px',opacity:'0'},3200,"easeInBounce");
  });

  $(".start").mouseover(function(){
    console.log('touch');
  });
};