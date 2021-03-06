const express = require('express');
const path = require('path');

const app = express();

app.use(express.urlencoded({ extended: false }));

app.use(require('./routes/index'));

app.use(express.static(path.join(__dirname, 'public')));

app.listen(3000, () => {
	console.log('Server is running in port 3000');
});
