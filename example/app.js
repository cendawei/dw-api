var express = require('express');
var app = express();
app.set("views", __dirname + "/views");
app.use(express.static('public'));
app.set("view engine", "ejs");
app.get('/', function(req, res){
    // res.sendfile('./views/index.html');
    res.render('index');
});
app.get('/test', function(req, res){
    res.json({
        code: 0,
        msg: 'success',
        data: {
            name: 'cendawei',
            email: '280842458@qq.com',
            addr: 'http://cendawei.github.io',
            method: 'get'
        }
    })
})
app.post('/test', function(req, res){
    res.json({
        code: 0,
        msg: 'success',
        data: {
            name: 'cendawei',
            email: '280842458@qq.com',
            addr: 'http://cendawei.github.io',
            method: 'post'
        }
    })
})
app.listen(3000);
console.log("listening on host 127.0.0.1 port 3000\n")