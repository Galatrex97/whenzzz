const Discord = require('discord.js');
const { Client, MessageEmbed } = require('discord.js');
const clientnt = require("nekos.life")
const neko = new clientnt()

module.exports = {
  name: "femdom",
  aliases: [],
  usage: '',
  description: '',
  category: 'NSFW',

run: async(client, message, args) => {



  if (!message.channel.nsfw) return message.channel.send("Este no es un canal **NSFW**")


neko.nsfw.femdom().then(owo => {

  const embed = new Discord.MessageEmbed()
  .setDescription("Uff")
  .setImage(owo.url)
  .setFooter("Hay paja chavales")
  .setTimestamp()

  message.channel.send({embeds: [embed]})

})

 }

}