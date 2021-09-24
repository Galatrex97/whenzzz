const Discord = require('discord.js');

module.exports = {
  name: "pause",
  aliases: ["ps"],
  category: 'Música',
  usage: 'pause/ps',
  description:'Pausa la canción que se está reproduciendo.',

run: (client, message, args) => {

  const serverQueue = client.distube.getQueue(message)

  if(!message.member.voice.channel) return message.channel.send("Debes estar en un canal de voz para usar el cmd")

  if(message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send("Debes estar en el mismo canal de voz que yo")

  if(!serverQueue) return message.channel.send("No hay canciones reproduciendose...")

  if(serverQueue.pause) return message.channel.send("La canción ya había sido pausada...")

  client.distube.pause(message)

  message.channel.send("La canción ha sido pausada.")
  }  
}