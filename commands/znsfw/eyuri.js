const Discord = require('discord.js');
const { Client, MessageEmbed } = require('discord.js');
const clientnt = require("nekos.life")
const neko = new clientnt()

module.exports = {
  name: "e-yuri",
  aliases: [],
  usage: '',
  description: '',
  category: 'NSFW',

run: async(client, message, args) => {



  if (!message.channel.nsfw) return message.channel.send("Este no es un canal **NSFW**")

neko.nsfw.eroYuri().then(owo => {
  const asjsa = new MessageEmbed()
  .setFooter("Que ricoo")
  .setImage(owo.url)
  .setTimestamp()
  message.reply({embeds: [asjsa]})
})


 }

}