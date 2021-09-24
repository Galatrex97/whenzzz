const Discord = require("discord.js");
const { Client, MessageEmbed } = require("discord.js");
const distube = require("distube");

module.exports = {
  name: "repeat",
  aliases: [],
  category: 'Música',
  usage: 'repeat 0/1/2',
  description: 'Cambia al modo repetición. El modo 1 repite la canción actual, el 2 la lista de reproducción entera y el 0 apaga este modo.',

run: (client, message, args) => {

let mode = client.distube.setRepeatMode(message, parseInt(args[0]));
        mode = mode ? mode == 2 ? "Repetir playlist" : "Repetir canción" : "Apagado";
        message.channel.send("El modo de repetición actual es: `" + mode + "`");
 
 }

}