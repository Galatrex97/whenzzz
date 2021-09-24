const Discord = require('discord.js');
const { Client, MessageEmbed } = require('discord.js');
const clientnt = require("nekos.life")
const neko = new clientnt()

module.exports = {
  name: "gasm",
  aliases: [],
  usage: '',
  description: '',
  category: 'NSFW',

run: async(client, message, args) => {



  if (!message.channel.nsfw) return message.channel.send("Este no es un canal **NSFW**")


neko.nsfw.gasm().then(as => {
  const embed = new MessageEmbed()
  .setDescription("Nya~")
  .setImage(as.url)

  message.channel.send({embeds: [embed]})
})

 }

}