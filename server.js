const Express = require('express')
const api = require('./routes/index')
const ejs = require('ejs');
const bodyparser = require('body-parser')



const app = Express();

app.use('/',Express.static('public'));
app.set('view engine','ejs');
app.use('/',api);
//app.use(bodyparser.json())





app.listen(3000,()=>{
    console.log('Listening to port 3000')
});