const Discord = require("discord.js");
const { Client, MessageEmbed } = require("discord.js");
const clientnt = require('nekos.life')
const neko = new clientnt()


module.exports = {
  name: "hentai",
  aliases: ['h'],
  usage: 'hentai/h',
  category: 'NSFW',
  description: 'Este comando muestra un gif hentai',

run: async(client, message, args) => {

if(!message.channel.nsfw) return message.reply("Este canal no es NSFW, abstienete de usar ese comando aqui.")

neko.nsfw.randomHentaiGif().then(nya => {
const a = new Discord.MessageEmbed()
.setTitle("Hentai GIF")
.setImage(nya.url)
.setTimestamp()
 
 message.reply({embeds: [a]})
})
 }

}