const fs = require("fs");

const removeFile = (fileName) => {

    const directoryPath = 'images/';
  
    try {
      fs.unlinkSync(directoryPath + fileName);
        console.log('deleted from fs file');
    
    } catch (err) {
    console.log(err)
    }
  };
  
  module.exports = {
    removeFile,
  };