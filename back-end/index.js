/* *|MARKER_CURSOR|* */
const express = require('express')
const app = express()

const dotenv = require('dotenv').config();

require('./configs/db')
require('./models/generateRole')

app.use(express.json())
app.use(express.urlencoded({extended:true}))
// Route
const authRoute = require('./routes/authRoutes') 
app.use('/api/auth', authRoute)
app.use(require("./routes/CategorieRoute"));
app.use(require('./routes/villeRoute'))


const PORT = process.env.PORT || 4000;







/* Listening to the port and logging the message to the console. */
app.listen(PORT, ()=>{
    console.log(`server is running at PORT ${PORT}`)
})