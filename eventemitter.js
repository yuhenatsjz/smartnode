var events = require('events');

var emitter = new events.EventEmitter();

emitter.on('someEvent', function(arg1, arg2) {
    console.log('Your name: ' + arg1);
    var d = new Date();
    console.log('Your age: ' + (d.getFullYear() - arg2));
});

emitter.emit('someEvent', 'yuhenabc', 1990);
