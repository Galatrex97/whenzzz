const Discord = require("discord.js");
const { Client, MessageEmbed } = require("discord.js");

module.exports = {
 name: "ping",
aliases: ["ms"],
category: 'Útil',
usage: 'ping/ms',
description: 'Muestra la latencia o ping del bot en milisegundos.',

run: async (client, message, args) => {
message.reply("Mi ping es de "+Math.floor(client.ws.ping))
  }
}