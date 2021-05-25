// ORM
import Sequelize from 'sequelize';

/* Conexion con la base de datos */
import { sequelize } from '../database/database';

import Task from './Task';

// Declaracion de las columnas de la base de datos
const Project = sequelize.define(
	'projects',
	{
		id: {
			type: Sequelize.INTEGER,
			primaryKey: true,
		},
		name: {
			type: Sequelize.TEXT,
		},
		priority: {
			type: Sequelize.INTEGER,
		},
		description: {
			type: Sequelize.TEXT,
		},
		deliverydate: {
			type: Sequelize.DATE,
		},
	},
	{
		timestamps: false,
	}
);

// Relacion entre tablas de uno
Project.hasMany(Task, { foreingKey: 'projectid', sourceKey: 'id' });
// A muchos
Task.belongsTo(Project, { foreingKey: 'projectid', sourceKey: 'id' });

export default Project;
