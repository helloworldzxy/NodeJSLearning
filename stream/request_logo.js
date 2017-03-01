var http = require('http');
var fs = require('fs');
var request = require('request');	//封装了stream的模块
http
	.createServer(function(req, res){
		/*fs.readFile('../buffer/logo.png', function(err, data){
			if(err){
				res.end('file not exist!');
			}
			else{
				res.writeHeader(200, {'Context-Type': 'text/html'});
				res.end(data);
			}
		});*/

		//本地图片
		//fs.createReadStream('../buffer/logo.png').pipe(res);

		//边从网上下载图片边pipe
		request('http://static.mukewang.com/static/img/index/logo.png')
			.pipe(res);

	})
	.listen(8090);