const express = require('express')
const cors = require('cors')
const path = require('path')
const dotenv = require('dotenv')

dotenv.config({ path: "./config/.env" })
// require('./../models/firebase')

const app = express()

const port = process.env.PORT

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false}))


const publicDirectory = path.join(__dirname, './client')


app.use(express.static(publicDirectory))

app.get('/', (req, res) => {
    res.sendFile(publicDirectory)
})

app.listen(port, () => {
    console.log(`server is running on port ${port}`)
})