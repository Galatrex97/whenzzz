const Discord = require("discord.js");
const { Client, MessageEmbed } = require("discord.js");

module.exports = {
  name: "stop",
  aliases: [],
  category: 'Música',
  usage: 'stop',
  description: 'Detiene la canción y la lista entera, esto hará que me salga del canal',


run: async(client, message, args) => {

 if(!message.member.voice.channel) return message.channel.send("Debes estar en un canal de voz...")

    if(message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send("Debes estar en el mismo canal de voz que yo, de lo contrario no funcionará correctamente...")

    client.distube.stop(message);
    message.channel.send("La musica se ha detenido correctamente.");
 
 }

}