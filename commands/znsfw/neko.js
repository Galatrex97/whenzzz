const Discord = require('discord.js');
const { Client, MessageEmbed } = require('discord.js');
const clientnt = require("nekos.life")
const neko = new clientnt()

module.exports = {
  name: "neko",
  aliases: [],
  usage: 'neko',
  description: '',
  category: 'NSFW',

run: async(client, message, args) => {



  if (!message.channel.nsfw) return message.channel.send("Este no es un canal **NSFW**")


neko.nsfw.neko().then(aa => {
  const embed = new MessageEmbed()
  .setDescription("Nekos")
  .setFooter("Nya~")
  .setTimestamp()
  .setColor("WHITE")
  .setImage(aa.url)

  message.reply({embeds: [embed]})
})

 }
 
}
