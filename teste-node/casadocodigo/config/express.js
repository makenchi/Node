module.exports = function() {
    console.log("Módulo carregado");
    var express = require('express');
    var app = express();
    app.set('view engine','ejs');
    
    return app;
}