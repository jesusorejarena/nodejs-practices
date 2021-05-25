import mongoose from 'mongoose';

mongoose
	.connect('mongodb://localhost:27017/node-restapi-jwt-auth', {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useFindAndModify: true,
		useCreateIndex: true,
	})
	.then((db) => console.log('Db is connencted'))
	.catch((error) => console.log(error));
