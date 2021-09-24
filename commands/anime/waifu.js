const Discord = require('discord.js');
const { Client, MessageEmbed } = require('discord.js');
const clientnt = require("nekos.life")
const neko = new clientnt()

module.exports = {
  name: "waifu",
  aliases: [],
  usage: '',
  description: '',
  category: 'Anime',

run: async(client, message, args) => {

neko.sfw.waifu().then(aa => {
  const embed = new MessageEmbed()

  .setDescription("ugu")
  .setImage(aa.url)

  message.channel.send({embeds: [embed]})
})

 }

}