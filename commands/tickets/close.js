/* eslint-disable no-unused-vars */
const fetch = require('node-fetch');
const { MessageEmbed } = require('discord.js');

module.exports = {
	name: 'close-ticket',
	category: 'Soporte',
	description: 'Cierra el ticket.',
  aliases: [],
	usage: 'close',
	run: async (client, message, args) => {
		if(message.channel.name.includes('ticket-')) {
			const member = message.guild.members.cache.get(message.channel.name.split('ticket-').join(''));
			if(message.member.permissions.has('ADMINISTRATOR') || message.channel.name === `ticket-${message.author.id}`) {
				message.channel.messages.fetch().then(async (messages) => {
					try {
						message.channel.updateOverwrite(member.user, {
							VIEW_CHANNEL: false,
							SEND_MESSAGES: false,
							ATTACH_FILES: false,
							READ_MESSAGE_HISTORY: false,
						}).then(() => {
							message.channel.send(`<a:see:804825153770881054> | Cerrado ${message.channel}`);
						});
					}
					catch(e) {
						return message.channel.send('Un error ha ocurrido, intentalo de nuevo.');
					}
			})
		}
		else {
			return message.reply('No puedes usar este comando aqui, usalo cuando quieras cerrar un ticket.');
		  }
	  }
  }
}