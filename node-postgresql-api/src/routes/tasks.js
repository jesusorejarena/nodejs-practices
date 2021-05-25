import { Router } from 'express';
const router = Router();

import {
	createTask,
	getTasks,
	deleteTasks,
	updateTasks,
	getOneTasks,
	getTasksByProject,
} from '../controllers/task.controller';

// /api/tasks/
router.post('/', createTask);
router.get('/', getTasks);

// /api/tasks/:id
router.get('/:id', getOneTasks);
router.put('/:id', updateTasks);
router.delete('/:id', deleteTasks);

// /api/tasks/project/:projectid
router.get('/project/:projectid', getTasksByProject);

export default router;
