const Discord = require("discord.js");
const { Client, MessageEmbed } = require("discord.js");
const prefixSchema = require("../../models/prefix")
const { Message} = require('discord.js');

module.exports = {
  name: "setprefix",
    aliases: ["sp", "set-prefix"],
    category: 'Mod',
    usage: 'setprefix/sp/set-prefix',
    description: 'Establece o cambia el prefix actual.',

/**
 * @param { Message } message
 */

run: async(client, message, args) => {
if(!message.member.permissions.has("ADMINISTRATOR")) return message.reply("No.").then(nya => {
  setTimeout(() => {
    nya.delete()
  }, 7000)
})

const res = await args.join(" ")
let emoji = Discord.Util.parseEmoji(res)
const emojiRegex = require("emoji-regex"); 

if(res.includes(`<:${emoji.name}:${emoji.id}>` || `<a:${emoji.name}:${emoji.id}>`) || res.length > 4 || res.match(emojiRegex)) { 
	return message.reply('No puedes poner un prefix de más de 4 caracteres ni emojis.');
}
if(!res) return message.reply("A cuál prefix quieres cambiar?")


prefixSchema.findOne({ Guild : message.guild.id }, async(err, data) => {
  if(err) throw err;
  if(data) {
   await prefixSchema.findOneAndDelete({ Guild : message.guild.id })
    data = new prefixSchema({
      Guild : message.guild.id,
      Prefix : res
    })
    data.save()
    message.reply(`Mi prefix ha sido cambiado a **${res}**`)
  } else {
    data = new prefixSchema({
      Guild : message.guild.id,
      Prefix : res
    })
    data.save()
    message.reply(`Mi prefix ha sido cambiado a **${res}**`)
  }
})

 }

}