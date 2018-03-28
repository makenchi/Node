var app = require('./config/express')();

app.get('/produtos',function(req,res){
    console.log("Cliente acessou a lista de produtos");
    res.render("produtos/lista");
});

app.listen(3000,function(){
    console.log("Servidor online.");
});