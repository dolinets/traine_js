const http = require('http');
const https = require('https');


const url = 'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5';

const server = http.createServer(function(req,res){
	
	https.get(url, (res) => {

  		res.on('data', (d) => {
    		console.log(JSON.parse(d));
  		});

	}).on('error', (e) => {
  			console.error(e);
		});

	res.end();
});

server.listen (3000, function(){
	console.log('server');
});