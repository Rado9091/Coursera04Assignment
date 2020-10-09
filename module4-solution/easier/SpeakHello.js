
(function(window) {
  var speakWord = "Hello";
  helloSpeaker = function(name){
    console.log(speakWord + " " + name);
  };
   window.helloSpeaker = helloSpeaker;
})(window);


