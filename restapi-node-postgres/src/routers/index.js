const { Router } = require('express');
const router = Router();

const { getUsers, createUser, getUsersById, deleteUser, updateUser } = require('../controllers/index.controller');

// Envio
router.get('/users', getUsers);

// Envio
router.get('/users/:id', getUsersById);

// Recibir
router.post('/users', createUser);

// Eliminar
router.delete('/users/:id', deleteUser);

// Actualizar
router.put('/users/:id', updateUser);

module.exports = router;
