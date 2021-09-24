const Discord = require("discord.js");
const { Client, MessageEmbed } = require("discord.js");

module.exports = {
  name: "snipe",
  aliases: [],
  usage: 'snipe',
  category: 'Mod',
  description: 'Muestra un mensaje recientemente eliminado.',

run: (client, message, args) => {


 const channel = message.mentions.channels.first() || message.channel;

//en esta constante definimos un canal mencionado y si no el canal donde se ejecuto el cmd

const msg = client.snipes.get(channel.id);
//en esta constante definimos nuestro client.snipes que es nuestro objeto Map, con el metodo .get() tratamos de ver si channel.id(id del canal) esta dentro del Map  
    if (!msg){
	 message.reply("No se ha borrado recientemente ningun mensaje")
       .then(m => m.delete({timeout: 5000}));
//Si no lo esta mandamos este mensaje ^    
	}else{

 const main = new MessageEmbed()
 .setColor("WHITE")
 .setAuthor(`Mensaje Escrito de ${msg.delete.tag}`, msg.delete.displayAvatarURL())
 .addField("Canal", `<#${msg.canal.id}>`)
 .setDescription(`${msg.content}`)
 message.reply({embeds: [main]});
}
/* 
Cada Valor esta en el evento messageDelete del cual en el comando los vas a obtener.
*/

 
 }

}