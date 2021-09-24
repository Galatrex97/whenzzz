module.exports.run = async (client, queue, playlist) => {
queue.textChannel.send(`Playlist añadida correctamente: **${playlist.name}** - con **${playlist.songs.length}** canciones`)
}