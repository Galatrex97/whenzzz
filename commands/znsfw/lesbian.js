const Discord = require('discord.js');
const { Client, MessageEmbed } = require('discord.js');
const clientnt = require("nekos.life")
const neko = new clientnt()

module.exports = {
  name: "lesbian",
  aliases: [],
  usage: 'lesbian y mano derecha desocupada',
  description: 'Muestra un gif o imagen lesbica.',
  category: 'NSFW',

run: async(client, message, args) => {



  if (!message.channel.nsfw) return message.channel.send("Este no es un canal **NSFW**")

neko.nsfw.lesbian().then(aa => {
  const ugu = new MessageEmbed()
  .setDescription("Disfruta")
  .setColor("WHITE")
  .setTimestamp()
  .setImage(aa.url)
  .setFooter("Que ricoo")
  message.reply({embeds: [ugu]})
})


 }

}