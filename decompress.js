//------------------链式流

//链式+管道流 压缩文件

var fs = require('fs');
var zlib = require('zlib');

//解压input.txt.gz文件为input_decompress.txt
fs.createReadStream('input.txt.gz')
  .pipe(zlib.createGunzip())
  .pipe(fs.createWriteStream('input_decompress.txt'));

console.log("文件解压完成。");