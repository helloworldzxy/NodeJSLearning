var fs = require('fs');

var readStream = fs.createReadStream('xinyouduzhong.mp3');
var writeStream = fs.createWriteStream('xinyouduzhong-stream.mp3');

readStream.on('data', function(chunk){
	if(writeStream.write(chunk) === false){	//为了避免磁盘IO读写速度不一致导致的磁盘内存爆仓问题
		console.log('still cached');
		readStream.pause();
	}
});

readStream.on('end', function(){
	writeStream.end();
});

writeStream.on('drain', function(){
	console.log('data drains');
	readStream.resume();
});