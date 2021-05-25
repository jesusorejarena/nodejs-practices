CREATE database library;

CREATE TABLE books(
	section int,
	title text,
	author text
);

INSERT INTO books VALUES
	(1, 'Foundation', 'Issac Asimov'),
	(2, 'Digital Fortress', 'Dan Brown'),
	(3, 'World War Z', 'Max Brooks');

CREATE TABLE users(
	username text,
	password text
);

INSERT INTO users VALUES
	('Joe', 'joe123'),
	('Ryan', 'ryan123'),
	('Cameron', 'cameron123');

