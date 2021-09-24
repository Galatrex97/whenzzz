const Discord = require('discord.js');
const { Client, MessageEmbed } = require('discord.js');
const clientnt = require("nekos.life")
const neko = new clientnt()

module.exports = {
  name: "hug",
  aliases: ["abrazar"],
  usage: 'hug',
  description: 'Este comando abraza a un mencionado.',
  category: 'Anime',

run: async(client, message, args) => {

const person = message.mentions.members.first();
if(!person) return message.reply("Debes mencionar a alguien.")

neko.sfw.hug().then(asd => {
  const embed = new MessageEmbed()
  .setDescription(`**${message.author.username}** Abraza a **${person.user.username}**`)
  .setImage(asd.url)

  message.reply(embed)
})


 }

}