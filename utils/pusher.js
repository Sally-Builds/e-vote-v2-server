const Pusher = require('pusher');

exports.pusher = new Pusher({
  appId: '1097428',
  key: 'ebf37415525faa96ab14',
  secret: '6f8659d3323db0c43986',
  cluster: 'eu',
  encrypted: true,
});

// pusher.trigger('my-channel', 'my-event', {
//   'message': 'hello world'
// });

//client side own
// Pusher.logToConsole = true;

// var pusher = new Pusher('ebf37415525faa96ab14', {
//   cluster: 'eu'
// });

// var channel = pusher.subscribe('my-channel');
// channel.bind('my-event', function(data) {
//   app.messages.push(JSON.stringify(data));
// });
