const Discord = require("discord.js");
const { Client, MessageEmbed } = require("discord.js");
const memes = require('discord-memes');

module.exports = {
  name: "meme",
  aliases: ["momo"],
  category: 'Fun',
  usage: 'meme/',
  description: 'Hace que envié un meme al azar',
  

run: (client, message, args) => {

return message.channel.send(memes.deTodoEspañol());
 
 }

}