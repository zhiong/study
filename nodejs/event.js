const EventEmitter = require('events')
const myEvent = new EventEmitter();
myEvent.on('hello',function(arg){
    console.log('hello '+ arg);
});

myEvent.emit('hello','SW1');

