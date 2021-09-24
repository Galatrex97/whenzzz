const Discord = require("discord.js");
const { Client, MessageEmbed } = require("discord.js");

module.exports = {
  name: "queue",
  aliases: [],
  category: 'Música',
  usage: 'queue',
  description: 'Muestra la lista de reproducción',

run: (client, message, args) => {

let queue = client.distube.getQueue(message);
message.channel.send("La lista de reproducción actual es:\n" + queue.songs.map((song, id) => 
`**${id+1}**. ${song.name} - \`${song.formattedDuration}\``
        ).join("\n"));
    }


 
 }