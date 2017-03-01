//写入buffer
/*
var buf1 = new Buffer(256);
var len1 = buf1.write("www.runoob.com");
var buf2 = new Buffer(12);
var len2 = buf2.write("www.runoob.com");

console.log("写入字节数：" + len1); //14
console.log("写入字节数：" + len2); //12
*/

//读取buffer
/*
var buf = new Buffer(26);
for(var i = 0; i < 26; i++){
	buf[i] = i + 97;
}

console.log(buf.toString('ascii'));
console.log(buf.toString('ascii',0, 5));
console.log(buf.toString('utf8', 0, 5));
console.log(buf.toString(undefined, 0, 5)); //未定义编码方式则使用 'utf8' 编码
*/

//将buffer转换为json
/*var buf = new Buffer('www.runoob.com');
var json = buf.toJSON(buf);

console.log(json);*/


//buffer合并 concat
/*
var buffer1 = new Buffer('菜鸟教程  ', 'utf-8');
console.log(buffer1);
console.log("buffer1 内容：" + buffer1); // 与字符串相加，会自动将buffer1转化为了string
console.log(buffer1.toString());

var buffer2 = new Buffer('www.runoob.com');
var buffer3 = Buffer.concat([buffer1, buffer2]);
console.log("buffer3 内容：" + buffer3.toString());
*/

//buffer比较 compare
/*
var buffer1 = new Buffer('ABC');
var buffer2 = new Buffer('ABCD');
var result = buffer1.compare(buffer2);
console.log(result); //-1
if(result < 0){
	console.log(buffer1 + " 在 " + buffer2 + "之前");
}else if(result > 0){
	console.log(buffer1 + " 在 " + buffer2 + "之后");
}else{
	console.log(buffer1 + " 与 " + buffer2 + "相同");
}
*/


//buffer拷贝 copy
/*
var buffer1 = new Buffer('ABC');
var buffer2 = new Buffer(3);
buffer1.copy(buffer2);
console.log("buffer2 content: " + buffer2.toString());
*/

//buffer 裁剪slice
/*
var buffer1 = new Buffer('runoob');
var buffer2 = buffer1.slice(1,5); //第二个参数为裁剪end的下一位；默认为buffer.length
console.log("buffer2 content: " + buffer2.toString());
*/










