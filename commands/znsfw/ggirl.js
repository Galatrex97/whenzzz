const Discord = require('discord.js');
const { Client, MessageEmbed } = require('discord.js');
const clientnt = require("nekos.life")
const neko = new clientnt()

module.exports = {
  name: "ggirl",
  aliases: [],
  usage: '',
  description: '',
  category: 'NSFW',

run: async(client, message, args) => {



  if (!message.channel.nsfw) return message.channel.send("Este no es un canal **NSFW**")

neko.nsfw.girlSoloGif().then(awa => {

  const embed = new MessageEmbed()
  .setImage(awa.url)
  .setFooter("Pasen name")
  .setTimestamp()
  .setColor("WHITE")

  message.reply({embeds: [embed]})
})


 }

}