console.log('this is a log !');
console.info('this is a info !');
console.warn('this is a warn !');
console.error('this is a error !');

console.time('test');
var sum = 0;
for(var i=0; i<1000 * 10000; i++) {sum += i;}
console.log(sum);
console.timeEnd('test');