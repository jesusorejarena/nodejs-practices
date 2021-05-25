import { Router } from 'express';
const router = Router();

import {
	createProject,
	getProject,
	getOneProject,
	deleteProject,
	updateProject,
} from '../controllers/project.controller';

// /api/projects/
router.get('/', getProject);
router.post('/', createProject);

// /api/projects/:id
router.get('/:id', getOneProject);
router.put('/:id', updateProject);
router.delete('/:id', deleteProject);

export default router;
