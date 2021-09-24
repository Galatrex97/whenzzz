const Discord = require("discord.js");
const { Client, MessageEmbed } = require("discord.js");
const akaneko = require('akaneko')
const clientnt = require("nekos.life")
const neko = new clientnt()

module.exports = {
  name: "cum",
  aliases: [],
  usage: 'cum',
  category: 'NSFW',
  description: 'XD',

run: async(client, message, args) => {
  if(!message.channel.nsfw) return message.reply('Este canal no es NSFW, abstienete de usar esos comandos aqui')
const image = await akaneko.nsfw.cum()
const user = message.mentions.members.first()
if(!user) return message.reply("Necesitas mencionar a alguien")

neko.nsfw.cumsluts().then(ugu => {
const ah = new Discord.MessageEmbed()
.setDescription(`**${message.author.username}** se corre en **${user.user.username}**`)
.setImage(ugu.url)
.setFooter('Que ricoo')
.setTimestamp()
 
message.channel.send({embeds:[ah]})

})


 }

}