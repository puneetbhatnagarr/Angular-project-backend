const imageModel = require('../models/image.js')
var cloudinary = require('cloudinary').v2;

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

class imagecontroller{
    static imageinsert = async(req,res)=>{
        
        try{
            const file = req.files.pimages;
            console.log(file)
    
            const myimage = await cloudinary.uploader.upload(file.tempFilePath, {
                folder: 'Digital_profile',
                width: 150,
    
            })
    
        console.log(myimage)
            res.setHeader('Access-Control-Allow-Origin','*');
            const doc = new imageModel({
                pimages: {
                    public_id: myimage.public_id,
                    url: myimage.secure_url
                }
               
              });
              await doc.save();
        
         }catch(error){
             console.log(error)
         }

   
    }

}
module.exports = imagecontroller