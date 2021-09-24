const Discord = require('discord.js');
const { Client, MessageEmbed } = require('discord.js');
const clientnt = require("nekos.life")
const neko = new clientnt()

module.exports = {
  name: "pat",
  aliases: [],
  usage: 'pat',
  description: 'Este comando da una palmada a un mencionado.',
  category: 'Anime',

run: async(client, message, args) => {

const person = message.mentions.members.first();
if(!person) return message.reply("Debes mencionar a alguien.")

neko.sfw.pat().then(asd => {
  const embed = new MessageEmbed()
  .setDescription(`**${message.author.username}** le da una palmadita a **${person.user.username}**`)
  .setImage(asd.url)

  message.reply({embeds: [embed]})
})


 }

}