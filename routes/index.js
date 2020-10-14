const router = require('express').Router();
const axios = require('axios');
const bodyparser = require('body-parser')
const urlenco = bodyparser.urlencoded({extended:true})
router.get('/vis',(req,res)=>{
    console.log('home');
    res.render('home')
});
router.get('/entry',(req,res)=>{
    console.log('entry')
    res.render('entry')
});
router.post('/entry',urlenco,(req,res)=>{
    axios.post('https://senu-back.herokuapp.com/',req.body).then(data=>{
        console.log(data)
    }).catch(err=>{
        console.log(err)
    })
    res.send('Succesfully')
});
router.post('/',(req,res)=>{
    console.log()
    
})
module.exports = router;
