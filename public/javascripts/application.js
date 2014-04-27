$(function() {
  var faye = new Faye.Client('http://lightchat-server.herokuapp.com/faye');
  faye.subscribe("/messages/new", function(data) {
    eval(data);
  });
});
