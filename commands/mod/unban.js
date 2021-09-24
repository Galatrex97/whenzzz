const Discord = require("discord.js");
const { Client, MessageEmbed } = require("discord.js");

module.exports = {
  name: "unban",
  aliases: ["desbanear"],
  category: 'Mod',
  usage: 'unban/desbanear <id de la persona baneada>',
  description: 'Desbanea a alguien? bruh',

run: async(client, message, args) => {

if  (!message.member.permissions.has("BAN_MEMBERS")) {
  return message.channel.send("No tienes los permisos requeridos para **Desbanear Miembros**")
}

    if (!message.guild.me.permissions.has("BAN_MEMBERS")) return message.channel.send("No tengo los permisos requeridos para poder ejecutar este comando.")

    let userId = args[0]
    if (!userId) return message.channel.send("Debes escribir un ID")
    if(isNaN(userId)) return message.channel.send("El id debe ser un numero")
const member = await client.users.fetch(userId)

    message.guild.bans.fetch().then(async bans => {
      if (bans.size === 0) return message.reply("El server no tiene ningún miembro baneado.")

      let bannedUser = bans.find(ban => ban.user.id == userId)
      if (!bannedUser) return message.channel.send("Ese miembro no está baneado.")

     await message.guild.members.unban(bannedUser.user).catch(err => {
       return message.channel.send("Algo salió mal.")
     }).then(() => {
        message.channel.send(`El usuario ${member} fue Desbaneado`)
     })
    })

  }

}