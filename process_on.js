console.log('running...');

process.on('SIGINT', function() {
    console.log('program meet a SIGINT !\n');
    process.exit();
});

process.on('exit', function() {
    console.log('program will exit.');
});
