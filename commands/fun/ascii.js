const Discord = require("discord.js");
const { Client, MessageEmbed } = require("discord.js");
const figlet = require('figlet')
const cooldown = new Set();

module.exports = {
  name: "ascii",
  aliases: [],
  usage: 'ascii',
  category: 'Fun',
  description: '',

run: (client, message, args) => {

if(cooldown.has(message.author.id)){

message.reply(`Hey ${message.author} espera 7seg antes de volver a usar el comando`)

return;
}

cooldown.add(message.author.id);

setTimeout(() =>{
  cooldown.delete(message.author.id);
}, 7000);


 if (!args[0]) return message.reply("¿Y el Texto?")
    if (args.join(" ") > 15) message.reply("El texto no puede contener más de 15 Caracteres")
    figlet(args.join(" "), (err, data) => message.reply("```" + data + "```"))
 
 }

}