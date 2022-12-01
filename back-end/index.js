/* *|MARKER_CURSOR|* */
const express = require('express')
require('./configs/db')
const app = express()
const dotenv = require('dotenv').config();
const PORT = process.env.PORT || 4000;







/* Listening to the port and logging the message to the console. */
app.listen(PORT, ()=>{
    console.log(`server is running at PORT ${PORT}`)
})