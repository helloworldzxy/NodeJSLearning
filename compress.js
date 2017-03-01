//------------------链式流

//链式+管道流 压缩文件

var fs = require('fs');
var zlib = require('zlib');

//压缩input.txt文件尾input.txt.gz
fs.createReadStream('input.txt')
  .pipe(zlib.createGzip())
  .pipe(fs.createWriteStream('input.txt.gz'));

console.log("文件压缩完成。");
