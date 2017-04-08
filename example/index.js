var api = require('../index.js');
api({
    url: '/test',
    type: 'get'
}).done(function(res){
    console.log(res)
})
api({
    url: '/test',
    type: 'post'
}).done(function(res){
    console.log(res)
})
api({}).done(function(res){
    console.log(res)
}).fail(function(err){
    console.log(err)
})
api({url: '/apptest'}).done(function(res){
    console.log(res)
}).fail(function(err){
    console.log(err)
})