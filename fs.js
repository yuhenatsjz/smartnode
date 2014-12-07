var fs = require('fs');

// 异步读取
fs.readFile('context_en.txt', 'utf-8', function(error, data) {
    if(error) {
        console.log(error);
    } else {
        console.log(data.toString());
    }
});

// 同步读取
var content = fs.readFileSync('context_cn.txt', 'utf-8');
console.log(content);
