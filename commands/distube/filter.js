const Discord = require("discord.js");
const { Client, MessageEmbed } = require("discord.js");

module.exports = {
  name: "filter",
  aliases: [],
  usage: 'filter <filter>',
  category: 'Música',
  description: 'Coloca un filtro',

run: (client, message, args) => {
  const filtrs = args[0]
  try{
     if([`3d`, `bassboost`, `echo`, `karaoke`, `nightcore`, `vaporwave`, `flanger`, `gate`, `haas`, `reverse`, `surround`, `mcompand`, `phaser`, `tremolo`, `earwax`].includes(filtrs)) {

let filter = client.distube.setFilter(message, filtrs)

message.reply("Filtro actual: " + (filter || "Apagado"), { allowedMentions: {repliedUser: false} })
 }
   } catch(err) {
    message.reply("No hay nada reproduciendose.")
   }

if(!args[0]) return message.reply("Debes decir un filtro")

if(![`3d`, `bassboost`, `echo`, `karaoke`, `nightcore`, `vaporwave`, `flanger`, `gate`, `haas`, `reverse`, `surround`, `mcompand`, `phaser`, `tremolo`, `earwax`].includes(args[0])) {

message.reply("Debes enviar un filtro válido (`3d, bassboost, echo, vaporwave, nightcore, karaoke, flanger, gate, haas, reverse, surround, mcompand, phaser, tremolo, earwax`)")

 }





}
}