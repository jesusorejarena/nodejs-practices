import Task from '../models/Task';

export async function createTask(req, res) {
	const { name, done, projectid } = req.body;
	res.send(req.body);
	console.log(name, done, projectid);
	try {
		const newTask = await Task.create(
			{
				name,
				done,
				projectid,
			},
			{
				fields: ['name', 'done', 'projectid'],
			}
		);
		res.json({ message: 'New Task Created' });
	} catch (error) {
		console.log(error);
		res.status(500).json({
			message: 'Something goes wrong',
			data: {},
		});
	}
	console.log(name, done, projectid);
	console.log(req.body);
}

export async function getTasks(req, res) {
	try {
		const tasks = await Task.findAll({
			attributes: ['id', 'projectid', 'name', 'done'],
			order: [['id', 'DESC']],
		});
		res.json({ tasks });
	} catch (error) {
		console.log(error);
		res.status(500).json({
			message: 'Something goes wrong',
			data: {},
		});
	}
}

export async function updateTasks(req, res) {
	const { id } = req.params;
	const { projectid, name, done } = req.body;

	const task = await Task.findOne({
		attributes: ['name', 'projectid', 'done', 'id'],
		where: { id },
	});

	const updatedTask = Task.update(
		{
			name,
			done,
			projectid,
		},
		{
			where: { id },
		}
	);

	res.json({
		message: 'Task Updated',
		updatedTask,
	});
}

export async function deleteTasks(req, res) {
	const { id } = req.params;
	await Task.destroy({
		where: {
			id,
		},
	});
	res.json({ message: 'Task Deleted' });
}

export async function getOneTasks(req, res) {
	const { id } = req.params;
	const task = await Task.findOne({
		where: { id },
		attributes: ['id', 'projectid', 'name', 'done'],
	});
	res.json(task);
}

export async function getTasksByProject(req, res) {
	const { projectid } = req.params;

	const tasks = await Task.findAll({
		attributes: ['id', 'projectid', 'done', 'name'],
		where: { projectid },
	});
	res.json({ tasks });
}
