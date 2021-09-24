module.exports = {
	name: 'remove',
	category: 'Soporte',
	description: 'Remueve/elimina/quita un usuario de un ticket.',
	aliases: [],
	usage: 'remove <@usuario> (con el arroba)',
	userperms: ['ADMINISTRATOR'],
	botperms: [],
	run: async (client, message, args, p) => {
		if(message.channel.name.includes('ticket-')) {
			const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(x => x.user.username === args.slice(0).join(' ') || x.user.username === args[0]);
			if(!member) {
				return message.channel.send(`Uso incorrecto! Uso correcto: \`${p}remove @usuario\` (tiene que ser con el arroba)`);
			}
			try{
				message.channel.updateOverwrite(member.user, {
					VIEW_CHANNEL: false,
					SEND_MESSAGES: false,
					ATTACH_FILES: false,
					READ_MESSAGE_HISTORY: false,
				}).then(() => {
					message.channel.send(`${member} Ha sido removido de ${message.channel} corectamente.`);
				});
			}
			catch(e) {
				return message.channel.send('Un error ha ocurrido, vuelve a intentar.');
			}
		}
	},
};