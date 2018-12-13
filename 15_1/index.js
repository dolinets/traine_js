const Event = require('events').EventEmitter;

const logIn = new Event();
const someAction = new Event();
const logout = new Event();

logIn.on('logIn', function(){
	console.log('logIn');
})

someAction.on('someAction', function(){
	console.log('someAction');
})

logout.on('logout', function(){
	console.log('logout');
})

logIn.emit('logIn');
someAction.emit('someAction');
logout.emit('logout');