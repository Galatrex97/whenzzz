const Discord = require("discord.js");
const { Client, MessageEmbed } = require("discord.js");
const backup = require("discord-backup");
backup.setStorageFolder(__dirname+"/backups/");

module.exports = {
  name: "backupload",
  aliases: ["loadbackup", "loadcloud"],
  usage: 'backupload/loadbackup/loadcloud',
  category: 'Anti-raid',
  description: 'Carga una backup',

run: (client, message, args) => {

	  
        if(!message.member.permissions.has("ADMINISTRATOR")){
            return message.channel.send("Debes ser el administrador del server.");
        }
        if(!message.guild.me.permissions.has("ADMINISTRATOR")) return message.channel.send("No puedo hacer esto por la asuencia del permiso **Administrador**.")
        let backupID = args[0];
        if(!backupID){
            return message.channel.send("Debes proporcionar el ID de una backup");
        }
        backup.fetch(backupID).then(async () => {
            message.channel.send("Advertencia: TODOS los canales, roles, etc. serán reemplazados alcargar la backup, reacciona con ✅ para confirmar o con ❌ para cancelar. Tienes 20 segundos para decidir antes de que se cancele automaticamente.").then(m => {
				m.react("✅")
				m.react("❌")
			const filter = (reaction, user) => {
            return ["✅", "❌"].includes(reaction.emoji.name) && user.id == message.author.id;
            };
                m.awaitReactions({
									filter,
                    max: 1,
                    time: 20000,
                    errors: ["time"]
                }).catch(() => {
                    m.edit("Han pasado los 20 segundos para confirmar, se ha cancelado la carga.");
                }).then(collected=> {
				const reaction = collected.first();
				if(reaction.emoji.name === "✅"){
                  
                  message.author.send("La backup se empezará a cargar");
                  backup.load(backupID, message.guild).then(() => {
                      backup.remove(backupID);
                  }).catch((err) => {
                      console.log(err)
                  });
        } else if(reaction.emoji.name === '❌'){
					return message.reply("La carga de la backup se ha cancelado.")
				};
				})
			})
    });
 
 }

}