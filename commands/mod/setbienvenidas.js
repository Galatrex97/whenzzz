const Discord = require("discord.js");
const { Client, MessageEmbed } = require("discord.js");
const mongoose = require("mongoose")
const ugu = require("../../models/add")

module.exports = {
  name: "set-welcome",
  aliases: [],
  usage: 'set-welcome <id o mencion del canal>',
  category: 'Mod',
  description: '',

run: async(client, message, args) => {


let canal = message.guild.channels.cache.find(canal => canal.id == args[0]) || message.mentions.channels.first();
let bienvenida = await ugu.findOne({ Guild: message.guild.id }).exec();

if (!canal) return message.channel.send('Menciona o ingresa la ID de un canal al cual se redireccionarán las bienvenidas');
if (!message.member.permissions.has('MANAGE_GUILD')) return message.channel.send('Necesitas un permiso \n**Gestionar Servidor**`');

if (bienvenida) {

  await ugu.updateOne({ Guild: message.guild.id, Channel: canal.id });
  
  message.channel.send({ embeds: [new Discord.MessageEmbed()
  .setDescription(`El canal de bienvenidas ahora es `+ canal.toString())
  .setColor('WHITE')
	]});

} else {

  await new ugu({ Guild: message.guild.id, Channel: canal.id }).save();
  message.channel.send({ embeds: [new Discord.MessageEmbed()
  .setDescription(`El canal de bienvenidas es `+ canal.toString())
	]});

}

 
 }

}