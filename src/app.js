const express = require('express');
const { hello } = require('./utils');
const app = express();

app.get(['/', '/:name'], (req, res) => {
    res.json({
        name: hello(req.params.name || 'Foo')
    })
})

module.exports = app;