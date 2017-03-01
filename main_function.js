var fs = require("fs");

//阻塞代码 只能顺序执行
/*var data = fs.readFileSync('input.txt');
console.log(data.toString());*/

//非阻塞代码 有回调函数 异步编程 
//需要按顺序执行  可以边读取文件边执行后面的代码
fs.readFile('input.txt', function(err, data){
	if(err) return console.error(err);
	console.log(data.toString());
});


console.log("程序执行结束！");
