const Discord = require('discord.js');
const { Client, MessageEmbed } = require('discord.js');
const clientnt = require("nekos.life")
const neko = new clientnt()

module.exports = {
  name: "kemonomimi",
  aliases: ["cat-ears"],
  usage: '',
  description: '',
  category: 'NSFW',

run: async(client, message, args) => {



  if (!message.channel.nsfw) return message.channel.send("Este no es un canal **NSFW**")

neko.nsfw.kemonomimi().then(aa => {
  const embed = new MessageEmbed()
  .setColor("WHITE")
  .setImage(aa.url)
  .setDescription("Meow")
  .setTimestamp()
  .setFooter("A domicilio?")

  message.reply({embeds: [embed]})
})


 }

}