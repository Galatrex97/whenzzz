const Discord = require("discord.js");
const { Client, MessageEmbed } = require("discord.js");

module.exports = {
  name: "skip",
  aliases: [],
  category: 'Música',
  usage: 'skip',
  description: 'Salta una canción, pero puedes saltar más de una utilizando el comando jump.',

run: async(client, message, args) => {

if(!message.member.voice.channel) return message.channel.send("Debes estar en un canal de voz...")

    if(message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send("Debes estar en el mismo canal de voz que yo, de lo contrario no funcionará correctamente...")

client.distube.skip(message);

message.channel.send("La cancion fue omitida correctamente.")
 
 }

}