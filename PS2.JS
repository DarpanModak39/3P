const http = require('http');
const udm =require('./Userdefinedmodule');


var options = {
	host: udm.node,
	path: '/docs',
	method: 'GET'
};

http.request(options, (response) => {
	console.log(`STATUS: ${response.statusCode}`);
}).end();
