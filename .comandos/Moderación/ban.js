
module.exports = {
  name: "ban",
  alias: ["funar"],
  
run: (client, message, args) => {

  if(!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send("No tengo ese permiso, así que no se puede usar ese comando (Es temporal)")

  let user = message.mentions.members.first();

  let banReason = args.join(' ').slice(22);

  if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("No tienes el permiso para **Banear miembros**")

  if(!user) return message.channel.send("A quien se supone que quieres banear?")

  if (message.member.roles.highest.comparePositionTo(user.roles.highest) <= 0) return message.channel.send("No puedes banear a esa persona por que tiene un mayor o igual rango que tú.")

  if(user === message.author) return message.channel.send("Fun fact: no te puedes banear a ti mismo.")

  if(!banReason) return message.channel.send("Escribe una razón.")

  user.ban({ reason: banReason})
  }
}