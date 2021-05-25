// ORM
import Sequelize from 'sequelize';

// Conexion con la base de datos
import { sequelize } from '../database/database';

// Declaracion de las columnas de la base de datos
const Task = sequelize.define(
	'tasks',
	{
		id: {
			type: Sequelize.INTEGER,
			primaryKey: true,
		},
		name: {
			type: Sequelize.TEXT,
		},
		done: {
			type: Sequelize.BOOLEAN,
		},
		projectid: {
			type: Sequelize.INTEGER,
		},
	},
	{
		timestamps: false,
	}
);

export default Task;
