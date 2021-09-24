const Discord = require("discord.js");
const { Client, MessageEmbed } = require("discord.js");

module.exports = {
  name: "say-c",
  aliases: ["sc"],
  category: 'Útil',
  usage: 'say-c/sc',
  description: 'Este comando hace que yo diga algo en un canal especifico (tienes que mencionar el canal obviamente).',

run: (client, message, args) => {

  var perms = message.member.permissions.has("ADMINISTRATOR")
  if(!perms) return message.channel.send("No tienes los permisos requeridos para usar este comando.")

let canal = message.mentions.channels.first()
if(!canal) return message.channel.send("Debes mencionar un canal eh")

let texto = args.slice(1).join(" ")
if (texto.includes("@everyone") && !perms) return message.reply("No, simplemente no.").then(e =>{
  setTimeout(() =>{
    e.delete()
  }, 7000)
})
if (texto.includes("@here") && !perms) return message.reply("No, simplemente no.").then(e =>{
  setTimeout(() =>{
    e.delete()
  }, 7000)
})
if(!texto)
  return message.channel.send("Debes escribir algo.")
  message.delete().catch(()=> null)
  
canal.send(texto)
 
 }

}