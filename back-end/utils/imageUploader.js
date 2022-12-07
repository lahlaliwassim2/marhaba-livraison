
const path = require('path')
const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req,file,callback)=>{
        callback(null,'images')
    },
    filename: (req,file,callback)=>{
        callback(null,Date.now() + path.extname(file.originalname))
    }
})

module.exports = multer({storage:storage})