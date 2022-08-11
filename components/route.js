const path = require('path');

const express = require('express');

module.exports = (app) => {
    require("../api/questions/questions.route")(app);
    require("../api/answers/answers.route")(app);
    // require("../api/answers/answer.model")(app);
}