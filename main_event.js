//引入events模块
var events = require('events');
//创建eventEmitter对象
var eventEmitter = new events.EventEmitter();

//创建事件处理程序
var connectedHandler = function connected(){
	console.log('连接成功。');

	//触发data_received事件
	eventEmitter.emit('data_received');  //emit是触发事件的意思，其参数为动作，
										//data_received, connection与
										//click, mouseover等是并列的地位
}

//绑定connection事件处理程序，也即为事件connection注册一个监听器connectedHandler
eventEmitter.on('connection', connectedHandler);

//使用匿名函数绑定data_received事件，为事件data_received注册一个监听器function（callback）
eventEmitter.on('data_received',function(){
	console.log('数据接收成功。');
});

//触发connection事件
eventEmitter.emit('connection');

console.log("程序执行完毕。");