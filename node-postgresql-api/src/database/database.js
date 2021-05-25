// ORM para la base de datos
import Sequelize from 'sequelize';

// Configuracion de las base de datos
export const sequelize = new Sequelize('api_node_pg', 'postgres', 'Jesus1712', {
	host: 'localhost' /* URL */,
	dialect: 'postgres' /* Tipo de base de datos - mysql, postgres, etc */,
	pool: {
		max: 5,
		min: 0,
		require: 30000,
		idle: 10000,
	},
	logging: false,
});
