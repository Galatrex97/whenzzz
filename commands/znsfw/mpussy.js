const Discord = require('discord.js');
const { Client, MessageEmbed } = require('discord.js');
const clientnt = require("nekos.life")
const neko = new clientnt()

module.exports = {
  name: "mpussy",
  aliases: ["masturbation", "wank"],
  usage: '',
  description: '',
  category: 'NSFW',

run: async(client, message, args) => {



  if (!message.channel.nsfw) return message.channel.send("Este no es un canal **NSFW**")

neko.nsfw.pussyWankGif().then(asa => {
  const embed = new Discord.MessageEmbed()
.setDescription("Disfruta")
.setImage(asa.url)
.setFooter("Que ricoo")
.setTimestamp()

message.reply({embeds: [embed]})
})


 }

}