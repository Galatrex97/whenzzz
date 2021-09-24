const Discord = require('discord.js');
const { Client, MessageEmbed } = require('discord.js');
const clientnt = require("nekos.life")
const neko = new clientnt()

module.exports = {
  name: "anal",
  aliases: [],
  usage: 'anal',
  description: 'Dudo que tenga que describirlo',
  category: 'NSFW',

run:  async(client, message, args) => {

  if (!message.channel.nsfw) return message.channel.send("Este no es un canal **NSFW**")

let user = message.mentions.users.first()
if(!user) return message.channel.send("Debes de mencionar a un usuario")

neko.nsfw.anal().then(nya => {
  const embed = new Discord.MessageEmbed()

.setImage(nya.url)
.setDescription(`**${message.author.username}** le esta haciendo un anal a **${user.username}**`)
.setColor("GREEN")
.setTimestamp()

message.channel.send({embeds: [embed]})
})



 }

} 