$(function(){
  $('a[rel*=leanModal]').leanModal({top:100,overlay:0.8});
  $("pre").each(function(){
    $(this).text($(this).text().replace(/^\s/, ""));
});
  var screenName = 'about_hiroppy';
  //twitter API
  var twitAPI = "http://api.twitter.com/1/statuses/user_timeline.json?callback=?";
  $.getJSON(twitAPI,
  {
    screen_name: screenName,
    count: '20',
    exclude_replies :true
  },
  function(data){
    var userName = data[0].user.name;
    var userId = data[0].user.name;
    var userPic = '<img src="'+data[0].user.profile_image_url+'" />';
    $("#userName").html(userName);
    $("#userPic").html(userPic);
    $("#screenName").html('<a href="http://twitter.com/'+screenName+'">'+screenName+'</a>');
    var container=$('#tweet-container');
    container.html('');
  $.each(data, function(i, item){
    var str = ' <div class="tweet">\
    <div class="txt">'+formatTwitString(item.text)+'</div>\
    <div class="time">'+relativeTime(item.created_at)+'</div>\
    <div class="action"><a href="http://twitter.com/intent/retweet?tweet_id='+item.id_str+'">retweet</a>  <a href="http://twitter.com/intent/favorite?tweet_id='+item.id_str+'">favorite</a></div>\
    </div>';
    container.append(str);
  });
  //jScroll
    container.jScrollPane();
  });
  $('#tweet').show('slow');
});

function formatTwitString(str){
  str=' '+str;
  str = str.replace(/((ftp|https?):\/\/([-\w\.]+)+(:\d+)?(\/([\w/_\.]*(\?\S+)?)?)?)/gm,'<a href="$1" target="_blank">$1</a>');
  str = str.replace(/([^\w])\@([\w\-]+)/gm,'$1@<a href="http://twitter.com/$2" target="_blank">$2</a>');
  str = str.replace(/([^\w])\#([\w\-]+)/gm,'$1<a href="http://twitter.com/search?q=%23$2" target="_blank">#$2</a>');
  return str;
}
function relativeTime(pastTime){
  var origStamp = Date.parse(pastTime);
  var curDate = new Date();
  var currentStamp = curDate.getTime();
  var difference = parseInt((currentStamp - origStamp)/1000);
  if(difference < 0) return false;
  if(difference <= 5)     return "Just now";
  if(difference <= 20)      return "Seconds ago";
  if(difference <= 60)      return "1 min ago";
  if(difference < 3600)   return parseInt(difference/60)+" mins ago";
  if(difference <= 1.5*3600)  return "1 hour ago";
  if(difference < 23.5*3600)  return Math.round(difference/3600)+" hours ago";
  if(difference < 1.5*24*3600)  return "1 day ago";
  var dateArr = pastTime.split(' ');
  return dateArr[1]+' '+dateArr[2]+
  (dateArr[3]!=curDate.getFullYear()?' '+dateArr[3]:'');
}