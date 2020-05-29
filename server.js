const express = require('express')
const cors = require('cors')
const path = require('path')

// require('./../models/firebase')

if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config({ path: "./config/.env" })
}else{
    app.use(express.static('./client'));
}



const app = express()

const port = process.env.PORT

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))




app.get('*', (request, response) => {
	response.sendFile(path.join(__dirname, './client', 'index.html'));
});

app.listen(port, () => {
    console.log(`server is running on port ${port}`)
})