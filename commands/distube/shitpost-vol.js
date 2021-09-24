const Discord = require("discord.js");
const { Client, MessageEmbed } = require("discord.js");

module.exports = {
  name: "shitpost-v",
  aliases: ["s-vol"],
  category: 'Música',
  usage: 'shitpost-vol/s-vol',
  description: '🥶',

run: (client, message, args) => {

 if(!message.member.permissions.has("ADMINISTRATOR")) return message.channel.send("Necesitas ser admin para hacer esto")


const shitpost = '999999999'
client.distube.setVolume(message, shitpost);
message.channel.send("Sale chipos")
 
 }

}