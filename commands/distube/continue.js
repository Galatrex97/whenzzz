const Discord = require('discord.js');

module.exports = {
  name: "continue",
  aliases: ["resume"],
  category: 'Música',
  usage: 'continue/resume',
  description: 'Continua la canción si ha sido pausada.',

run: (client, message, args) => {

  const serverQueue = client.distube.getQueue(message)

  if(!message.member.voice.channel) return message.channel.send("Debes estar en un canal de voz para usar el cmd")

  if(message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send("debes estar en el mismo canal de voz que yo")

  if(!serverQueue) return message.channel.send("No hay canciones reproduciendose...")

  if(!serverQueue.pause) return message.channel.send("La canción no está pausada.")

  client.distube.resume(message)

  message.channel.send("La canción fue reanudada correctamente.")
  }  
}