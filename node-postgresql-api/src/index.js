// Importacion de express y la demas configuracion del servidor
import app from './app';
import '@babel/polyfill';

// Puerto donde va a estar corriendo el servidor
async function main() {
	await app.listen(4000);
	console.log('Server on port 4000');
}

main();
