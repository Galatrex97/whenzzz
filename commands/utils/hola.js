module.exports = {
    name: "hola",
    aliases: ["hi"],
    category: 'Útil',
    usage: 'hola/hi',
    description: 'Es enserio? ._.XD',
  

   run: (client, message, args) => {

    message.reply(`Hola ${message.member}`);

      }
   }
    
