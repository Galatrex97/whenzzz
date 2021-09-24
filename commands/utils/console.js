const Discord = require("discord.js");
const { Client, MessageEmbed } = require("discord.js");

module.exports = {
  name: "bugreport",
  aliases: ["console", "bug", "reportbug", "report-bug", "bug-report"],
  usage: 'console/bugreport/bug/reportbug/report-bug/bug-report',
  category: 'Útil',
  description: '...',

run: (client, message, args) => {

const a = args.join(" ")
if(!a) return message.reply("Que bug quieres reportar?")
const embed = new MessageEmbed()
.setTitle('Nuevo reporte de bug')
.setColor("WHITE")
.setFooter("Mmm")
.setTimestamp()
.setDescription(`El usuario **${message.author.tag}** ha reportado un bug desde el server **${message.guild.name}**.\nEl bug reportado es el siguiente: **${a}**`)

client.users.cache.get(process.env.botOwner).send({embeds: [embed]})

message.reply(`Tu bug se ha reportado correctamente y estará en revisión muy pronto.`)
 }

}