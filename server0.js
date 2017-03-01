//引入Node.js模块
var http = require("http"); //引入的http模块赋值给变量http

//创建服务器
//createServer()是http模块提供的函数，返回一个对象，对象有listen方法， 指定这个 HTTP 服务器监听的端口号
http.createServer(function (request, response) { 

	//发送HTTP头部
	//HTTP状态值：200：OK
	//内容类型 ：text/plain
	response.writeHead(200, {'Content-Type': 'text/plain'});

	//发送响应数据"Hello World"
	response.end('Hello World\n');
}).listen(8888);

//终端打印如下信息
console.log('Server running at http://127.0.0.1:8888/');
