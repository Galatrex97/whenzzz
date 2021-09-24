const Discord = require("discord.js");
const { Client, MessageEmbed } = require("discord.js");

module.exports = {
  name: "kick",
  aliases: ["pg"],
  category: 'Mod',
  usage: 'kick/pg',
  description: 'Expulsa a alguien del server.',

run: async(client, message, args) => {

let owner = (await message.guild.fetchOwner()).user.id;

var perms = message.member.permissions.has("KICK_MEMBERS")
if(!perms) return message.reply("No tienes los permisos requeridos para **Expulsar miembros**")

const user = message.mentions.members.first();

if(!user) return message.reply("Debes mencionar a alguien")

if(user.id === message.author.id) return message.reply("Es enserio? :neutral_face:")

if(user.id === client.user.id) return message.reply('😔')

if(user.id === owner) return message.reply("No se puede kickear al dueño del servidor. XD?")

  if(message.member.roles.highest.comparePositionTo(user.roles.highest) <= 0) return message.reply("No puedes banear a esa persona por que tiene un mayor o igual rango que tú.")

var reason = args.slice(1).join(' ')

if(!reason){
  reason = 'No especificado'
}

user.kick(reason);  

message.reply(`El usuario **${user}** fue expulsado por **${reason}**\nModerador: **${message.author}**`)

 }

}