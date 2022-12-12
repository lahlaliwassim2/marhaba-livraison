const fs = require("fs");

const removeFile = (image_name) => {

    const directoryPath = 'images/';
  
    try {
      fs.unlinkSync(directoryPath + image_name);
        console.log('deleted from fs file');
    
    } catch (err) {
    console.log(err)
    }
  };
  
  module.exports = {
    removeFile,
  };