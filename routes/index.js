const router = require('express').Router();
const axios = require('axios');
router.get('/',(req,res)=>{
    console.log('home');
    res.render('home')
});

router.post('/',(req,res)=>{
    console.log()
    
})

module.exports = router;