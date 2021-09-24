const Discord = require('discord.js');
const { Client, MessageEmbed } = require('discord.js');
const clientnt = require("nekos.life")
const neko = new clientnt()

module.exports = {
  name: "cumslut",
  aliases: ["cumsluts"],
  usage: 'cumslut/s',
  description: '',
  category: 'NSFW',

run: async(client, message, args) => {



  if (!message.channel.nsfw) return message.channel.send("Este no es un canal **NSFW**")

neko.nsfw.cumsluts().then(asja => {
  const ahd = new Discord.MessageEmbed()
  .setDescription("Que ricoo")
  .setImage(asja.url)
  .setColor("WHITE")
  .setFooter("Esta noche me voy a manosear")
  .setTimestamp()

  message.reply({embeds: [ahd]})
})


 }

}