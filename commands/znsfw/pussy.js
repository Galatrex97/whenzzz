const Discord = require("discord.js");
const { Client, MessageEmbed } = require("discord.js");
const clientnt = require("nekos.life")
const neko = new clientnt()
module.exports = {
  name: "pussy",
  aliases: [],
  usage: 'pussy',
  category: 'NSFW',
  description: 'Muestra una waifu desnuda.',

run: (client, message, args) => {

  if (!message.channel.nsfw) return message.channel.send("Este no es un canal **NSFW**")

neko.nsfw.pussyArt().then(aaaaa => {
  const nya = new MessageEmbed()
  .setImage(aaaaa.url)
  .setTimestamp()
  message.channel.send({embeds: [nya]})
})
 
 }

}