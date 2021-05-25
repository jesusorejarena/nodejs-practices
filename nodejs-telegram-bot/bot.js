const { Telegraf } = require('telegraf');

const bot = new Telegraf('1742554262:AAGFSBoMdJ6IPsJFpFciCUZMjKqzW7GgQyk');

bot.start((ctx) => {
	ctx.reply('Welcome');
});

bot.help((ctx) => {
	console.log(ctx.from);
	console.log(ctx.chat);
	console.log(ctx.message);
	console.log(ctx.updateSubTypes);
	ctx.reply('Help!!');
});

bot.settings((ctx) => {
	ctx.reply('Settings');
});

bot.command(['mycommand', 'Mycommand', 'MYCOMMAND', 'test'], (ctx) => {
	ctx.reply('my custom command!!!');
});

bot.hears('computer', (ctx) => {
	ctx.reply('Hey I am selling computer');
});

/* bot.on('text', (ctx) => {
	ctx.reply('Estas texteando');
}); */

bot.on('sticker', (ctx) => {
	ctx.reply('Oh! you like stickers');
});

bot.launch();
