const Discord = require("discord.js");
const { Client, MessageEmbed } = require("discord.js");

module.exports = {
  name: "say",
  aliases: ["d"],
  category: 'Útil',
  usage: 'say/d',
  description: 'Este comando hace que yo diga algo en el canal en el que se ejecuto el comando',

run: async(client, message, args) => {

let texto = args.join(' ')
if(texto.includes('@everyone') && !message.member.permisions.has("ADMINISTRATOR")) return message.reply("No.").then(nya => {
  nya.delete({ timeout: 7000})
})


if(texto.includes('@here') && !message.member.permissions.has("ADMINISTRATOR")) return message.reply("No.").then(nya => {
  nya.delete({ timeout: 7000})
})


if(!texto) return message.channel.send("Debes escribir algo...")
message.delete().catch(()=> null)

message.channel.send(texto)
 
 }

}