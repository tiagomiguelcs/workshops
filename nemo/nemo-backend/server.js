const express = require('express'); // Importing express
const app = express(); // Creating an express app

// Create a route that sends a response when visiting the homepage
app.get('/', (req, res) => {
	res.send('<h1>Hello, Express.js Server!</h1>');
});

app.get('/forward', (req, res) => {
	
	const spawn = require('child_process').spawn;
	const cn = spawn('python3', ['command_nemo.py', 'F']);

	cn.stdout.on('data', (data) => {
		console.log(`${data}`);
		res.send({message: `${data}`});
	});

	cn.stderr.on('data', (data) => {
		console.log(`${data}`);
		res.send({message: `${data}`});
	});

	cn.on('close', (code) => {
		console.log(`child process exited with code ${code}`);
	});
});

app.get('/backward', (req, res) => {
	const spawn = require('child_process').spawn;
	const cn = spawn('python3', ['command_nemo.py', 'B']);

	cn.stdout.on('data', (data) => {
		console.log(`${data}`);
		res.send({message: `${data}`});
	});

	cn.stderr.on('data', (data) => {
		console.log(`${data}`);
		res.send({message: `${data}`});
	});

	cn.on('close', (code) => {
		console.log(`child process exited with code ${code}`);
	});
});

// Set up the server to listen on port 4000
const port = 4000;
app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});



