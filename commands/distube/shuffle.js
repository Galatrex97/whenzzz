const Discord = require("discord.js");
const { Client, MessageEmbed } = require("discord.js");

module.exports = {
  name: "shuffle",
  aliases: ["aleatorio"],
  category: 'Música',
  usage: 'shuffle/aleatorio',
  description: 'Activa el modo aleatorio de la playlist.',

run: (client, message, args) => {

client.distube.shuffle(message);
message.reply("Se ha activado el modo aleatorio.")
 
 }

}