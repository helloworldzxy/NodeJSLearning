var http = require('http');
var querystring = require('querystring');

var postData = querystring.stringify({
	'content': '一起期待下一期的课程', 
	'mid': 8837
});

var options = {
	hostname: 'www.imooc.com', 
	port: 80, 
	path: '/course/document', 
	method: 'POST', 
	headers: {
		'Accept': 'application/json, text/javascript, */*; q=0.01',
		'Accept-Encoding': 'gzip, deflate',
		'Accept-Language': 'zh-CN,zh;q=0.8',
		'Connection': 'keep-alive',
		//'Content-Length': '29',
		'Content-Length': postData.length,
		'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
		'Cookie': 'imooc_uuid=25a7b5e6-8b6e-4cd8-bec9-abb654fa4344; imooc_isnew_ct=1473820362; loginstate=1; apsid=FhM2MyNzM2MTZjNGViMDE3NmQzM2Y1OGEwODI5OTkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMTM1MTMyAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA2NzM4ODg3MjdAcXEuY29tAAAAAAAAAAAAAAAAAAAAAGE1ZTg5ZmM2NTQ4NzJiMTVjZjhmMGQ3MGRlMTkxOTBmMbnYVzG52Fc%3DMT; last_login_username=673888727%40qq.com; PHPSESSID=vpf6fpvhgqd7oaaca31mgtcei4; IMCDNS=0; jwplayer.qualityLabel=è¶æ¸; Hm_lvt_f0cfcccd7b1393990c78efdeebff3968=1474592401,1474595001,1474616335,1474853544; Hm_lpvt_f0cfcccd7b1393990c78efdeebff3968=1474854533; jwplayer.volume=100; imooc_isnew=2; cvde=57e87a8b361cd-9',
		'Host': 'www.imooc.com',
		'Origin': 'http://www.imooc.com',
		'Referer': 'http://www.imooc.com/video/8837',
		'User-Agent': 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/53.0.2785.116 Safari/537.36',
		'X-Requested-With': 'XMLHttpRequest',
	} 
};

var req = http.request(options, function(res){
	console.log('Status: ' + res.statusCode);
	console.log('Status: ' + JSON.stringify(res.headers));

	res.on('data', function(chunk){
		console.log(Buffer.isBuffer(chunk));
		console.log(typeof chunk);
	});

	res.on('end', function(){
		console.log('评论完毕！');
	});
	
});

req.on('error', function(){
		console.log('Error: ' + e.message);
});

req.write(postData);

req.end();