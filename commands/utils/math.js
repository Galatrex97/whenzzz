const math = require("math-expression-evaluator"); // Este NPM es con el que se podrá hacer los calculos
const Discord = require("discord.js");
const { Client, MessageEmbed } = require("discord.js");

module.exports = {
  name: "math",
  aliases: ["Útil"],
  usage: 'math <args>',
  category: 'Útil',
  description: 'Una calculadora para resolver operaciones matematicas de forma sencilla.',

run: async(client, message, args) => {

const embed = new Discord.MessageEmbed()
  .setColor(`WHITE`);
  
  if (!args[0]) {
    embed.setFooter("Por favor escribe una `expresion`.");
    return await message.reply({embeds: [embed]}); // Devuelve un mensaje si es que ejecuta el comando sin nada
  }
  let resultado;
  try {
    resultado = math.eval(args.join(" ")); // El Args toma el calculo
  } catch (e) {
    resultado = "Error: Entrada Invalida"; // Cuando es incorrecta
  }
  embed.addField("Entrada:", `\`\`\`js\n${args.join(" ")}\`\`\``, false) // Te da el calculo
  .setTitle("Calculadora de Vektor")
  .addField("Resultado", `\`\`\`js\n${resultado}\`\`\``, false);
  await message.channel.send({embeds: [embed]});
}
 
 };

   // Finaliza el código
// Cualquier duda, lean la doc de la NPM 