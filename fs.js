var fs = require('fs');

// 异步读取
fs.readFile('sum.js', function(error, data) {
    if(error) {
        console.log(error);
    } else {
        console.log(data.toString());
    }
});

// 同步读取
var content = fs.readFileSync('process.js', 'utf-8');
console.log(content);
