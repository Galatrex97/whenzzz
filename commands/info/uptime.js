const Discord = require("discord.js");
const { Client, MessageEmbed } = require("discord.js");

module.exports = {
  name: "uptime",
  aliases: [],
  usage: 'uptime',
  category: 'Info',
  description: 'Muestra el tiempoque ha estado el bot online',

run: (client, message, args) => {

let days = Math.floor(client.uptime / 86400000);
let hours = Math.floor(client.uptime / 3600000) % 24;
let minutes = Math.floor(client.uptime / 60000) % 60;
let seconds = Math.floor(client.uptime / 1000) % 60;
 
const ugu = new MessageEmbed()
.setTitle("**Tiempo online**")
.setDescription(`:clock1: \`${days} Días\` \`${hours} Horas\` \`${minutes} Minutos\` \`${seconds} Segundos\``)
.setColor("WHITE")
.setFooter("Mmm...")
.setTimestamp();

message.reply({embeds: [ugu]})
 }

}