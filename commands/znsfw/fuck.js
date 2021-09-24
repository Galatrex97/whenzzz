const Discord = require('discord.js');
const { Client, MessageEmbed } = require('discord.js');
const nekoapi = require('cacao_nekoapi')
const clientnt = require("nekos.life")
const neko = new clientnt()


module.exports = {
  name: "fuck",
  aliases: ["follar", 'coger'],
  usage: 'fuck/follar/coger',
  category: 'NSFW',
  description: 'Cogerse a alguien XD',


run: async(client, message, args) => {



  if (!message.channel.nsfw) return message.channel.send("Este no es un canal **NSFW**")

let user = message.mentions.users.first()
if(!user) return message.channel.send("Debes mencionar a un usuario")
 
 neko.nsfw.classic().then(aaa =>{
   const embed = new Discord.MessageEmbed()

.setImage(aaa.url)
.setDescription(`**${message.author.username}** se folló a **${user.username}**`)
.setColor("GREEN")
.setTimestamp()

message.reply({embeds: [embed]})

 })




 }

} 