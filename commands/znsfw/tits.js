const Discord = require('discord.js');
const { Client, MessageEmbed } = require('discord.js');
const clientnt = require("nekos.life")
const neko = new clientnt()

module.exports = {
  name: "tits",
  aliases: [],
  usage: 'tits',
  description: '',
  category: 'NSFW',

run: async(client, message, args) => {



  if (!message.channel.nsfw) return message.channel.send("Este no es un canal **NSFW**")

neko.nsfw.tits().then(asa => {
  const aa = new MessageEmbed()
  .setDescription("Mmm tetas")
  .setImage(asa.url)
  .setColor("WHITE")
  .setFooter("ig de la minita?")
  .setTimestamp()

  message.reply({embeds: [aa]})
})


 }

}