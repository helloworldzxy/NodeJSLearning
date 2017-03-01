var events = require('events');
var eventEmitter = new events.EventEmitter();

//listener1
var listener1 = function listener1(){
	console.log("listener1 executing.");
};

//listener2
var listener2 = function listener2(){
	console.log("listener2 executing.");
};

//绑定connection事件，注册listener1
eventEmitter.addListener('connection', listener1);

//绑定connection事件，注册listener2
eventEmitter.on('connection', listener2);


var eventListeners = require('events').EventEmitter.listenerCount(eventEmitter, 'connection');
console.log("有 " + eventListeners + " 个监听在监听connection事件。");

//触发connection事件
eventEmitter.emit('connection');

//！！！绑定事件（即注册监听器），触发事件，
//都需要靠eventEmitter（即require('events').EventEmitter类的实例对象）来实现。


//移除监听器
eventEmitter.removeListener('connection', listener1);
console.log("Listener1 不再受监听。");

eventEmitter.emit('connection');

eventListeners = require('events').EventEmitter.listenerCount(eventEmitter, 'connection');
console.log("有 " + eventListeners + " 个监听在监听connection事件。");

console.log("程序执行完毕。");