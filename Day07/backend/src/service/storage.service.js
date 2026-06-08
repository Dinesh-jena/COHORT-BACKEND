const ImageKit = require("@imagekit/nodejs");
const mongoose = require('mongoose');

const imagekit = new ImageKit({
    publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
    urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT
});

const uploadFile = async (file) => {
    try {

        const result = await imagekit.files.upload({
            file: file.buffer.toString("base64"),
            fileName:(new  mongoose.Types.ObjectId().toString()),
            folder:"moddy-player"
        });

        return result;

    } catch (error) {
        console.log("ImageKit upload error:", error);
    }
};

module.exports = uploadFile;