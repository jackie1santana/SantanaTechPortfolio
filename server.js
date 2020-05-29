const express = require('express')
const cors = require('cors')
const path = require('path')

// require('./../models/firebase')

if (process.env.NODE_ENV !== 'production') require('dotenv').config({ path: "./config/.env" })

const app = express()

const port = process.env.PORT

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))


app.use(express.static('client'))

app.get('/', (req, res) => {
    res.send('hey')
})

app.listen(port, () => {
    console.log(`server is running on port ${port}`)
})