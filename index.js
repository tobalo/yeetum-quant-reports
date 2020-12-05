const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');


const app = express();

// Use body parser to read incoming packets for routes
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('*', (req, res) => {
    console.log("Quant report triggered...");
    res.sendFile(path.join(__dirname, './public', 'quantstats.html'));
});

const PORT = process.env.PORT || 8080;

console.log('Server listening on:', PORT);
app.listen(PORT);