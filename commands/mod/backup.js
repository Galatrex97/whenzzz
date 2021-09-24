const Discord = require("discord.js");
const { Client, MessageEmbed } = require("discord.js");
const backup = require("discord-backup")
  backup.setStorageFolder(__dirname+"/backups/");

module.exports = {
  name: "backup",
  aliases: ["cloud"],
  usage: 'backup/cloud',
  category: 'Anti-raid',
  description: 'Crea una copia de seguridad del server',

run: (client, message, args) => {

//Otra vez vuelvo a subir este comando, por favor, no me lo borren por los comentaios que hay en los codigos, son porque estoy desarrollando un bot en ingles

//Aparte de eso no olviden instalar el npm de "discord-backup" y crear una carpeta llamda backups
	  
    let perms = message.member.permissions.has("ADMINISTRATOR");

    if (!perms)
      return message.reply(
       "No tienes el permiso de Administrador como para usar este comando"
      );
    backup
      .create(message.guild, {
        jsonBeautify: true
      })
      .then(backupData => {
        // And send informations to the backup owner
        message.author.send({ embeds: [
					          new Discord.MessageEmbed()
         .setAuthor(`Backup creada correctamente`)
          .setColor(message.guild.me.displayHexColor)
          .setDescription(`Para cargar esta backup usa ${backupData.id}`)
          .setThumbnail(message.author.displayAvatarURL())
				]
          })
        message.channel.send({ embeds: [//backupData.id
          new Discord.MessageEmbed()
          .setAuthor(`Backup creada correctamente`)
          .setColor(message.guild.me.displayHexColor)
          .setThumbnail(message.author.displayAvatarURL())
          .setDescription("**El ID de la backup se ha enviado a tu MD**")
				]});
      });
 
 }

}