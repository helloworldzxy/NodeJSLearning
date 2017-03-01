var fs = require('fs');

fs.createReadStream('xinyouduzhong.mp3').pipe(fs.createWriteStream('xinyouduzhong-pipe.mp3'));