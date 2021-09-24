const express = require('express')
const server = express();
const Monitor = require('ping-monitor');
const path = require('path');


server.set('view engine', 'ejs');
server.set('views', path.join(__dirname, 'views'))

server.all('/', (req, res) => {
    res.render('index', { commands: `'ggn't` });
});



	 function keepAlive() {
    server.listen(3000, () => {
        console.log('Servidor Listo.');
    });
    return true;
 
}


module.exports = keepAlive;
