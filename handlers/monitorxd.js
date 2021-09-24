const { readdirSync } = require("fs");
const Monitor = require('ping-monitor');
const ascii = require("ascii-table");
const monitor = require('../monitor')


// Create a new Ascii table
let table = new ascii("Monitor");
table.setHeading("Eventos", "Estado");

module.exports = async (client) => {

  const commands = readdirSync(__dirname.replace("\handlers", "\m-events")).filter(file => file.endsWith(".js"));

  for (let file of commands) {

    try {
    let pull = require(`${__dirname.replace("\handlers", "\m-events")}/${file}`);

    if (pull.event && typeof pull.event !== "string") {
      table.addRow(file, `❌ -> Este evento no tiene nombre.`);
      continue;
    }

    pull.event = pull.event || file.replace(".js", "")

    client.monitor.on(pull.event, pull.run.bind(null, client))

    table.addRow(file, '✅');

    } catch(err) {

  console.log("Error with the monitorzzz")
  console.log(err)
  table.addRow(file, `❌ -> Error`);
    }
  }

   console.log(table.toString());
}