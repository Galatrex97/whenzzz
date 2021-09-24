module.exports = {
	name: 'add',
	category: 'Soporte',
	description: 'Añade un usuario a un ticket.',
	aliases: [],
	usage: 'add <@usuario>',
	userperms: ['ADMINISTRATOR'],
	botperms: [],
	run: async (client, message, args, p) => {
		if(message.channel.name.includes('ticket-')) {
			const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(x => x.user.username === args.slice(0).join(' ') || x.user.username === args[0]);
			if(!member) {
				return message.channel.send(`Uso incorrecto! El uso correcto es: \`${p}add @usuario\` (tiene que ser con el arroba, puedes copiarlo de otro canal)`);
			}
			try{
				message.channel.updateOverwrite(member.user, {
					VIEW_CHANNEL: true,
					SEND_MESSAGES: true,
					ATTACH_FILES: true,
					READ_MESSAGE_HISTORY: true,
				}).then(() => {
					message.channel.send(`${member} fue añadido correctamente a ${message.channel}`);
				});
			}
			catch(e) {
				return message.channel.send('Ha ocurrido un error, vuelve a intentarlo!');
			}
		}
	},
};