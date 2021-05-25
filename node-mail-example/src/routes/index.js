const { Router, text } = require('express');
const nodemailer = require('nodemailer');
const router = Router();

router.post('/send-email', async (req, res) => {
	const { name, email, phone, message } = req.body;

	contentHTML = `
		<h1>User Information</h1>
		<ul>
			<li>Username: ${name}</li>
			<li>Email: ${email}</li>
			<li>Phone: ${phone}</li>
			<li>Message: ${message}</li>
		</ul>
	`;

	const transport = nodemailer.createTransport({
		host: 'smtp.mailtrap.io',
		port: 2525,
		auth: {
			user: '18bf053833f72d',
			pass: '49280c91d64e3c',
		},
		tls: {
			rejectUnauthorized: false,
		},
	});

	const info = await transport.sendMail({
		from: "'Pruebas Server' <pruebas@pruebas.com>",
		to: 'jesusorejarena@gmail.com',
		subject: 'WebSite contact form',
		html: contentHTML,
	});

	console.log('Message sent', info.messageId);

	res.redirect('/success.html');
});

module.exports = router;
