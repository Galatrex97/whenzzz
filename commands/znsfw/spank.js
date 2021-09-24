const Discord = require('discord.js');
const { Client, MessageEmbed } = require('discord.js');
const clientnt = require("nekos.life")
const neko = new clientnt()

module.exports = {
  name: "spank",
  aliases: [],
  usage: '',
  description: '',
  category: 'NSFW',

run: async(client, message, args) => {

const user = message.mentions.members.first();
if(!user) return message.reply("Debes mencionar a alguien")
  if (!message.channel.nsfw) return message.channel.send("Este no es un canal **NSFW**")

neko.nsfw.spank().then(a => {
  const embed = new MessageEmbed()
  .setDescription(`${message.author.username} le da una nalgada a ${user.user.username}`)
  .setImage(a.url)
  .setFooter("Uff")
  .setTimestamp()
   message.channel.send({embeds: [embed]})
})


 }

}