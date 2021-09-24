const Discord = require('discord.js');
const { Client, MessageEmbed } = require('discord.js');
const nekoapi = require('cacao_nekoapi')
const clientnt = require("nekos.life")
const neko = new clientnt()

module.exports = {
  name: "boobs",
  aliases: [],
  usage: 'boobs',
  category: 'NSFW',
  description: 'Tetas XD',

run: async (client, message, args) =>{

let img = await nekoapi.nsfw.boobs()

if (!message.channel.nsfw) return message.channel.send("Este no es un canal **NSFW**")

neko.nsfw.boobs().then(rico => {
const embed = new Discord.MessageEmbed()

.setImage(rico.url)
.setDescription(`Disfrutalo **${message.author.username}**`)
.setColor("WHITE")
.setTimestamp()

message.channel.send({embeds: [embed]})

})





 }

} 