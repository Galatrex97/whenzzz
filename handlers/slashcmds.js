const { readdirSync } = require("fs");

const ascii = require("ascii-table");

// Crea una tabla ascii
let table = new ascii("Cmds");
table.setHeading("Slash.Cmd", "Estado");
module.exports = async(client) => {

const gg = [];

    // Lee los comandos en subcarpetas
    readdirSync(__dirname.replace("\handlers", "\commands.slash")).forEach(dir => {
        // Filtro de archivos .js
        const commands = readdirSync(`${__dirname.replace("\handlers", "\commands.slash")}/${dir}/`).filter(file => file.endsWith(".js"));
    
        for (let file of commands) {
            let pull = require(`${__dirname.replace("\handlers", "\commands.slash")}/${dir}/${file}`);

						if(pull.name) {
															client.slashCommands.set(pull.name, pull)

														if(["MESSAGE", "USER"].includes(pull.type)) delete pull.description;
														gg.push(pull)

											client.on("ready", async () => {
												await client.application.commands.set(gg)
											})

                table.addRow(file, '✅');
						} else {
                table.addRow(file, `❌  -> falta el nombre`);
                continue;
            }
    

        }
    });
    // Log the table
    console.log(table.toString());
}