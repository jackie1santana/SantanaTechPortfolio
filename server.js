const express = require('express')
const cors = require('cors')
const path = require('path')
require('dotenv').config({ path: "./config/.env" })



const app = express()

const port = process.env.PORT 

if (process.env.NODE_ENV !== 'production'){
    require('dotenv').config({ path: "./config/.env" })
}else {
    app.use((req, res, next) => {
        if (req.header('x-forwarded-proto') !== 'https')
          res.redirect(`https://${req.header('host')}${req.url}`)
        else
          next()
      })
}




app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))


    const publicDirectory = path.join(__dirname, './client/public')
    app.use(express.static(publicDirectory))
    
    app.use('/form', require('./controllers/router'))

    app.get('*', (req, res) => {
        res.sendFile(publicDirectory)
    })

    


app.listen(port, () => {
    console.log(`server is running on port ${port}`)
})