const Discord = require('discord.js');
const { Client, MessageEmbed } = require('discord.js');
const clientnt = require("nekos.life")
const neko = new clientnt()

module.exports = {
  name: "sneko",
  aliases: [],
  usage: 'sneko',
  description: '...',
  category: 'Anime',

run: async(client, message, args) => {

neko.sfw.neko().then(asd => {
  const embed = new MessageEmbed()
  .setDescription(`Meow`)
  .setImage(asd.url)

  message.reply({embeds: [embed]})
})


 }

}