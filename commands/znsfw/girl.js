const Discord = require('discord.js');
const { Client, MessageEmbed } = require('discord.js');
const clientnt = require("nekos.life")
const neko = new clientnt()

module.exports = {
  name: "girl",
  aliases: [],
  usage: 'girl',
  description: '',
  category: 'NSFW',

run: async(client, message, args) => {



  if (!message.channel.nsfw) return message.channel.send("Este no es un canal **NSFW**")

neko.nsfw.girlSolo().then(a => {
  const embed = new MessageEmbed()
  .setDescription("Nya~")
  .setImage(a.url) 
  .setFooter("ugu")
  .setTimestamp()

  message.reply({embeds: [embed]})
})


 }

}