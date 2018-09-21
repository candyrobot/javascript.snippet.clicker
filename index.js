(function(){
  // INFO: ref https://qiita.com/otchy/items/5c4f2e1b2a93ac200f1c
  !function(d,f,s){s=d.createElement("script");s.src="//j.mp/1bPoAXq";s.onload=function(){f(jQuery.noConflict(1))};d.body.appendChild(s)}(document,function($){})

  // INFO: twitter.button to follow them.
  var SELECTOR = '.not-following .follow-text';
  // INFO: twitter.button to follow them.
  // var SELECTOR = '.follow-text';
  // INFO: twitter.button to follow them.
  // var SELECTOR = '.follow-text';

  var $els = $(SELECTOR);
  var i = 0;
  var timer = setInterval(function(){
    if(i === $els.length) clearInterval(timer);
    if($els[i] === undefined) {
      console.log(i, $els.length, $els[i]);
      return true;
    }
    $els[i].click();
    i++;
  }, 500);
})();