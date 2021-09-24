const nyaSchema = require('../../models/parent')

module.exports = {
	name: 'new-ticket',
	category: 'Soporte',
  aliases: [],
  description: 'Esto abrirá un ticket para resolver inconvenientes y/o problemas o dudas.',
  usage: 'new',
	run: async (client, message, args, p) => {
                	let logchannel = message.guild.channels.cache.find(channel => channel.name === `ticket-logs`)

const idParent = args[0]
     let data = await nyaSchema.findOne({ guildId : message.guild.id})

     if (!data) data = await new nyaSchema({ guildId : message.guild.id, parentId: idParent})

     if(!data.parentId) return message.channel.send("Se necesita el ID de una categoria (Esto solo se pide una vez pero si te equivocaste haz dm Galatrex#0247)")

     data.save()

if(!message.guild.me.permissions.has("MANAGE_CHANNELS")) return message.reply("No puedo. intenta ponerme un rol con el permiso **Gestionar Canales**")

            if(!logchannel) {
        message.guild.channels.create('ticket-logs', {
          permissionOverwrites: [
            {
              id: message.guild.roles.everyone,
              deny: ['VIEW_CHANNEL'],
      
            
            }
          ],
          type:'text',
          parent: data.parentId,
        })
      }

		if(message.guild.channels.cache.find(channel => channel.name === `ticket-${message.author.id}`)) {
			return message.reply('Ya tienes un ticket abierto, cierralo y luego vuelve a intentarlo o espera a que nos contactemos contigo');
    }
		message.guild.channels.create(`ticket-${message.author.id}`, {
			permissionOverwrites: [
				{
					id: message.author.id,
					allow: ['SEND_MESSAGES', 'VIEW_CHANNEL'],
				},
				{
					id: message.guild.roles.everyone,
					deny: ['VIEW_CHANNEL'],
				},
			],
			type: 'text',
      parent: data.parentId,
		}).then(async channel => {
			message.reply(`Se ha creado el ticket correctamente, ve a ${channel} para ver tu ticket`);
			channel.send(`Hola ${message.author}, Bienvenido/a a tu ticket! Se paciente, Nos contactaremos contigo lo más pronto posible, Si quieres cerrar este ticket utiliza: \`${p}close\``);

      	if (logchannel) logchannel.send(`Ticket de ${message.author} creado. <#${channel.id}>`);

      


		}
    );
     

	},
};

// to add a custom role copy this and paste it as explained in the video and replace role-id with the role ya want :D
// {
//					id: message.guild.roles.cache.get("role-id"),
//					allow: ['SEND_MESSAGES', 'VIEW_CHANNEL'],
//				}