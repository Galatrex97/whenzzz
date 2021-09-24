const Discord = require("discord.js");
module.exports = {
  name: "hackban",
  aliases: [],
  category: 'Mod',
  usage: 'hackban <id>',
  description: 'Terminado, necesitas el id de la persona a banear',
run: async(client, message, args, p) => {
  const embed = new Discord.MessageEmbed()
    .setAuthor(message.author.username, message.author.displayAvatarURL())
    .setFooter(message.guild.name, message.guild.iconURL())
 if (!args[0]) {
    embed.setDescription('Debes escribir el ID de un usuario.') 
    embed.setColor('WHITE')
    return message.message.reply({embeds: [embed]}).then(m => m.delete({ timeout: 3000 }))
}

let member = message.mentions.members.first() || message.guild.members.resolve(args[0]) || message.guild.members.cache.find(m => m.user.username.toLowerCase() == args[0]) || await client.users.fetch(args[0])

if (!member) {
    embed.setDescription('Necesitas escribir el ID de un usuario.') 
    embed.setColor('WHITE')
    return message.reply({embeds: [embed]})
}
if (member.id == message.author.id) {
  embed.setDescription('No te puedes hacer hackban a ti mismo.')
}
if (!message.guild.me.permissions.has("BAN_MEMBERS")) return message.reply("No puedo usar este comando por la ausencia del permiso **Banear Miembros**")
if (!message.member.permissions.has('BAN_MEMBERS')) {
    embed.setDescription('No puedes usar este comando por la ausencia del permiso **Banear Miembros**.')
    embed.setColor('WHITE')
    return message.reply({embeds: [embed]})
}

if (message.guild.members.resolve(member.id)) {
    if (message.member.roles.highest.comparePositionTo(member.roles.highest) <= 0) {
        embed.setDescription('No puedes banear a un usuario con un rango igual o mayor que el tuyo.')
        embed.setColor('WHITE')
        return message.reply({embeds: [embed]})
    }
    if (!member.bannable) {
        embed.setDescription('No puedo banear a este usuario')
        embed.setColor('WHITE')
        return message.reply({embeds: [embed]})
    }
}

let razon = args.slice(1).join(" ") ? args.slice(1).join(" ") : "Razon sin especificar"
message.guild.members.ban(member.id, { reason: razon })
embed
    .setAuthor(message.author.username, message.author.displayAvatarURL())
    .setThumbnail(!!member.user ? member.user.displayAvatarURL() : member.displayAvatarURL())
    .setTitle('¡Hackban exitoso!')
    .addField(`> Usuario Baneado`, !!member.user ? member.user.tag : member.tag)
    .addField('> Razón', razon)
    .setColor('WHITE')
    .setTimestamp()

if (!!member.user) member.user.send({embeds: [embed]}).catch(e => e);
message.reply({embeds: [embed]})

 }

}