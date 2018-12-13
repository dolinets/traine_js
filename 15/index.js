const http = require('http');
const fs = require ('fs');

const server = http.createServer(function(req,res){

	const url = req.url;

	let fileName;

    if (url == '/file') {
    	fileName = 'text.txt';
	} else if (url =='/stream') {
		fileName = 'stream.txt';
	} else {
		fileName = 'hello.txt';
	} 

	if (url != '/favicon.ico') {
		loadFile(fileName,res);
	}
	
	
});

server.listen (3000, function(){
	console.log('server');
});

function loadFile(fileName,res) {
	const stats = fs.statSync(fileName);

	if (stats.size > 100000) {
		const stream = fs.ReadStream(fileName);
		stream.pipe(res);
		console.log(fileName + ': stream load file done');
	} else {
		fs.readFile(fileName, function (err, data) {
			res.write(data);
			res.end();
			console.log(fileName + ': load file done');
		});			
	}
}