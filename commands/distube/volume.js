const Discord = require("discord.js");
const { Client, MessageEmbed } = require("discord.js");

module.exports = {
  name: "volume",
  aliases: ["vol"],
  category: 'Música',
  usage: 'volume/vol',
  description: 'Cambia el volumen 😐',

run: (client, message, args) => { 
  const nya = args[0]
try {
    if(isNaN(nya)) return message.reply("Me pasó mañana.") && message.react("<a:xdd:841332542220927016>")
  client.distube.setVolume(message, nya)
  message.react("<a:vale:798231883024433163>")
} catch(err) {
  message.reply("No hay nada reproduciendose.")
}
 }

}