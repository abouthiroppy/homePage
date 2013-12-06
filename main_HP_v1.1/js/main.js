$(document).ready(function(){
  console.log("complete");
  eventFunction();
});

var eventFunction = function(){

  $('div').click(function() {
    // var w=window.open();
    location.href = $(this).find('a').attr('href');
  });

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