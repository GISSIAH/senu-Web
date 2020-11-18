const router = require('express').Router();
const axios = require('axios');
const bodyparser = require('body-parser')
const urlenco = bodyparser.urlencoded({extended:true})

router.get('/',(req,res)=>{
    res.render('vis')
})
router.get('/vis',(req,res)=>{
    console.log('home');
    res.render('home')
});
router.get('/test',(req,res)=>{
    console.log('test');
    res.render('test')
});
router.get('/entry',(req,res)=>{
    console.log('entry nig')
    res.render('record')
});
router.post('/entry',urlenco,(req,res)=>{
    var new_body={'name':req.body.name,
        'type':req.body.type,
        'admitted':req.body.admitted,
        'doctors':req.body.doctors,
        'nurses':req.body.nurses,
        'time':Date()}

    axios.post('https://senu-back.herokuapp.com/',new_body).then(data=>{
        console.log(data)
    }).catch(err=>{
        console.log(err)
    })
    res.render('record')
});
router.post('/',(req,res)=>{
    console.log()
    
})
module.exports = router;
