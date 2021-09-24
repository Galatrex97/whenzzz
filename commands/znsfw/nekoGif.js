const Discord = require('discord.js');
const { Client, MessageEmbed } = require('discord.js');
const clientnt = require("nekos.life")
const neko = new clientnt()

module.exports = {
  name: "gifneko",
  aliases: ["nekogif"],
  usage: 'nekogif y mano derecha desocupada',
  description: '',
  category: 'NSFW',

run: async(client, message, args) => {



  if (!message.channel.nsfw) return message.channel.send("Este no es un canal **NSFW**")


neko.nsfw.nekoGif().then(uwu => {
  const embed = new Discord.MessageEmbed()
  .setDescription("Neko GIF")
  .setImage(uwu.url)
  .setColor("WHITE")
  .setFooter("nya~")
  .setTimestamp()
  message.reply({embeds: [embed]})
})

 }

}