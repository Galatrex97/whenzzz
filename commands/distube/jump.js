const Discord = require("discord.js");
const distube = require("distube");

module.exports = {
  name: "jump",
  aliases: ["saltar"],
  category: 'Música',
  usage: 'jump/saltar',
  description: 'Salta entre canciones de la playlist, por ejemplo saltarse de la 1era canción hasta la 4ta.',

run: (client, message, args) => {

client.distube.jump(message, parseInt(args[0]))
            .catch(err => message.channel.send("Invalid song number."));
 
 }

};