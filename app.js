require('dotenv').config();

const express = require('express');

const app = express();

const port = process.env.PORT;

// Servir contenido estático.
 
app.use( express.static('public') );

app.get('*', (req, res) => {

    res.sendFile(__dirname + '/public/index.html');
});
 
app.listen(port, () => {

    console.log(`Servidor corriendo en http://localhost:${port}.`);
});