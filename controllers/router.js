const express = require('express')
const router = express.Router()
const { db } = require('../models/firebase')



router.get('/', (req, res) => {
    res.json({
        "test": true
    })

    
})

router.post('/', (req, res) => {
    res.send(req.body)
    const { name, email, message } = req.body
    console.log(name, email, message)
 db.collection('messages').add({
        name,
        email,
        message
    })
    
})


module.exports = router