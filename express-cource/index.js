/* const http = require('http');

const server = http.createServer((req, res) => {
	res.statusCode = 200;
	res.setHeader('Content-Type', 'text/plain');
	res.end('Hello World');
});

server.listen(5000, () => {
	console.log('Serve on port 5000');
}); */

const express = require('express');
const morgan = require('morgan');

const app = express();

// Settings
app.set('appName', 'Fazt Express Tutorial');
app.set('port', '3000');
app.set('view engine', 'ejs');

// Middleware

app.use(express.json());
app.use(morgan('dev'));

/* function logger(req, res, next) {
	console.log(`Route Received: ${req.protocol}://${req.get('host')}${req.originalUrl}`);
	next();
}

app.use(logger); */

// Va pasar primero por aca y va a pasar a la siguiente de la misma ruta

/* app.all('/user', (req, res, next) => {
	console.log('Por aqui paso');
	next();
}); */

// Obtener

/* app.get('/', (req, res) => {
	res.send('PETICION GET RECEIVED');
}); */

app.get('/', (req, res) => {
	const data = [{ name: 'john' }, { name: 'joe' }, { name: 'cameron' }];
	res.render('index.ejs', { people: data });
});

// Obtener

app.get('/user', (req, res) => {
	res.json({ username: 'Cameron', lastname: 'Howe' });
});

// Enviado

app.post('/user/:id', (req, res) => {
	console.log(req.body);
	console.log(req.params);
	res.send('POST REQUEST RECEIVED');
});

// Actualizado

app.put('/user/:userId', (req, res) => {
	console.log(req.body);
	res.send(`User ${req.params.userId} updated`);
});

// Eliminado

app.delete('/user/:userId', (req, res) => {
	res.send(`User ${req.params.userId} deleted`);
});

app.use(express.static('public'));

// Servidor

app.listen(app.get('port'), () => {
	console.log(app.get('appName'));
	console.log('Server on port ', app.get('port'));
});
