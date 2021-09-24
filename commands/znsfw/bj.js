const Discord = require('discord.js');
const { Client, MessageEmbed } = require('discord.js');
const clientnt = require("nekos.life")
const neko = new clientnt()

module.exports = {
  name: "bj",
  aliases: ["mamada"],
  usage: '',
  description: '',
  category: 'NSFW',

run: async(client, message, args) => {

const user = message.mentions.members.first();
if(!user) return message.reply("Debes mencionar a alguien.")

  if (!message.channel.nsfw) return message.channel.send("Este no es un canal **NSFW**")

neko.nsfw.bJ().then(awwia => {
  const sag = new MessageEmbed()
  .setDescription(`**${message.author.username}** le hace una mamada a **${user.user.username}**`)
  .setImage(awwia.url)
  .setColor("WHITE")
  .setFooter("Inviten")
  .setTimestamp()

  message.reply({embeds: [sag]})
})


 }

}