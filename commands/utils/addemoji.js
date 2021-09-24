const Discord = require("discord.js");

module.exports = {
	name: "add-emoji",
	aliases: ["addemoji"],
	usage: "add-emoji <:emoji:>",
	category: "Útil",
	description: `"Toma prestado" un emoji de otro servidor`,

	run: async(client, message, args) => {
			if(!message.member.permissions.has("MANAGE_EMOJIS")) {
				message.reply("Necesitas el permiso **Gestionar emojis** para usar este comando.")
				return;
			}

			if(!args.length) {
				message.reply("Por favor especifica el emoji")
					return;
			}

for(let emojix of args) {
	let emojibv = Discord.Util.parseEmoji(emojix);

	if(emojibv.id) {
		let emojiExt = emojibv.animated ? ".gif" : ".png";
		let emojiURL = `https://cdn.discordapp.com/emojis/${emojibv.id + emojiExt}`
		message.guild.emojis.create(emojiURL, emojibv.name).then(emoji => message.channel.send(`El emoji (<:${emoji.name}:${emoji.id}>) ha sido añadido al servidor.`))
	}
}

	}
}