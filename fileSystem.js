var fs = require('fs');


//异步读取
/*fs.readFile('fsinput.txt', function(err, data){
	if(err){
		return console.error(err);
	}
	console.log("异步读取：" +　data.toString());
});

//同步读取
var data = fs.readFileSync('input.txt');
console.log("同步读取：" + data.toString());

console.log("程序执行完毕。");
*/

//异步模式下打开文件
/*
console.log("准备打开文件！");
fs.open('fsinput.txt', 'r+', function(err, fd){
	if(err){
		return console.error(err);
	}
	console.log("文件打开成功！");
});
*/

//异步模式下获取文件信息
/*
fs.stat('input.txt', function(err, stats){
	console.log(stats.isFile());	//true
});
*/


console.log("准备打开文件！");
fs.stat('input.txt', function(err, stats){
	if(err){
		return console.error(err);
	}
	console.log(stats);
	console.log("读取文件信息成功！");

	console.log("")
});





