const { readdirSync } = require("fs");

const ascii = require("ascii-table");

// Crea una tabla ascii
let table = new ascii("Cmds");
table.setHeading("Commandos", "Estado");
module.exports = (client) => {
    // Lee los comandos en subcarpetas
    readdirSync(__dirname.replace("\handlers", "\commands")).forEach(dir => {
        // Filtro de archivos .js
        const commands = readdirSync(`${__dirname.replace("\handlers", "\commands")}/${dir}/`).filter(file => file.endsWith(".js"));
    
        for (let file of commands) {
            let pull = require(`${__dirname.replace("\handlers", "\commands")}/${dir}/${file}`);
    
            if (pull.name) {
                client.commands.set(pull.name, pull);
                table.addRow(file, '✅');
            } else {
                table.addRow(file, `❌  -> falta el nombre`);
                continue;
            }
    
            // If there's an aliases key, read the aliases.
            if (pull.aliases && Array.isArray(pull.aliases)) pull.aliases.forEach(alias => client.aliases.set(alias, pull.name));
        }
    });
    // Log the table
    console.log(table.toString());
}