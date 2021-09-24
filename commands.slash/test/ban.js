const { Client, CommandInteraction, MessageEmbed } = require("discord.js");


module.exports = {
    name: "ban",
    description: "Banea un usuario",
    options: [
			{
				name: 'user',
				description: 'Usuario a banear',
				type: 'USER',
				required: true
			},
			{
				name: 'reason',
				description: 'Razón del baneo',
				type: 'STRING',
				required: true
			},
		],
    /**
     *
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */
    run: async (client, interaction, args) => {



const owner = (await interaction.guild.fetchOwner()).user.id;
const banReason = interaction.options.getString('reason')
const user = interaction.options.getUser('user')
const member = interaction.guild.members.cache.get(user.id) || await interaction.guild.members.fetch(user.id).catch(err => {})
if(member.id === owner && interaction.user.id) {
 interaction.followUp({ content: 'No te puedes banear a ti mismo, además tu eres el dueño del servidor.', ephemeral: true	})
} else if(member.id === owner) {
 interaction.followUp("No puedes banear al dueño del servidor.")
}else	if(member.id === interaction.user.id) {
 interaction.followUp("No te puedes banear a ti mismo.")
} else if(!interaction.guild.me.permissions.has("BAN_MEMBERS")) {
 interaction.followUp({content: "No tengo ese permiso, así que no se puede usar ese comando.", ephemeral: true})
	} else if(!interaction.member.permissions.has("BAN_MEMBERS")) {
 interaction.followUp({content: "No tienes el permiso para **Banear miembros**.", ephemeral: true})
	} else if(client.user.id === member.id) {
 interaction.followUp({content: "XDn't", ephemeral: true})
	} else if (interaction.member.roles.highest.position <= member.roles.highest.position) {
		        return interaction.followUp({content: 'No puedes banear a una persona con un mayor o igual rango que tú.', ephemeral: true})
	 } else if (!user.bot) {
		   const nya = new MessageEmbed()
  .setTitle("Adiós.")
  .setDescription(`Lamentablemente has sido baneado de **${interaction.guild.name}** por el Moderador: **${interaction.user.username}**.\nLa razón de tu baneo fue: **${banReason}**.`)
  .setTimestamp()
	.setFooter("Hasta pronto.")
		 member.send({embeds: [nya]})
		 			member.ban({ reason: banReason })
					         interaction.followUp({ content: `El usuario **${user}** ha sido Baneado.\nModerador: ${interaction.user.toString()}\nRazón: **${banReason}**`, ephemeral: false });
	 }else{

			member.ban({ reason: banReason })



        interaction.followUp({ content: `El bot **${user}** ha sido Baneado.\nModerador: ${interaction.user.toString()}\nRazón: **${banReason}**`, ephemeral: false });
				
	}
    },
};