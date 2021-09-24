const Discord = require("discord.js");
const { Client, MessageEmbed } = require("discord.js");
const clientnt = require('nekos.life');
const neko = new clientnt()

module.exports = {
  name: "kiss",
  aliases: [],
  usage: 'kiss',
  category: 'Anime',
  description: 'Besa a alguien con este comando',

run: (client, message, args) => {

let nya = message.mentions.members.first()
if (!nya) return message.reply("Debes mencionar a alguien")

neko.sfw.kiss().then(neko => {

const embed = new MessageEmbed()
.setTitle(`${message.author.username} Le ha dado un beso a ${nya.user.username}`)
.setImage(neko.url)
.setColor("WHITE")
.setFooter("Para cuando la boda?")
.setTimestamp()

message.reply({embeds: [embed]})

})


 
 }

}