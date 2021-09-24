const Discord = require('discord.js');

module.exports = {

name: 'invite',
aliases: [],
category: 'Info',
usage: 'invite',
description: 'Envia mi link de invitación',
run: (client, message, args, p) => {
  const nya = new Discord.MessageEmbed()
  .setTitle("Lyon Invite Link")
  .setColor("WHITE")
  .setFooter("Gracias.")
  .setTimestamp()
  .setDescription(`Mi link de invitación está en el botón de abajo.\nSi tienes alguna duda usa \`${p}help\``)
  .setThumbnail(`${client.user.avatarURL()}`)

const row = new Discord.MessageActionRow().addComponents(
	new Discord.MessageButton()
	.setURL("https://discord.com/api/oauth2/authorize?client_id=849395994973700117&permissions=8&scope=bot%20applications.commands")
	.setStyle("LINK")
	.setLabel("Invitación")
)


  message.reply({embeds: [nya], components: [row]});
}

}