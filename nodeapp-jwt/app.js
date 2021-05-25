const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();

app.get('/api', (req, res) => {
	res.json({
		message: 'Nodejs and JWT',
	});
});

// Generando el web token con los datos del usuario
app.post('/api/login', (req, res) => {
	const user = {
		id: 1,
		nombre: 'Henry',
		email: 'henry@email.com',
	};
	// Encriptando el usuario y pasandole el tiempo de expiración
	jwt.sign({ user: user }, 'secretKey', { expiresIn: '15s' }, (error, token) => {
		res.json({
			token,
		});
	});
});

// Haciendo un post
app.post('/api/post', verifyToken, (req, res) => {
	// Verificando el token y mandandoselo al verify
	jwt.verify(req.token, 'secretKey', (error, authData) => {
		if (error) {
			res.sendStatus(403);
		} else {
			res.json({
				message: 'Post fue creado',
				authData,
			});
		}
	});
});

// Authorization: Bearer <token>
// Se verifica el token y se divide del Bearer
function verifyToken(req, res, next) {
	// Se requiere ek token de los headers
	const bearerHeader = req.headers['authorization'];

	// Se verifica si esta vacio
	if (typeof bearerHeader !== 'undefined') {
		const bearerToken = bearerHeader.split(' ')[1];
		req.token = bearerToken;
		next();
	} else {
		res.sendStatus(403);
	}
}

// Ejecucion del servidor
app.listen(3000, function () {
	console.log('Nodejs app runing in port 3000');
});
