const Discord = require('discord.js');
const { Client, MessageEmbed } = require('discord.js');
const nekoapi = require('cacao_nekoapi')
const clientnt = require("nekos.life")
const neko = new clientnt()

module.exports = {
  name: "pussygif",
  aliases: ["g-pussy", 'gpussy'],
  usage: 'pussygif',
  category: 'NSFW',
  description: 'Muestra una waifu horny',

run: async(client, message, args) => {

let img = await nekoapi.nsfw.pussy()

  if (!message.channel.nsfw) return message.channel.send("Este no es un canal **NSFW**")

neko.nsfw.pussy().then(aa => {
  const embed = new Discord.MessageEmbed()

.setImage(aa.url)
.setDescription(`Aqui hay algo que te puede servir`)
.setColor("WHITE")
.setTimestamp()

message.channel.send({embeds: [embed]})


})



 }

} 