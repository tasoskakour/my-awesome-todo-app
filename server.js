const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const compression = require('compression');
const path = require('path');
const app = express();

// Compression middleware
app.use(compression())

// Loggings and Parsing
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Serve any static files
app.use('/', express.static(path.join(__dirname, 'build')));

// Send index
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(process.env.PORT || 4000, () => console.log(`HTTP Server Listening on port ${process.env.PORT || 4000}`));
