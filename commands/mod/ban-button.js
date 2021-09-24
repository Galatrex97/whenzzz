const Discord = require("discord.js");
const { Client, MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");

module.exports = {
  name: "bban",
  aliases: ["ban-button"],
  usage: 'bban <@usuario>',
  category: 'Mod',
  description: 'Ban button Bv',

run: (client, message, args) => {
const row = new MessageActionRow().addComponents(
	new MessageButton()
	.setCustomId("asd")
	.setLabel("Si")
	.setStyle("SUCCESS"),
	new MessageButton()
	.setCustomId("XD")
	.setLabel("No")
	.setStyle("DANGER")
);

const user = message.mentions.members.first();
if(!user) return message.reply("Debes mencionar a alguien")

if(!message.member.permissions.has("ADMINISTRATOR" || "BAN_MEMBERS")) return message.reply("Debes tener permiso de administrador o banear miembros")

if(!message.guild.me.permissions.has("ADMINISTRATOR" || "BAN_MEMBERS")) return message.reply("No puedo hacer esto por falta de permiso de Banear Miembros o Administrador")

const razon = args.join(" ").slice(22);
if(!razon) return message.reply("Debes decir una razón")

message.reply({ content: 'Estás seguro que quieres banear a este usuario?', components: [row]})
 
const filter = (interaction) => {
	if(interaction.user.id === message.author.id) return true;
	return interaction.reply({content: "No puedes tomar esta decisión por otra persona.", ephemeral: true})
};

const collector = message.channel.createMessageComponentCollector({
	filter,
	max: 1,
});

	collector.on("end", (ButtonInteraction) => {

		ButtonInteraction.first().deferUpdate();

		const id = ButtonInteraction.first().customId;
		if(id === "asd") {
			user.ban({	reason: razon  })
			message.reply(`Se ha baneado con éxito a ${user} por **${razon}**`)
		} else if (id === "XD") {
			return message.reply("El baneo ha sido cancelado")
		}
	})

 },

};