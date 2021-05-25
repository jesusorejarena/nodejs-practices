const { Pool } = require('pg');

const config = {
	user: 'postgres',
	host: 'localhost',
	password: 'Jesus1712',
	database: 'library',
};

const pool = new Pool(config);

const getBooks = async () => {
	try {
		const res = await pool.query('SELECT * FROM books');
		console.log(res.rows);
	} catch (error) {
		console.log(error);
	}
};

const getUsers = async () => {
	try {
		const res = await pool.query('SELECT * FROM users');
		console.log(res.rows);
	} catch (error) {
		console.log(error);
	}
};

const insertUser = async () => {
	try {
		const text = 'INSERT INTO users(username, password) VALUES($1, $2)';
		const values = ['Jhon', 'jhon123'];

		const res = await pool.query(text, values);
		console.log(res);
		pool.end();
	} catch (error) {
		console.log(error);
	}
};

const deleteUser = async () => {
	try {
		const text = 'DELETE FROM users WHERE username = $1';
		value = ['Jhon'];

		const res = await pool.query(text, value);
		console.log(res);
	} catch (error) {
		console.log(error);
	}
};

const editUser = async () => {
	try {
		const text = 'UPDATE users SET username = $1, password = $2 WHERE username = $3';
		values = ['Bruce', 'bruce123', 'Ryan'];

		const res = await pool.query(text, values);
		console.log(res);
	} catch (error) {
		console.log(error);
	}
};

// getBooks();
// getUsers();
// insertUser();
// deleteUser();
// editUser();
