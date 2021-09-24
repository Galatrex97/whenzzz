const Discord = require("discord.js");
const { Client, MessageEmbed } = require("discord.js");
const prefixSchema = require("../../models/prefix");
const prefix = process.env.prefix;

module.exports = {
  name: "prefix-reset",
  aliases: ["prefix-rs"],
  category: 'Mod',
  usage: 'prefix-rs/prefix-reset',
  description: 'Hace que el prefix vuelva a ser el prefix por defecto (k!).',

run: async(client, message, args) => {
if(!message.member.permissions.has("ADMINISTRATOR")) return message.reply("No.").then(nya => {
  setTimeout(() => {
    nya.delete()
  }, 7000)
})
  await prefixSchema.findOneAndDelete({ Guild : message.guild.id })
  message.reply(`El prefix ha sido reestablecido a **${prefix}**`)
 }

}