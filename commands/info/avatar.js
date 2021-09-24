const Discord = require("discord.js");

module.exports = {
  name: "avatar",
  aliases: ["pfp"],
  category: 'Útil',
  description: 'Muestra el avatar de un usuario (mencionado) o de ti si no mencionas a nadie.',
  usage: 'avatar/pfp',

  run: (client, message, args) => {
	let member = message.mentions.members.first()
  || message.member
		const embed = new Discord.MessageEmbed()
			.setTitle(`Avatar De: ${member.displayName}`)
			.addField('Pedido por:', `${message.author}`)
			.setImage(
				member.user.displayAvatarURL({ format: 'png', dynamic: true, size: 4096 })
			)
			.setColor('WHITE')
			.setFooter(':)', client.user.avatarURL())
			.setTimestamp();
		message.reply({embeds: [embed]});
	}
}
  
