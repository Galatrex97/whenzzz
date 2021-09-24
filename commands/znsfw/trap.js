const Discord = require('discord.js');
const { Client, MessageEmbed } = require('discord.js');
const clientnt = require("nekos.life")
const neko = new clientnt()

module.exports = {
  name: "trap",
  aliases: [],
  usage: '',
  description: '',
  category: 'NSFW',

run: async(client, message, args) => {



  if (!message.channel.nsfw) return message.channel.send("Este no es un canal **NSFW**")


neko.nsfw.trap().then(aa => {
  const embed = new Discord.MessageEmbed()
  .setDescription("XD")
  .setImage(aa.url)
  .setFooter("Inviten")
  .setTimestamp()

  message.reply({embeds: [embed]})
})

 }

}