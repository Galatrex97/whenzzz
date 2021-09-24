const Discord = require('discord.js');
const { Client, MessageEmbed } = require('discord.js');
const clientnt = require("nekos.life")
const neko = new clientnt()

module.exports = {
  name: "tickle",
  aliases: ["cosquillas"],
  usage: 'tickle/cosquillas',
  description: 'Este comando le hace cosquillas a un mencionado.',
  category: 'Anime',

run: async(client, message, args) => {

const person = message.mentions.members.first();
if(!person) return message.reply("Debes mencionar a alguien.")

neko.sfw.tickle().then(asd => {
  const embed = new MessageEmbed()
  .setDescription(`**${message.author.username}** le hace cosquillas a **${person.user.username}**`)
  .setImage(asd.url)

  message.reply({embeds: [embed]})
})


 }

}