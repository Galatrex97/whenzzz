/* eslint-disable no-unused-vars */
module.exports = {
	name: 'open-ticket',
	category: 'Soporte',
	description: 'Re-abre un ticket.',
	aliases: [],
	usage: 'open',
	userperms: ['ADMINISTRATOR'],
	botperms: [],
	run: async (client, message, args) => {
		if (message.channel.name.includes('ticket-')) {
			const member = message.guild.members.cache.get(message.channel.name.split('ticket-').join(''));
			try {
				message.channel.updateOverwrite(member.user, {
					VIEW_CHANNEL: true,
					SEND_MESSAGES: true,
					ATTACH_FILES: true,
					READ_MESSAGE_HISTORY: true,
				})
					.then(() => {
						message.reply(`El ticket se ha re-abierto ${message.channel}`);
					});
			}
			catch (e) {
				return message.reply('Ha ocurrido un error, Intentalo otra vez.');
			}
		}
		else {
			return message.reply(
				'No puedes usar este comando aqui, usalo en un ticket cerrado.',
			);
		}
	},
};