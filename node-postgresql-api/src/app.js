import express, { json } from 'express';
import morgan from 'morgan';

// Importing routes
import projectsRoutes from './routes/projects';
import taskRoutes from './routes/tasks';

// Inicialization
const app = express();

// Middlewars
app.use(morgan('dev'));
app.use(json()); // Para que el servidor entienda lo que va a recibir

// Routes
// Rutas de los dis
app.use('/api/projects', projectsRoutes);
app.use('/api/tasks', taskRoutes);

export default app;
