const Distube = require('distube')
module.exports = client => {
  //Distube(m)
client.distube = new Distube.default(client, {
  emitNewSongOnly: true,
  searchSongs: 0,
  leaveOnStop: true,
  leaveOnFinish: true,
  leaveOnEmpty: true,
  youtubeCookie: process.env.youtubeCookie,
  customFilters: {
    "8d" : "apulsator=hz=0.075"
  }
});
}

