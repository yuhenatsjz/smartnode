process.stdout.write('this is a stdout !\n');
process.stderr.write('this is a stderr !\n');

process.stdin.setEncoding('utf-8');
process.stdin.on('data', function(data) {
    console.log('You said: ' + data + '\n');
});
