const Discord = require("discord.js");
const { Client, MessageEmbed } = require("discord.js");
const db = require("../../models/warn.js");
const mongoose = require("mongoose")

module.exports = {
  name: "warn",
  aliases: [],
  usage: 'warn <@usuario>',
  category: 'Mod',
  description: '...',

run: (client, message, args) => {

 if(!message.member.permissions.has('ADMINISTRATOR')) return message.reply(`No tienes el permiso **Administrador**`)
    const user = message.mentions.members.first() || message.guild.members.cache.get(args[0])
    if(!user) return message.reply(`Debes mencionar a alguien`)
    if(user.id === client.user.id) return message.reply("No puedes warnearme a mi.")


    const reason = args.slice(1).join(" ") ? args.slice(1).join(" ") : "No se dió un motivo" 
    db.findOne({ guildid: message.guild.id, user: user.user.id}, async(err, data) => {
        if(err) throw err;
        if(!data) {
            data = new db({
                guildid: message.guild.id,
                user : user.user.id,
                content : [
                    {
                        moderator : message.author.id,
                        reason : reason 
                    }
                ]
            })
        } else {
            const obj = {
                moderator: message.author.id,
                reason : reason
            }
            data.content.push(obj)
        }
        data.save() 
    });

const server = message.guild;

    const nya = new MessageEmbed()
    .setTitle(`${server.name}`)
    .setDescription(`${user} fue warneado por __${reason}__\nModerador: ${message.author}`)
    .setThumbnail(server.iconURL())
    .setColor("WHITE")
    .setFooter("Bien.")
    .setTimestamp()

    const xD = new MessageEmbed()
    .setTitle("Warn")
    .setDescription(`Te han warneado en ${message.guild.name} por ${reason}\nModerador: ${message.author}`)
    .setColor("WHITE")
    .setThumbnail(server.iconURL())
    .setFooter("...")
    .setTimestamp()

    message.channel.send({embeds: [nya]})
    user.send({embeds: [xD]})

 
 }

}