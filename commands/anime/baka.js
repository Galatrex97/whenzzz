const Discord = require('discord.js');
const { Client, MessageEmbed } = require('discord.js');
const clientnt = require("nekos.life")
const neko = new clientnt()

module.exports = {
  name: "baka",
  aliases: [],
  usage: 'baka',
  description: '...',
  category: 'Anime',

run: async(client, message, args) => {

neko.sfw.baka().then(asd => {
  const embed = new MessageEmbed()
  .setDescription(`Idiota`)
  .setImage(asd.url)

  message.reply({embeds: [embed]})
})


 }

}