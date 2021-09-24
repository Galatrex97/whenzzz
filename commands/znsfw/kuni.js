const Discord = require('discord.js');
const { Client, MessageEmbed } = require('discord.js');
const clientnt = require("nekos.life")
const neko = new clientnt()

module.exports = {
  name: "kuni",
  aliases: [],
  usage: 'kuni <user>',
  description: '',
  category: 'NSFW',

run: async(client, message, args) => {

const user = message.mentions.members.first();

if(!user) return message.reply("Debes mencionar a alguien")

  if (!message.channel.nsfw) return message.channel.send("Este no es un canal **NSFW**")

neko.nsfw.kuni().then(ugu =>{
  const embed = new MessageEmbed()
  .setDescription(`**${message.author.username}** le está practicando pussy licking a **${user.user.username}**`)
  .setColor("WHITE")
  .setImage(ugu.url)
  .setFooter("Que ricoo")
  .setTimestamp()

  message.reply({embeds: [embed]})
})


 }

}