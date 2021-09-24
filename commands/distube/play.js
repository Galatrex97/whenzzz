const Discord = require('discord.js');
const distube = require("distube")

module.exports = {
  name: "play",
  aliases: ["p"],
  category: 'Música',
  usage: 'play/p',
  description: 'Reproduce una canción o la añade a la playlist',


run: (client, message, args) => {

    const song = args.join(" ")
    if(!song) return message.channel.send("Debes escribir algo...")
  
    if(!message.member.voice.channel) return message.channel.send("Debes estar en un canal de voz...")

    if(message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send("Debes estar en el mismo canal de voz que yo, de lo contrario no funcionará correctamente...")

    client.distube.play(message, song);
  }
}