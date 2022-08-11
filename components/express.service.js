const Promise = require('bluebird');
const express = require('express');
const Config = require('../config.json');
const bodyParser = require('body-parser');
const cors = require('cors');

this.connect = () => {
    console.log("Express")
    return new Promise((rs, rj) => {
        const app = express();
        const port = Config.server.port != null ? Config.server.port : 8080;
        app.use(bodyParser.json({ limit: '5mb' }));
        app.use(cors());
        this.server = app.listen(port, () => {
            this.app = app;
            console.log(`App listening on port ${port}!`);
            return rs();
          });
    })
}