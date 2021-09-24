const Discord = require('discord.js');
const { Client, MessageEmbed } = require('discord.js');
const clientnt = require("nekos.life")
const neko = new clientnt()

module.exports = {
  name: "smug",
  aliases: [],
  usage: 'smug',
  description: '...',
  category: 'Anime',

run: async(client, message, args) => {

neko.sfw.smug().then(asd => {
  const embed = new MessageEmbed()
  .setDescription(`JAJAJAJAJA`)
  .setImage(asd.url)

  message.reply({embeds: [embed]})
})


 }

}