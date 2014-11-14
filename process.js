process.stdout.write('this is stdout !\n');
process.stderr.write('this is stderr !\n');

process.stdin.setEncoding('utf-8');

process.stdin.on('data', function(data) {
    console.log(data);
});

process.on('exit', function() {
    console.log('program will exit.');
});

process.on('SIGINT', function() {
    console.log('program meet a SIGINT !\n');
    process.exit();
});