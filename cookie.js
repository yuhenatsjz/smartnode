var cookie = require('cookie/index.js');

cookie.serialize('mobilephone', '13784551079');
console.log(cookie.parse('mobilephone'));