const Discord = require("discord.js");
const { Client, MessageEmbed } = require("discord.js");
const antilink = require("../../models/antilinkbv");

module.exports = {
  name: "antilink",
  aliases: ["antilinks"],
  usage: 'antilinks on/off',
  category: 'Mod',
  description: '',

run: (client, message, args, p) => {

	if(!message.member.permissions.has("ADMINISTRATOR")) return message.reply("No.").then(nya => {
  setTimeout(() => {
    nya.delete()
  }, 7000)
})

if(!args[0]) return;

	if(args[0] === 'on') {
		antilink.findOne({ Guild: message.guild.id }, async(err, data) => {
			if(data.jaja === true) {
				return message.reply({ content: `El antilink ya estaba activado. Usa \`${p}antilink off\` para desactivarlo`})
			}
	if (err) throw err;
	if(data) {
		await antilink.findOneAndDelete({ Guild: message.guild.id })
		data = new antilink({
			Guild: message.guild.id,
			jaja: true
		})
		data.save()
		message.reply({ content: "El antilink ha sido activado. Ahora solo los administradores pueden enviar links."})
	}
	if (!data) {
		data = new antilink({
			Guild: message.guild.id,
			jaja: true
		})
		data.save()
		message.reply({ content: "El antilink ha sido activado por primera vez"})
	}
})
	} else if(args[0] === 'off') {
		antilink.findOne({ Guild: message.guild.id }, async(err, data) => {
			if(data.jaja === false){
				return message.reply({ content: `El antilink ya estaba desactivado. Prueba \`${p}antilink on\` para activarlo.`})
			}
			if(err) throw err;
			if(!data) {
			return message.reply({ content: `El antilink por defecto viene deshabilitado. Usa \`${p}antilink on\` para activarlo por primera vez.`})
			}else if(data) {
		await antilink.findOneAndDelete({ Guild: message.guild.id })
		data = new antilink({
			Guild: message.guild.id,
			jaja: false
		})
		data.save()
		message.reply({ content: "El antilink ha sido desactivado. Ahora pueden enviar links."})
	}
		})
	} else {
		return;
	}

  
 }

}