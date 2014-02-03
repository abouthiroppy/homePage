google.load("feeds", "1");

$(window).load(function() {
  // $('.spinner').append("<h1 class=\"loader\"><span>L</span><span>O</span><span>A</span><span>D</span><span>I</span><span>N</span><span>G</span></h1>");
  // $('.spinner').animate({
  //     'opacity' : 0
  // }, 1000, 'easeOutCubic', function() {
  //     $(this).css('display', 'none');
  // });
  $('.spinner').css('display','none');
});

$(document).ready(function(){
  var file_url = location.href;
  file_url = file_url.substring(file_url.lastIndexOf("/")+1,file_url.length);
  file_url = file_url.substring(0,file_url.indexOf("."));

  if(file_url === "index" || file_url === ""){
    $("#ticker").jStockTicker({interval: 20});
    getbloginfo();
  }
  $('.body-container:not(body#body-id .body-container)').css({display:'block',marginLeft:$(window).width(),opacity:'0'});
  $('.body-container:not(body#body-id .body-container)').animate({marginLeft:'0px',opacity:'1'},500);

  $('body#body-id .body-container').css({display:'block',opacity:'0'});
  $('body#body-id .body-container').animate({opacity:'1'},500);

  eventFunction();
});

var getbloginfo = function(){
  var feedurl = "http://d.hatena.ne.jp/about_hiroppy/rss2";
  var feed = new google.feeds.Feed(feedurl);
  feed.load(function (result){
    if (!result.error){
      // console.log(result.feed.entries);
      for(var i=0;i<result.feed.entries.length;i++){
        if(result.feed.entries[i].title === "サイト") continue;
        $("#ticker").append("<a class= \"ticker-a\" href="+result.feed.entries[i].link+" >"+result.feed.entries[i].title+"</a>");
      }

    }
    else{
      $("#ticker").append("<span>error</span>");
    }
  });
};

var eventFunction = function(){

  $('a').click(function(){
    var url = $(this).attr('href');
    if(url.indexOf("#") != -1) return;
    jumpLink(url);
  });

  $('div').click(function() {
    var id = $(this).attr("id");
    if(id === undefined) return;
    if($("#"+id).find('a').attr('href') === undefined) return;
    jumpLink($("#"+id).find('a').attr('href'));
  });

  $('button').click(function(){
    if($(this).find('a').attr('href') === undefined) return;
    jumpLink($(this).find('a').attr('href'));
  });

  var jumpLink = function(url){
    // if(url == "index.html" || url.indexOf('http') != -1){
    if(url == "index.html"){
      $('.body-container').animate({marginRight:'-=' + $(window).width() + 'px',opacity:'0'},500,function(){
          location.href = url;
          setTimeout(function(){
            $('.body-container').css({marginRight:'0',opacity:'0'})
          },1000);
        });
    }
    else{
      $('.body-container').animate({marginLeft:'-=' + $(window).width() + 'px',opacity:'0'},500,function(){
          location.href = url;
          setTimeout(function(){
            $('.body-container').css({marginLeft:'0',opacity:'0'})
          },1000);
        });
    }
  };

  //逃走の音を入れたい
  // easeInElastic
  $("#explode-tile").click(function(){
    $("header").animate({opacity: 0}, 3000 );
    $(".row").animate({opacity: 0}, 3000 );
    $(".ticker-row").animate({opacity:0},2000);
    // 上の段
    $("#time-tile").animate({
      top:'700px',opacity:'0'},2800,"easeInElastic");
    $("#github-tile").animate({
      top:'700px',left:'700px',opacity:'0'},2800,"easeInElastic");
    $("#link-tile").animate({
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
      top:'700px',opacity:'0'},3200,"easeInBounce",function(){
      $('.body-container').css('display','none');
      $('body').append("<div class=\"android-icon\"><img src=\"images/Android_icon.png\" width=300,height=300><h1 style=\"opacity:0;\" id=\"android-comment\">set me free!</h1></div>");
        // $('body').append("<div class=\"android-icon\"><ul class=\"android-icon-ul\"><li class=\"android-icon-li\"><img src=\"images/Android_icon.png\" width=300,height=300><h1>set me free!</h1></li><li class=\"android-icon-li\"><h2>yeah!</h2></li></div>");
          $('.android-icon').animate({top:'150px'},1500,"easeOutBounce",function(){
            $('#android-comment').animate({opacity:1,duration:1500,delay:700});
            // $('.android-icon').mouseover(function(){
            // });
          });
      });
  });

 $('.start').on('mouseenter', function() {
    $('.start').animate({color:'#007aff',duration:700});
    timerId = setTimeout(function() {
        //$('.start-container').css('display','inline');
        //$('.start-container').animate({opacity:0.98,duration:250});
        // $('.start-container').click(function(){
        //   $('.start-container').animate({opacity:0,duration:250},function(){
        //     $('.start-container').css('display','none');
        //   });
        // });
      }, 710);
    });
  $('.start').on('mouseleave', function() {
    $('.start').animate({color:'#222',duration:700});
    clearTimeout(timerId);
  });

  // start select-code
  $('.code-button').click(function(){
    console.log('button-click');
    $("#code").load('code/emacs.html');
  });
};