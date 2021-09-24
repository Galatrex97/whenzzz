const { MessageEmbed, MessageActionRow, MessageButton } = require('discord.js');
const { capitalizeFirstLetter } = require('../../functions');
const { BOT_OWNER } = process.env;

module.exports = {
	name: 'help',
	aliases: ['commands'],
	category: 'Info',
	description: `Muestra la página <Ayuda> o Información sobre un comando especifíco`,
	usage: 'help [comando/categoria]',
	userperms: [],
	botperms: [],
	run: async (client, message, args, p) => {
		if (args.join(' ')) {
			const command = client.commands.get(args.join(' ').toLowerCase()) || client.commands.get(client.aliases.get(args.join(' ').toLowerCase()));
      if(!command) return;
      if(!command.usage) {
        p = "";
      }
			const row = new MessageActionRow().addComponents(
				new MessageButton()
				.setStyle("LINK")
				.setURL("https://clark.galatrex.repl.co")
				.setLabel("Página oficial"),
				new MessageButton()
				.setStyle("LINK")
				.setURL("https://discord.gg/yS3wVc4SJh")
				.setLabel("Soporte")
			)
			const h_embed = new MessageEmbed()
				.setTitle(`Información del comando ${command.name.toString().toLowerCase()}`)
				.setColor('WHITE')
				.setTimestamp()
				.setFooter('Sintaxis: <> = requerido, [] = opcional', `${client.user.avatarURL()}`)
				.setDescription([
					`> **Nombre: \`${command.name}\`**`,
					`> **Categoria: \`${command.category.toString()}\`**`,
					`> **Descripcion: \`${capitalizeFirstLetter(command.description || 'Este comando no tiene descripción.')}\`**`,
					`> **Uso: \`${p}${command.usage || `No hay instrucciones de uso sobre este comando.`}\`**`,
					`> **Alias: \`${command.aliases.length ? command.aliases.map((a) => `${a}`).join('`, `') : 'Ninguno'}\`**
					`].join("\n"));
			return message.reply({ embeds: [h_embed], components: [row] });
		}
		else {
			
			const general_row = new MessageActionRow().addComponents(
				new MessageButton()
				.setStyle("LINK")
				.setURL("https://clark.galatrex.repl.co")
				.setLabel("Página oficial"),
				new MessageButton()
				.setStyle("LINK")
				.setURL("https://discord.gg/yS3wVc4SJh")
				.setLabel("Soporte"),
				new MessageButton()
				.setStyle("LINK")
				.setURL("https://top.gg/bot/849395994973700117/vote")
				.setLabel("Vota por mí")
			)

			const embed = new MessageEmbed()
				.setTitle(`Comandos de ${client.user.username}`)
				.setColor('WHITE')
        .addField(`Comandos de ${client.user.username} en Total:`, `\`${client.commands.size} Comandos\``)
				.setDescription(`
				El prefix de este server es \`${p}\` recuerda que puedes cambiarlo con \`${p}set-prefix\`
				Para más información en un comando especifíco, escribe \`${p}help <comando>\`.`)
        .setFooter(`${client.user.username} Help`, `${client.user.avatarURL()}`)
        .setTimestamp()

      let categories;
			if(message.author.id !== process.env.botOwner) {
				categories = [...new Set(client.commands.filter(command => command.category !== 'Owner').map(command => command.category))];
			}
			else{
				categories = [...new Set(client.commands.map(command => command.category))];
			}

        for (const id of categories) {
				const category = client.commands.filter(command => command.category === id);

        if (id == "NSFW" && !message.channel.nsfw) {
         embed.addField(`NSFW`, '***\`Para ver los comandos de esta categoria ejecuta este comando en un canal NSFW\`***')
        } else {
           embed.addField(`${id} (${category.size})`, category.map(command => `\`${command.name}\``).join(' '));
        }


			}

			return message.reply({embeds : [embed], components: [general_row]});



		}


	},
};