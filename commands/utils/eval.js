const safeEval = require('notevil');
const Discord = require("discord.js");
const { Client, MessageEmbed } = require("discord.js");
const nya = process.env.botOwner
module.exports = {
  name: "eval",
  aliases: [],
  usage: 'eval',
  category: 'Mod',
  description: '...',

run: async(client, message, args) => {

if(message.author.id !== nya) {
            let embed = new Discord.MessageEmbed() //Creamos el embed
            .setDescription("Mmm, no puedes hacer esto")
       return message.reply({embeds: [embed]})

        
        }

				var no = ["process.env", "client.token", "client.destroy"]



        let toEval = args.join(" ") //Definimos toEval con argumentos
				if([no].includes(toEval)) return;
        if(!toEval) { //Creamos un if para que diga
            let embed = new Discord.MessageEmbed()
            .setDescription("Y el code? <a:xdd:841332542220927016>")
            .setColor("WHITE")
           return message.reply({embeds: [embed]})
            .then(m => m.delete({ timeout: 5000}))
        }
        try {
					if (no.includes(toEval)){
             return message.reply("No puedes acceder a está información.");
        }
        let evaluated = eval(toEval) //"evaluated" va a evaluar el comando
       if(!args.join(" ")) return;
        let beautify = require("beautify") //Se usa beautify para que funcione
        let embed = new Discord.MessageEmbed() //Creamos otro embed
        .setColor("WHITE")
        .setTimestamp() //Usamos un Timestamp
        .setFooter(client.user.username, client.user.displayAvatarURL)
        .setTitle(`:desktop: ${client.user.username}`)
        .setDescription("Este comando sirve para ejecutar codes")
        .addField("Codigo:", "```js\n"+beautify(args.join(" "), { format: "js" })+"```")
        .addField("Evaluado:", "```js\n"+evaluated+"```") //Aca aparecera lo que se evalua
        message.reply({embeds: [embed]})
    } catch(err) { //Hacemos un catch y que defina err
        let beautify = require("beautify")
       let embed2 = new Discord.MessageEmbed()
       .setTimestamp()
       .setFooter(client.user.username, client.user.displayAvatarURL)
       .addField("Hubo un error con el codigo que evaluaste", "```js\n"+err+"```") //Va a aparecer el error
       .setColor("WHITE")
       return message.reply({embeds: [embed2]}) 
    }
    }
 
 }