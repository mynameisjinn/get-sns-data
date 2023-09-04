<script  src="http://code.jquery.com/jquery-latest.min.js"></script>
<script async defer crossorigin="anonymous" src="https://connect.facebook.net/en_US/sdk.js"></script>
<div id="dv"></div>

<script>
  window.fbAsyncInit = function() {
    FB.init({
      appId            : '122098442228028554',
      autoLogAppEvents : true,
      xfbml            : true,
      version          : 'v17.0' // 버전은 그래프 API GET 옆에나타나는 버전과 일치시켜야 합니다.
    });

    FB.api(
    		"https://graph.facebook.com/v17.0/122098442228028554/posts?access_token=EAAJHg2dp9LUBO4mdEq72VjIrHxfgr8Ng0ZCQrnXO4gGXAyxbq7rRZB66xuyXmcmkHu3wrd1csPK3lkKJ8oI51U4yOCFykCAZA1rM0nUt3SCZBgMavXElHZAlHgBV92HpN39qCVYF413pln6KvXyI6IsHfAE02IWFNER0xoeoffb4e9KZAf8I8AkHE0jI0YYgPEh8ZAMXnRWzE2DZCdrmbE5gfpAPdgZDZD",
    		'GET',
    		{"fields":"attachments,message,picture,link,name,caption,description,source"},
    		function(response) {
    			console.log(response)
    			  var data = response.data
    		      var html = ""
    		      for(var i=0; i<data.length; i++){
    		    	  console.log(data[i])
    		    		html += '<h1 id="title'+ i +'">' + data[i].name + '</h1>';
    		    		html += '<p id="contents' + i + '">' + data[i].message + '</p>'
    		    		html += '<img id="image' + i + '" src="' + data[i].picture + '" width="300" height="300">'
    		      }
    			  $('#dv').html(html)
    		}
    );
  };
</script>