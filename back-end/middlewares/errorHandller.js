const errorHandller = async(error ,req ,res,next) => {
    res.send(error.message)
}
module.exports = errorHandller;
