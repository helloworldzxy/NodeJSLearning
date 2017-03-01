//找出浏览器请求的URL路径

var http = require('http');
var url = require('url');

function start(route){//将路由函数作为参数传递过去
	function onRequest(request, response){
		var pathname = url.parse(request.url).pathname;
		console.log("Request for " + pathname + " received.");

		route(pathname); //将路由和服务器整合起来

		response.writeHead(200, {"Content-Type": "text/plain"});
		response.write("Hello World");
		response.end();
	}

	http.createServer(onRequest).listen(8888);
	console.log("Server has started.");
}

exports.start = start;