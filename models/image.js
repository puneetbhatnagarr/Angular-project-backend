const mongoose = require('mongoose')

const imageSchema = new mongoose.Schema({
    pimages: {
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
    
});


var imageModel = mongoose.model("image", imageSchema);
module.exports = imageModel;
